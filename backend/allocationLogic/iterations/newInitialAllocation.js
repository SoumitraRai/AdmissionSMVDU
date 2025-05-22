import { PrismaClient } from '../prisma/generated/prisma/index.js';
import allocateSeats from '../allocateSeats.js';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function releaseFloatingSeats(round) {
    console.log('\n=== Releasing Floating Seats ===');
    
    try {
        const floatingSeats = await prisma.allocatedSeat.findMany({
            where: {
                allocationRound: round - 1,
                choiceNumber: { not: 1 }
            },
            include: {
                department: true,
                student: true
            }
        });

        console.log(`Found ${floatingSeats.length} floating seats to release`);

        const released = await prisma.$transaction(async (tx) => {
            const releases = [];
            
            for (const seat of floatingSeats) {
                await tx.seatMatrix.updateMany({
                    where: {
                        departmentId: seat.departmentId,
                        category: seat.category,
                        subCategory: seat.subCategory
                    },
                    data: {
                        totalSeats: { increment: 1 }
                    }
                });
                
                releases.push({
                    department: seat.department.name,
                    category: seat.category,
                    subCategory: seat.subCategory,
                    student: seat.student.applicationNumber
                });
            }
            return releases;
        });

        console.log('Released seats summary:', {
            total: released.length,
            byDepartment: released.reduce((acc, r) => {
                acc[r.department] = (acc[r.department] || 0) + 1;
                return acc;
            }, {})
        });

        return floatingSeats;
    } catch (error) {
        console.error('Error releasing floating seats:', error);
        throw error;
    }
}

export async function runUpgradeAllocation(round, options = {}) {
    console.log(`\n=== Starting Upgrade Allocation (Round ${round}) ===`);
    console.log(`Timestamp: ${new Date().toISOString()}`);

    try {
        // Release floating seats from previous round
        await releaseFloatingSeats(round);

        // Fetch all students with their previous allocations
        const students = await prisma.studentApplication.findMany({
            include: {
                allocations: {
                    where: { allocationRound: round - 1 },
                    orderBy: { allocatedAt: 'desc' },
                    take: 1
                }
            }
        });

        console.log(`Processing ${students.length} total students`);

        // Transform students data
        const transformedStudents = students.map(student => ({
            ...student,
            allocatedSeat: student.allocations[0] || null
        }));

        // Filter upgrade candidates
        const upgradeCandidates = transformedStudents.filter(student => {
            if (!student.allocatedSeat) {
                console.log(`${student.applicationNumber}: Unallocated - Eligible`);
                return true;
            }
            if (student.allocatedSeat.choiceNumber === 1) {
                console.log(`${student.applicationNumber}: First choice - Frozen`);
                return false;
            }
            console.log(`${student.applicationNumber}: Choice #${student.allocatedSeat.choiceNumber} - Floating`);
            return true;
        });

        // Sort by JEE rank
        const sortedStudents = [...upgradeCandidates].sort((a, b) => a.jeeCRL - b.jeeCRL);

        // Prepare students for allocation
        const studentsForAllocation = sortedStudents.map(student => {
            const filteredChoices = [
                student.courseChoice1,
                student.courseChoice2,
                student.courseChoice3,
                student.courseChoice4,
                student.courseChoice5,
                student.courseChoice6,
                student.courseChoice7
            ].filter(Boolean);

            // For allocated students, only keep better choices
            const effectiveChoices = student.allocatedSeat
                ? filteredChoices.slice(0, student.allocatedSeat.choiceNumber - 1)
                : filteredChoices;

            return {
                ...student,
                courseChoice1: effectiveChoices[0] || null,
                courseChoice2: effectiveChoices[1] || null,
                courseChoice3: effectiveChoices[2] || null,
                courseChoice4: effectiveChoices[3] || null,
                courseChoice5: effectiveChoices[4] || null,
                courseChoice6: effectiveChoices[5] || null,
                courseChoice7: effectiveChoices[6] || null,
                category: 'GEN',
                subCategory: 'GNGN'
            };
        }).filter(student => 
            !student.allocatedSeat || student.courseChoice1 !== null
        );

        console.log(`Prepared ${studentsForAllocation.length} students for allocation`);

        // Call allocation with updated options structure
        const result = await allocateSeats(studentsForAllocation, {
            round,
            mode: 'upgrade',
            respectFreeze: true,
            handleFloat: true,
            allowChoicePriority: true,
            options: {
                checkRanking: true,
                tryAllChoices: true,
                allowUpgrade: true
            }
        });

        console.log('\n=== Allocation Results ===');
        console.log(`Successful allocations: ${result.success?.length || 0}`);
        console.log(`Failed allocations: ${result.failures?.length || 0}`);

        return result;

    } catch (error) {
        console.error('Allocation failed:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Execute the allocation
const round = 2;

runUpgradeAllocation(round)
    .then(result => {
        console.log('Upgrade allocation completed successfully');
        console.log('Final results:', result);
    })
    .catch(error => {
        console.error('Fatal error during upgrade allocation:', error);
        process.exit(1);
    });