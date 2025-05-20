import { PrismaClient } from './prisma/generated/prisma/index.js';
import { runInitialAllocation } from './iterations/initialAllocation.js';

const prisma = new PrismaClient();

async function main() {
    try {
        // Fetch all students from the database
        const students = await prisma.studentApplication.findMany({
            orderBy: {
                jeeCRL: 'asc'
            }
        });

        console.log(`Found ${students.length} students in database`);

        // Run initial allocation
        const results = await runInitialAllocation(students, 1);

        // Print results
        console.log('\n=== Allocation Results ===');
        console.log(`Successful allocations: ${results.success.length}`);
        console.log(`Failed allocations: ${results.failures.length}`);
        
        // Print detailed results
        console.log('\nSuccessful Allocations:');
        results.success.forEach(allocation => {
            console.log(`Student ${allocation.student} (Rank: ${allocation.jeeRank}) -> ${allocation.department} (Choice #${allocation.choiceNumber})`);
        });

        console.log('\nFailed Allocations:');
        results.failures.forEach(failure => {
            console.log(`Student ${failure.student} (Rank: ${failure.jeeRank}) - ${failure.reason}`);
        });

    } catch (error) {
        console.error('Error running initial allocation:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();