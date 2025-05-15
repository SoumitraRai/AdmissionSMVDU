import { PrismaClient } from './prisma/generated/prisma/index.js';
import runInitialAllocation from './iterations/initialAllocation.js';
import runGeneralSubcategoryAllocation from './iterations/generalSubcategory.js';
import runReservedCategoryAllocation from './iterations/reservedCategory.js';

const prisma = new PrismaClient();

export async function startAllocationProcess() {
    console.log('Function started');
    let round = 1;
    let continueAllocation = true;
    
    try {
        // Test database connection
        await prisma.$connect();
        console.log('Database connected');
        
        // Get all students once at the start
        const allStudents = await prisma.studentApplication.findMany({
            orderBy: { jeeCRL: 'asc' }
        });
        
        // Initial seat matrix status
        console.log('\n=== Initial Seat Matrix Status ===');
        const initialSeats = await prisma.seatMatrix.findMany();
        console.table(initialSeats.map(seat => ({
            dept: seat.departmentId,
            cat: seat.category,
            subcat: seat.subCategory,
            seats: seat.totalSeats
        })));

        while (continueAllocation) {
            console.log(`\n=== Starting Allocation Round ${round} ===\n`);

            // Use allStudents instead of fetching again
            console.log(`Total students to process: ${allStudents.length}`);
            console.log('Sample student data:');
            console.table(allStudents.slice(0, 3).map(s => ({
                appNo: s.applicationNumber,
                jeeCRL: s.jeeCRL,
                cat: s.category,
                subcat: s.subCategory,
                choice1: s.courseChoice1
            })));

            // Pass allStudents to allocation functions
            console.log('\n--- Initial Allocation Phase ---');
            const initial = await runInitialAllocation(allStudents, round);
            console.log(`Initial allocation results:`);
            console.log(`✓ Success: ${initial.success.length}`);
            console.log(`✗ Failures: ${initial.failures.length}`);
            if (initial.success.length > 0) {
                console.log('Sample successful allocations:');
                console.table(initial.success.slice(0, 3));
            }

            console.log('\n--- General Subcategory Phase ---');
            const general = await runGeneralSubcategoryAllocation(allStudents, round);
            console.log(`General subcategory results:`);
            console.log(`✓ Success: ${general.success.length}`);
            console.log(`✗ Failures: ${general.failures.length}`);
            if (general.success.length > 0) {
                console.log('Sample successful allocations:');
                console.table(general.success.slice(0, 3));
            }

            console.log('\n--- Reserved Category Phase ---');
            const reserved = await runReservedCategoryAllocation(allStudents, round);
            console.log(`Reserved category results:`);
            console.log(`✓ Success: ${reserved.success.length}`);
            console.log(`✗ Failures: ${reserved.failures.length}`);
            if (reserved.success.length > 0) {
                console.log('Sample successful allocations:');
                console.table(reserved.success.slice(0, 3));
            }

            // Check and show remaining seats
            const remainingSeats = await prisma.seatMatrix.findMany({
                where: { totalSeats: { gt: 0 } }
            });
            console.log('\n=== Remaining Seats ===');
            console.table(remainingSeats.map(seat => ({
                dept: seat.departmentId,
                cat: seat.category,
                subcat: seat.subCategory,
                seats: seat.totalSeats
            })));

            // Check unallocated students
            const unallocatedStudents = await prisma.studentApplication.count({
                where: {
                    NOT: {
                        allocations: {
                            some: {}
                        }
                    }
                }
            });
            console.log(`\nUnallocated students: ${unallocatedStudents}`);
            
            // Add these debug logs
            console.log('\n=== Round Status ===');
            console.log(`Round: ${round}`);
            console.log(`Remaining seats: ${remainingSeats.length}`);
            console.log(`Unallocated students: ${unallocatedStudents}`);
            
            // Check if any allocations happened this round
            const allocationsThisRound = 
                initial.success.length + 
                general.success.length + 
                reserved.success.length;
            
            console.log(`Allocations this round: ${allocationsThisRound}`);

            // Modified stopping conditions
            if (allocationsThisRound === 0 || round > 10) {
                continueAllocation = false;
                console.log('\nStopping allocation because:');
                if (allocationsThisRound === 0) {
                    console.log('- No allocations made in this round');
                }
                if (round > 10) {
                    console.log('- Maximum rounds reached');
                }
            }

            round++;
        }

        // Final allocation status with detailed unallocated seat analysis
        console.log('\n=== Final Allocation Analysis ===');
        
        // Get all seats
        const finalSeatStatus = await prisma.seatMatrix.findMany({
            include: {
                department: true  // Include department details if available
            }
        });

        // Get all allocations
        const finalAllocations = await prisma.allocatedSeat.findMany({
            include: {
                student: true
            }
        });

        // Analyze unallocated seats
        const unallocatedSeats = finalSeatStatus.filter(seat => seat.totalSeats > 0);
        
        // Get eligible but unallocated students for each seat
        const unallocatedAnalysis = await Promise.all(unallocatedSeats.map(async seat => {
            // Find eligible students for this seat
            const eligibleStudents = allStudents.filter(student => {
                // Check if student's choices include this department
                const choices = [
                    student.courseChoice1,
                    student.courseChoice2,
                    student.courseChoice3,
                    student.courseChoice4,
                    student.courseChoice5,
                    student.courseChoice6,
                    student.courseChoice7
                ].filter(Boolean);

                return choices.includes(seat.departmentId) &&
                    (student.category === seat.category ||
                    (student.category !== 'GEN' && seat.category === 'GEN')) &&
                    student.subCategory === seat.subCategory;
            });

            // Find allocated students from eligible pool
            const allocatedFromEligible = finalAllocations.filter(alloc =>
                eligibleStudents.some(student => 
                    student.applicationNumber === alloc.studentId
                )
            );

            return {
                department: seat.departmentId,
                category: seat.category,
                subCategory: seat.subCategory,
                remainingSeats: seat.totalSeats,
                eligibleCount: eligibleStudents.length,
                allocatedElsewhere: allocatedFromEligible.length,
                reason: determineUnallocationReason(
                    seat,
                    eligibleStudents,
                    allocatedFromEligible
                )
            };
        }));

        // Display unallocated seats analysis
        console.log('\n=== Unallocated Seats Analysis ===');
        if (unallocatedAnalysis.length > 0) {
            console.table(unallocatedAnalysis.map(analysis => ({
                Dept: analysis.department,
                Cat: analysis.category,
                SubCat: analysis.subCategory,
                Seats: analysis.remainingSeats,
                Eligible: analysis.eligibleCount,
                'Alloted Elsewhere': analysis.allocatedElsewhere,
                Reason: analysis.reason
            })));
        } else {
            console.log('All seats have been allocated!');
        }

        console.log('\n=== Allocation Process Complete ===\n');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Helper function to determine why seats weren't allocated
function determineUnallocationReason(seat, eligibleStudents, allocatedElsewhere) {
    if (eligibleStudents.length === 0) {
        return 'No eligible students';
    }
    if (allocatedElsewhere.length === eligibleStudents.length) {
        return 'All eligible students got better choices';
    }
    if (eligibleStudents.length < seat.totalSeats) {
        return 'Insufficient eligible candidates';
    }
    return 'Eligible students got other preferences';
}

export default startAllocationProcess;

// Check if this is the main module being run
if (process.argv[1] === new URL(import.meta.url).pathname) {
    console.log('Starting allocation process...');
    startAllocationProcess()
        .catch(error => {
            console.error('Error in allocation process:', error);
            process.exit(1);
        })
        .finally(() => {
            prisma.$disconnect();
        });
}