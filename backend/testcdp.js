// // horizontalUpgrade.js
// import { PrismaClient } from './prisma/generated/prisma/index.js';

// const prisma = new PrismaClient();

// const horizontalSubcategories = ['PWD', 'CDP', 'JKPM']; // Add others as needed

// export async function upgradeToHorizontalSubcategory(round) {
//     console.log('🔁 Checking for horizontal subcategory upgrades...');

//     const eligibleStudents = await prisma.studentApplication.findMany({
//         where: {
//             AND: [
//                 { allocations: { some: {} } }, // Already allocated
//                 {
//                     OR: horizontalSubcategories.map(sub => ({
//                         subCategory: sub,
//                     })),
//                 },
//             ],
//         },
//         include: { allocations: true },
//     });

//     for (const student of eligibleStudents) {
//         const subCategory = student.subCategory;
//         if (!horizontalSubcategories.includes(subCategory)) continue;

//         const currentAllocation = student.allocations[0];
//         const currentCourse = currentAllocation.allocatedCourse;
//         const currentPreferenceIndex = getPreferenceIndex(student, currentCourse);

//         const choices = getCourseChoices(student);

//         for (let i = 0; i < currentPreferenceIndex; i++) {
//             const preferredCourse = choices[i];

//             const seat = await prisma.seatMatrix.findFirst({
//                 where: {
//                     category: student.category,
//                     subCategory: subCategory,
//                     department: {
//                         id: preferredCourse,
//                     },
//                     totalSeats: { gt: 0 },
//                 },
//             });

//             if (seat) {
//                 // Reallocate
//                 await prisma.allocatedSeat.update({
//     where: {
//         id: currentAllocation.id, // using the actual primary key
//     },
//     data: {
//         allocatedCourse: preferredCourse,
//         allocationRound: round,
//         allocatedAt: new Date(),
//     },
// });


//                 // Update seats
//                 await prisma.seatMatrix.update({
//                     where: {
//                         departmentId_category_subCategory: {
//                             departmentId: preferredCourse,
//                             category: student.category,
//                             subCategory: subCategory,
//                         },
//                     },
//                     data: {
//                         totalSeats: { increment: -1 },
//                     },
//                 });

//                 // Restore previous seat in vertical category
//                 await prisma.seatMatrix.update({
//                     where: {
//                         departmentId_category_subCategory: {
//                             departmentId: currentCourse,
//                             category: student.category,
//                             subCategory: 'GNGN', // or whatever was used before
//                         },
//                     },
//                     data: {
//                         totalSeats: { increment: 1 },
//                     },
//                 });

//                 console.log(`⬆️ ${student.studentName} upgraded from ${currentCourse} ➝ ${preferredCourse} via ${subCategory}`);
//                 break;
//             }
//         }
//     }

//     console.log('✅ Horizontal subcategory upgrades done.');
// }

// function getPreferenceIndex(student, courseName) {
//     const choices = getCourseChoices(student);
//     return choices.indexOf(courseName);
// }

// function getCourseChoices(student) {
//     return [
//         student.courseChoice1,
//         student.courseChoice2,
//         student.courseChoice3,
//         student.courseChoice4,
//         student.courseChoice5,
//         student.courseChoice6,
//         student.courseChoice7,
//     ].filter(Boolean);
// }


// horizontalUpgrade.js
import { PrismaClient } from './prisma/generated/prisma/index.js';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const horizontalSubcategories = ['PWD', 'CDP', 'sports']; // Extend as needed

export async function upgradeToHorizontalSubcategory(round) {
    console.log('🔁 Checking for horizontal subcategory upgrades...');

    const eligibleStudents = await prisma.studentApplication.findMany({
        where: {
            AND: [
                { allocations: { some: {} } },
                {
                    OR: horizontalSubcategories.map(sub => ({
                        subCategory: sub,
                    })),
                },
            ],
        },
        include: { allocations: true },
    });

    for (const student of eligibleStudents) {
        const subCategory = student.subCategory;
        if (!horizontalSubcategories.includes(subCategory)) continue;

        const currentAllocation = student.allocations[0];
        const currentCourse = currentAllocation.allocatedCourse;
        const currentPreferenceIndex = getPreferenceIndex(student, currentCourse);

        const choices = getCourseChoices(student);

        for (let i = 0; i < currentPreferenceIndex; i++) {
            const preferredCourse = choices[i];

            const seat = await prisma.seatMatrix.findFirst({
                where: {
                    category: student.category,
                    subCategory: subCategory,
                    department: {
                        id: preferredCourse,
                    },
                    totalSeats: { gt: 0 },
                },
            });

            if (seat) {
                // Update the allocation
                await prisma.allocatedSeat.update({
                    where: {
                        id: currentAllocation.id,
                    },
                    data: {
                        allocatedCourse: preferredCourse,
                        allocationRound: round,
                        allocatedAt: new Date(),
                    },
                });

                // Update seat counts
                await prisma.seatMatrix.update({
                    where: {
                        departmentId_category_subCategory: {
                            departmentId: preferredCourse,
                            category: student.category,
                            subCategory: subCategory,
                        },
                    },
                    data: {
                        totalSeats: { increment: -1 },
                    },
                });

                await prisma.seatMatrix.update({
                    where: {
                        departmentId_category_subCategory: {
                            departmentId: currentCourse,
                            category: student.category,
                            subCategory: 'GNGN', // assumed vertical fallback
                        },
                    },
                    data: {
                        totalSeats: { increment: 1 },
                    },
                });

                console.log(`⬆️ ${student.studentName} upgraded from ${currentCourse} ➝ ${preferredCourse} via ${subCategory}`);
                break;
            }
        }
    }

    console.log('✅ Horizontal subcategory upgrades done.');

    // Export final allocations to sub.csv
    await exportFinalAllocationsToCSV();
}

function getPreferenceIndex(student, courseName) {
    const choices = getCourseChoices(student);
    return choices.indexOf(courseName);
}

function getCourseChoices(student) {
    return [
        student.courseChoice1,
        student.courseChoice2,
        student.courseChoice3,
        student.courseChoice4,
        student.courseChoice5,
        student.courseChoice6,
        student.courseChoice7,
    ].filter(Boolean);
}

async function exportFinalAllocationsToCSV() {
    const allocations = await prisma.allocatedSeat.findMany({
        include: {
            student: true,
        },
    });

    const csvHeader = "ApplicationNumber,StudentName,Category,SubCategory,AllocatedCourse,Round,AllocatedAt\n";
    const csvRows = allocations.map(alloc => {
        const student = alloc.student;
        return `${student.applicationNumber},"${student.studentName}",${student.category},${student.subCategory},${alloc.allocatedCourse},${alloc.allocationRound},${alloc.allocatedAt.toISOString()}`;
    });

    const finalCSV = csvHeader + csvRows.join("\n");

    const filePath = './sub.csv';
    fs.writeFileSync(filePath, finalCSV);
    console.log('📄 Final allocation written to sub.csv');
}
