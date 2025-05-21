import { PrismaClient } from './prisma/generated/prisma/index.js';
import { runReservedSubcategoryAllocation } from './iterations/reservedSubcategory.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    try {
        // Fetch all students with their allocations (corrected include statement)
        const students = await prisma.studentApplication.findMany({
            include: {
                allocations: {
                    orderBy: {
                        choiceNumber: 'asc'
                    },
                    include: {
                        department: true
                    }
                }
            },
            orderBy: {
                jeeCRL: 'asc'
            }
        });

        console.log(`Found ${students.length} students in database`);

        // Run reserved subcategory allocation (typically Round 3)
        console.log('\n=== Starting Reserved Subcategory Allocation ===');
        const results = await runReservedSubcategoryAllocation(students, 3);

        // Generate detailed CSV report
        const csvLines = [
            'ApplicationNumber,Category,SubCategory,JEE_Rank,Category_Rank,Special_Criteria,' +
            'Previous_Department,Previous_Choice,' +
            'New_Department,New_Choice,Status,Reason'
        ];

        // Helper function to get special criteria value
        const getSpecialCriteria = (student, subCategory) => {
            if (!subCategory) return '';
            if (subCategory.endsWith('SPT')) return student.sptMarks || '';
            if (subCategory.endsWith('PWD')) return student.pwdRank || '';
            if (subCategory.endsWith('CPF') || subCategory.endsWith('CDP')) return student.cdpPriority || '';
            return student.categoryRank || '';
        };

        // Process successful allocations
        results.success.forEach(a => {
            const student = students.find(s => s.applicationNumber === a.student);
            const prevAlloc = student?.allocations?.[0];
            const specialCriteria = getSpecialCriteria(student, a.subCategory);
            
            csvLines.push(
                `${a.student},${student.category},${student.subCategory},${a.jeeRank},${student.categoryRank},${specialCriteria},` +
                `${prevAlloc?.department?.departmentId || 'None'},` +
                `${prevAlloc?.choiceNumber || 'None'},` +
                `${a.department},${a.choiceNumber},Success,`
            );
        });

        // Process failed allocations
        results.failures.forEach(f => {
            const student = students.find(s => s.applicationNumber === f.student);
            if (!student) return;
            
            const prevAlloc = student?.allocations?.[0];
            const specialCriteria = getSpecialCriteria(student, student.subCategory);
            
            csvLines.push(
                `${f.student},${student.category},${student.subCategory},${f.jeeRank},${student.categoryRank},${specialCriteria},` +
                `${prevAlloc?.department?.departmentId || 'None'},` +
                `${prevAlloc?.choiceNumber || 'None'},` +
                `,,Failed,${f.reason || 'No seats available'}`
            );
        });

        // Process vacated seats
        results.vacated?.forEach(v => {
            const student = students.find(s => s.applicationNumber === v.student);
            if (!student) return;
            
            csvLines.push(
                `${v.student},${student.category},${student.subCategory},${student.jeeCRL},${student.categoryRank},,` +
                `${v.department},,` +
                `,,Vacated,Seat returned to ${v.category}-${v.subCategory} pool`
            );
        });

        const csvOutput = csvLines.join('\n');
        const outputPath = path.join('./', `reserved_subcategory_results_${new Date().toISOString().slice(0,10)}.csv`);
        fs.writeFileSync(outputPath, csvOutput);
        console.log(`\n✅ Detailed CSV report saved to: ${outputPath}`);

        // Generate seat matrix comparison report
        console.log('\nGenerating seat matrix comparison report...');
        const preMatrix = await prisma.seatMatrix.findMany({
            where: {
                OR: [
                    { subCategory: { endsWith: 'SPT' } },
                    { subCategory: { endsWith: 'PWD' } },
                    { subCategory: { endsWith: 'CPF' } },
                    { subCategory: { endsWith: 'CDP' } }
                ]
            }
        });

        const postMatrix = await prisma.seatMatrix.findMany({
            where: {
                OR: [
                    { subCategory: { endsWith: 'SPT' } },
                    { subCategory: { endsWith: 'PWD' } },
                    { subCategory: { endsWith: 'CPF' } },
                    { subCategory: { endsWith: 'CDP' } }
                ]
            }
        });

        const matrixReport = [
            'Department,Category,SubCategory,Initial_Seats,Allocated,Remaining_Seats'
        ];

        preMatrix.forEach(seat => {
            const postSeat = postMatrix.find(s => 
                s.departmentId === seat.departmentId && 
                s.category === seat.category &&
                s.subCategory === seat.subCategory
            );
            const allocated = seat.totalSeats - (postSeat?.totalSeats || 0);
            
            matrixReport.push(
                `${seat.departmentId},${seat.category},${seat.subCategory},` +
                `${seat.totalSeats},${allocated},${postSeat?.totalSeats || 0}`
            );
        });

        const matrixPath = path.join('./', `reserved_subcategory_seat_matrix.csv`);
        fs.writeFileSync(matrixPath, matrixReport.join('\n'));
        console.log(`✅ Seat matrix report saved to: ${matrixPath}`);

    } catch (error) {
        console.error('Error in reserved subcategory allocation test:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();