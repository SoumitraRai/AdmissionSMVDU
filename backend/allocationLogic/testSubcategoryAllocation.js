import { PrismaClient } from './prisma/generated/prisma/index.js';
import { runGeneralSubcategoryAllocation } from './iterations/generalSubcategory.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    try {
        // Fetch eligible students from the database
        const students = await prisma.studentApplication.findMany({
            where: {
                OR: [
                    // Students with no allocations
                    {
                        allocations: {
                            none: {}
                        }
                    },
                    // Students who didn't get their first choice
                    {
                        allocations: {
                            some: {
                                choiceNumber: {
                                    gt: 1  // Choice number greater than 1
                                }
                            }
                        }
                    }
                ],
                // Add any additional subcategory qualification criteria here
                category: 'GEN'  // Only GEN category students
            },
            orderBy: {
                jeeCRL: 'asc'  // Order by JEE rank for fairness
            },
            include: {
                allocations: true  // Include current allocations for reference
            }
        });

        console.log('\n=== Starting General Subcategory Allocation (Round 2) ===');
        console.log(`Found ${students.length} eligible students:`);
        console.log(`- Unallocated: ${students.filter(s => s.allocations.length === 0).length}`);
        console.log(`- Not first choice: ${students.filter(s => s.allocations.length > 0).length}`);

        // Run general subcategory allocation
        const results = await runGeneralSubcategoryAllocation(students, 2);

        // Print results
        console.log('\n=== Allocation Results ===');
        console.log(`Successful allocations: ${results.success.length}`);
        console.log(`Failed allocations: ${results.failures.length}`);
        console.log(`Seats vacated: ${results.vacated?.length || 0}`);
        
        // Print detailed results
        console.log('\nSuccessful Allocations:');
        results.success.forEach(allocation => {
            const previousAllocation = students
                .find(s => s.applicationNumber === allocation.student)
                ?.allocations[0];
            
            console.log(
                `Student ${allocation.student} ` +
                `(Previous: ${previousAllocation ? 
                    `Choice #${previousAllocation.choiceNumber}` : 'None'}) -> ` +
                `${allocation.department} (New Choice #${allocation.choiceNumber})`
            );
        });

        // Generate CSV
        const csvLines = [
            'ApplicationNumber,JEE_Rank,Previous_Choice,New_Department,New_Choice,Status,Vacated_From'
        ];

        results.success.forEach(a => {
            const student = students.find(s => s.applicationNumber === a.student);
            const previousAllocation = student?.allocations[0];
            
            csvLines.push(
                `${a.student},${student.jeeCRL},` +
                `${previousAllocation ? previousAllocation.choiceNumber : 'None'},` +
                `${a.department},${a.choiceNumber},Success,` +
                `${previousAllocation ? previousAllocation.departmentId : ''}`
            );
        });

        const csvOutput = csvLines.join('\n');
        const outputPath = path.join('./', 'general_subcategory_allocation_results.csv');
        fs.writeFileSync(outputPath, csvOutput);
        console.log(`\n✅ CSV saved to: ${outputPath}`);

    } catch (error) {
        console.error('Error running general subcategory allocation:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();