// testReservedLogic.js (updated)
import { PrismaClient } from './prisma/generated/prisma/index.js';
import { runReservedCategoryAllocation } from './iterations/reservedCategory.js';
import { categories } from './categories.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    try {
        // Define reserved categories (everything except GEN)
        const reservedCategoryList = ['EWS', 'SC', 'ST1', 'ST2', 'OBC', 'RBA', 'RLAC'];
        
        console.log(`Reserved categories to process: ${reservedCategoryList.join(', ')}`);
        
        // Fetch all reserved category students who either:
        // 1. Have no allocations, OR
        // 2. Have allocations but not their first choice
        const students = await prisma.studentApplication.findMany({
            where: {
                category: {
                    in: reservedCategoryList
                },
                OR: [
                    { allocations: { none: {} } },
                    { 
                        allocations: { 
                            some: { 
                                NOT: { choiceNumber: 1 } 
                            } 
                        } 
                    }
                ]
            },
            orderBy: {
                categoryRank: 'asc'
            },
            include: {
                allocations: {
                    orderBy: {
                        choiceNumber: 'asc'
                    },
                    include: {
                        department: true
                    }
                }
            }
        });

        console.log(`Found ${students.length} eligible reserved category students`);

        // Run reserved category allocation (Round 2)
        console.log('\n=== Starting Reserved Category Allocation ===');
        const results = await runReservedCategoryAllocation(students, 2);

        // Generate CSV report
        const csvLines = [
            'ApplicationNumber,Category,JEE_Rank,Category_Rank,' +
            'Previous_Department,Previous_Choice,' +
            'New_Department,New_Choice,Status'
        ];

        results.success.forEach(a => {
            const student = students.find(s => s.applicationNumber === a.student);
            const prevAlloc = student?.allocations?.[0];
            
            csvLines.push(
                `${a.student},${student.category},${a.jeeRank},${student.categoryRank},` +
                `${prevAlloc?.department?.departmentId || 'None'},` +
                `${prevAlloc?.choiceNumber || 'None'},` +
                `${a.department},${a.choiceNumber},Success`
            );
        });

        results.failures.forEach(f => {
            const student = students.find(s => s.applicationNumber === f.student);
            const prevAlloc = student?.allocations?.[0];
            
            csvLines.push(
                `${f.student},${student?.category},${f.jeeRank},${student?.categoryRank},` +
                `${prevAlloc?.department?.departmentId || 'None'},` +
                `${prevAlloc?.choiceNumber || 'None'},` +
                `,,Failed`
            );
        });

        const csvOutput = csvLines.join('\n');
        const outputPath = path.join('./', 'reserved_category_results.csv');
        fs.writeFileSync(outputPath, csvOutput);
        console.log(`\n✅ Results saved to: ${outputPath}`);

    } catch (error) {
        console.error('Error in reserved category allocation:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();