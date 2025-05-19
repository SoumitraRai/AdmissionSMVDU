import { PrismaClient } from './prisma/generated/prisma/index.js';
import runInitialAllocation from './iterations/initialAllocation.js';
import runGeneralSubcategoryAllocation from './iterations/generalSubcategory.js';
import runReservedCategoryAllocation from './iterations/reservedCategory.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function startAllocationProcess() {
    console.log('Function started');
    let round = 1;
    let continueAllocation = true;
    
    try {
        await prisma.$connect();
        console.log('Database connected');
        
        const allStudents = await prisma.studentApplication.findMany({
            orderBy: { jeeCRL: 'asc' }
        });
        
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
            console.log(`Total students to process: ${allStudents.length}`);
            
            // Run allocation phases
            const initial = await runInitialAllocation(allStudents, round);
            const general = await runGeneralSubcategoryAllocation(allStudents, round);
            const reserved = await runReservedCategoryAllocation(allStudents, round);

            // Log results
            console.log('\n--- Allocation Results ---');
            console.log(`Initial Phase: ✓ ${initial.success.length} | ✗ ${initial.failures.length}`);
            console.log(`General Phase: ✓ ${general.success.length} | ✗ ${general.failures.length}`);
            console.log(`Reserved Phase: ✓ ${reserved.success.length} | ✗ ${reserved.failures.length}`);

            const remainingSeats = await prisma.seatMatrix.findMany({
                where: { totalSeats: { gt: 0 } }
            });

            const unallocatedStudents = await prisma.studentApplication.count({
                where: {
                    NOT: { allocations: { some: {} } }
                }
            });

            console.log('\n=== Round Status ===');
            console.log(`Round: ${round}`);
            console.log(`Remaining seats: ${remainingSeats.length}`);
            console.log(`Unallocated students: ${unallocatedStudents}`);

            const allocationsThisRound = initial.success.length + 
                                       general.success.length + 
                                       reserved.success.length;
            
            console.log(`Total allocations this round: ${allocationsThisRound}`);

            if (allocationsThisRound === 0 || round > 10) {
                continueAllocation = false;
                console.log('\nStopping allocation because:');
                if (allocationsThisRound === 0) console.log('- No new allocations');
                if (round > 10) console.log('- Maximum rounds reached');
            }

            round++;
        }

        // Final Analysis
        const finalAllocations = await prisma.allocatedSeat.findMany({
            include: { 
                student: true,
                department: true 
            }
        });

        // Generate CSV without course choices
        const csvHeaders = [
            'applicationNumber',
            'studentName',
            'jeeCRL',
            'category',
            'subCategory',
            'allocatedDepartment',
            'departmentName',
            'allocatedCategory',
            'allocatedSubCategory',
            'allocationRound',
            'status'
        ];

        const csvRows = [csvHeaders.join(',')];

        // Add allocated students to CSV
        for (const alloc of finalAllocations) {
            csvRows.push([
                alloc.studentId,
                alloc.student.studentName,
                alloc.student.jeeCRL,
                alloc.student.category,
                alloc.student.subCategory,
                alloc.departmentId,
                alloc.department.name,
                alloc.category,
                alloc.subCategory,
                alloc.round,
                'ALLOCATED'
            ].join(','));
        }

        const csvContent = csvRows.join('\n');
        const outputPath = path.join(process.cwd(), 'final.csv');
        fs.writeFileSync(outputPath, csvContent, 'utf8');
        console.log(`\nFinal allocation data saved to ${outputPath}`);

        console.log('\n=== Allocation Process Complete ===\n');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

function determineUnallocationReason(seat, eligibleStudents, allocatedElsewhere) {
    if (eligibleStudents.length === 0) return 'No eligible students';
    if (allocatedElsewhere.length === eligibleStudents.length) return 'All eligible students got better choices';
    if (eligibleStudents.length < seat.totalSeats) return 'Insufficient eligible candidates';
    return 'Eligible students got other preferences';
}

export default startAllocationProcess;

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
