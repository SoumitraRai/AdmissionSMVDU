import { PrismaClient } from './prisma/generated/prisma/index.js';
import { runGeneralSubcategoryAllocation } from './iterations/generalSubcategory.js';
import { categories } from '../allocationLogic/categories.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    try {
        // Fetch eligible students from the database with strict subcategory filtering
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
                category: 'GEN',  // Only GEN category students
                subCategory: {
                    in: categories.GEN.sub // Only valid GEN subcategories
                }
            },
            orderBy: {
                jeeCRL: 'asc'  // Initial ordering by JEE rank
            },
            include: {
                allocations: {
                    include: {
                        department: true
                    }
                }
            }
        });

        console.log('\n=== Starting General Subcategory Allocation (Round 2) ===');
        console.log(`Found ${students.length} eligible GEN students with valid subcategories:`);
        
        // Log student distribution by subcategory
        categories.GEN.sub.forEach(subCat => {
            const count = students.filter(s => s.subCategory === subCat).length;
            console.log(`- ${subCat}: ${count} students`);
        });

        console.log(`\nBreakdown of current allocations:`);
        console.log(`- Unallocated: ${students.filter(s => s.allocations.length === 0).length}`);
        console.log(`- Not first choice: ${students.filter(s => s.allocations.length > 0 && s.allocations[0].choiceNumber > 1).length}`);

        // Log current seat matrix status before allocation
        const seatMatrix = await prisma.seatMatrix.findMany({
            where: {
                category: 'GEN',
                subCategory: { in: categories.GEN.sub }
            }
        });

        console.log('\nCurrent seat matrix for GEN subcategories:');
        seatMatrix.forEach(seat => {
            console.log(`${seat.departmentId}-${seat.subCategory}: ${seat.totalSeats} seats`);
        });

        // Run general subcategory allocation
        const results = await runGeneralSubcategoryAllocation(students, 2);

        // Print results
        console.log('\n=== Allocation Results ===');
        console.log(`Successful allocations: ${results.success.length}`);
        console.log(`Failed allocations: ${results.failures.length}`);
        console.log(`Seats vacated: ${results.vacated?.length || 0}`);
        
        // Print detailed results by subcategory
        console.log('\nSuccessful Allocations by Subcategory:');
        categories.GEN.sub.forEach(subCat => {
            const subAllocations = results.success.filter(a => a.subCategory === subCat);
            if (subAllocations.length > 0) {
                console.log(`\n${subCat} (${subAllocations.length} allocations):`);
                subAllocations.forEach(allocation => {
                    const previousAllocation = students
                        .find(s => s.applicationNumber === allocation.student)
                        ?.allocations[0];
                    
                    console.log(
                        `Student ${allocation.student} ` +
                        `(JEE Rank: ${allocation.jeeRank}) ` +
                        `(Previous: ${previousAllocation ? 
                            `${previousAllocation.department.departmentId} (Choice #${previousAllocation.choiceNumber})` : 'None'}) -> ` +
                        `${allocation.department} (Choice #${allocation.choiceNumber})`
                    );
                });
            }
        });

        // Generate detailed CSV report
        const csvLines = [
            'ApplicationNumber,JEE_Rank,SubCategory,Previous_Department,Previous_Choice,' +
            'New_Department,New_Choice,Status,Vacated_From'
        ];

        results.success.forEach(a => {
            const student = students.find(s => s.applicationNumber === a.student);
            const previousAllocation = student?.allocations[0];
            
            csvLines.push(
                `${a.student},${a.jeeRank},${a.subCategory},` +
                `${previousAllocation ? previousAllocation.department.departmentId : 'None'},` +
                `${previousAllocation ? previousAllocation.choiceNumber : 'None'},` +
                `${a.department},${a.choiceNumber},Success,` +
                `${previousAllocation ? previousAllocation.department.departmentId : ''}`
            );
        });

        // Include failed allocations in CSV
        results.failures.forEach(f => {
            const student = students.find(s => s.applicationNumber === f.student);
            const previousAllocation = student?.allocations[0];
            
            csvLines.push(
                `${f.student},${f.jeeRank},${student.subCategory},` +
                `${previousAllocation ? previousAllocation.department.departmentId : 'None'},` +
                `${previousAllocation ? previousAllocation.choiceNumber : 'None'},` +
                `,,Failed,` +
                `${previousAllocation ? previousAllocation.department.departmentId : ''}`
            );
        });

        const csvOutput = csvLines.join('\n');
        const outputPath = path.join('./', `general_subcategory_round2_results_${new Date().toISOString().slice(0,10)}.csv`);
        fs.writeFileSync(outputPath, csvOutput);
        console.log(`\n✅ Detailed CSV report saved to: ${outputPath}`);

        // Generate seat matrix update report
        const postAllocationMatrix = await prisma.seatMatrix.findMany({
            where: {
                category: 'GEN',
                subCategory: { in: categories.GEN.sub }
            }
        });

        console.log('\nUpdated seat matrix after allocation:');
        const matrixReport = ['Department,SubCategory,Initial_Seats,Allocated,Remaining'];
        seatMatrix.forEach(initialSeat => {
            const updatedSeat = postAllocationMatrix.find(s => 
                s.departmentId === initialSeat.departmentId && 
                s.subCategory === initialSeat.subCategory
            );
            const allocated = initialSeat.totalSeats - (updatedSeat?.totalSeats || 0);
            
            console.log(`${initialSeat.departmentId}-${initialSeat.subCategory}: ` +
                      `Allocated ${allocated}, Remaining ${updatedSeat?.totalSeats || 0}`);
            
            matrixReport.push(
                `${initialSeat.departmentId},${initialSeat.subCategory},` +
                `${initialSeat.totalSeats},${allocated},${updatedSeat?.totalSeats || 0}`
            );
        });

        const matrixPath = path.join('./', `seat_matrix_update_round2.csv`);
        fs.writeFileSync(matrixPath, matrixReport.join('\n'));
        console.log(`\n✅ Seat matrix update report saved to: ${matrixPath}`);

    } catch (error) {
        console.error('Error running general subcategory allocation:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();