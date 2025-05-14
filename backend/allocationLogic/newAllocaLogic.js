import { PrismaClient } from './prisma/generated/prisma/index.js';
import { categories } from './categories.js';
import allocateSeats from './allocateSeats.js';

const prisma = new PrismaClient();

async function validateSetup() {
    // Check if we have seats in the matrix
    const seatCount = await prisma.seatMatrix.count();
    if (seatCount === 0) {
        throw new Error('Seat matrix is empty. Please populate seat data first.');
    }

    // Check if we have student applications
    const studentCount = await prisma.studentApplication.count();
    if (studentCount === 0) {
        throw new Error('No student applications found. Please add student data first.');
    }

    return { seatCount, studentCount };
}

async function runAllocationProcess() {
    try {
        const { seatCount, studentCount } = await validateSetup();
        console.log(`Found ${seatCount} seats and ${studentCount} applications`);

        // Fetch all students ordered by JEE rank
        const allStudents = await prisma.studentApplication.findMany({
            orderBy: {
                jeeCRL: 'asc'
            }
        });

        const results = {
            totalProcessed: 0,
            successful: 0,
            failed: 0,
            byCategory: {}
        };

        for (const category in categories) {
            console.log(`\n=== Processing ${category} Category ===`);
            
            // Filter students by category
            const categoryStudents = allStudents.filter(
                student => student.category === category
            );

            console.log(`Found ${categoryStudents.length} students in ${category} category`);

            if (categoryStudents.length === 0) continue;

            const categoryResults = await allocateSeats(categoryStudents, 1); // Using round 1
            
            results.totalProcessed += categoryStudents.length;
            results.successful += categoryResults.success.length;
            results.failed += categoryResults.failures.length;
            results.byCategory[category] = categoryResults;
        }

        console.log('\n=== Final Allocation Summary ===');
        console.log(`Total Processed: ${results.totalProcessed}`);
        console.log(`Total Successful: ${results.successful}`);
        console.log(`Total Failed: ${results.failed}`);

        return results;

    } catch (error) {
        console.error('Error in allocation process:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Run the allocation process
runAllocationProcess()
    .then(() => {
        console.log('\nAllocation process completed successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\nAllocation process failed:', error);
        process.exit(1);
    });