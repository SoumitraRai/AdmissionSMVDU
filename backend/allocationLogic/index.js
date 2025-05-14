import { PrismaClient } from './prisma/generated/prisma/index.js';
import runInitialAllocation from './iterations/initialAllocation.js';
import runGeneralSubcategoryAllocation from './iterations/generalSubcategory.js';
import runReservedCategoryAllocation from './iterations/reservedCategory.js';

const prisma = new PrismaClient();

export async function startAllocationProcess() {
    console.log('Function started');  // Add this line
    let round = 1;
    let continueAllocation = true;
    
    try {
        // Test database connection
        await prisma.$connect();
        console.log('Database connected');
        
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

            // Get and show all students
            const students = await prisma.studentApplication.findMany({
                orderBy: { jeeCRL: 'asc' }
            });
            console.log(`Total students to process: ${students.length}`);
            console.log('Sample student data:');
            console.table(students.slice(0, 3).map(s => ({
                appNo: s.applicationNumber,
                jeeCRL: s.jeeCRL,           // Changed from rank to jeeCRL
                cat: s.category,
                subcat: s.subCategory,
                choice1: s.courseChoice1
            })));

            // Run and log initial allocation
            console.log('\n--- Initial Allocation Phase ---');
            const initial = await runInitialAllocation(students, round);
            console.log(`Initial allocation results:`);
            console.log(`✓ Success: ${initial.success.length}`);
            console.log(`✗ Failures: ${initial.failures.length}`);
            if (initial.success.length > 0) {
                console.log('Sample successful allocations:');
                console.table(initial.success.slice(0, 3));
            }

            // Run and log general subcategory allocation
            console.log('\n--- General Subcategory Phase ---');
            const general = await runGeneralSubcategoryAllocation(students, round);
            console.log(`General subcategory results:`);
            console.log(`✓ Success: ${general.success.length}`);
            console.log(`✗ Failures: ${general.failures.length}`);
            if (general.success.length > 0) {
                console.log('Sample successful allocations:');
                console.table(general.success.slice(0, 3));
            }

            // Run and log reserved category allocation
            console.log('\n--- Reserved Category Phase ---');
            const reserved = await runReservedCategoryAllocation(students, round);
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

        // Final allocation status
        const finalAllocations = await prisma.allocatedSeat.findMany({
            include: {
                student: true
            }
        });
        console.log('\n=== Final Allocation Summary ===');
        console.log(`Total Allocations: ${finalAllocations.length}`);
        if (finalAllocations.length > 0) {
            console.log('Sample allocations:');
            console.table(finalAllocations.slice(0, 5).map(alloc => ({
                student: alloc.studentId,
                dept: alloc.departmentId,
                cat: alloc.category,
                subcat: alloc.subCategory,
                round: alloc.allocationRound
            })));
        }

        console.log('\n=== Allocation Process Complete ===\n');
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
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