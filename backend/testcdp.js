// import { PrismaClient } from './prisma/generated/prisma/index.js';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();
// const horizontalSubcategories = ['PWD', 'CDP', 'sports']; // Extend as needed

// export async function upgradeToHorizontalSubcategory(round) {
//     console.log('🔁 Checking for horizontal subcategory upgrades...');

//     const eligibleStudents = await prisma.studentApplication.findMany({
//         where: {
//             AND: [
//                 { allocations: { some: {} } },
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
//                 // Update the allocation
//                 await prisma.allocatedSeat.update({
//                     where: {
//                         id: currentAllocation.id,
//                     },
//                     data: {
//                         allocatedCourse: preferredCourse,
//                         allocationRound: round,
//                         allocatedAt: new Date(),
//                     },
//                 });

//                 // Update seat counts
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

//                 await prisma.seatMatrix.update({
//                     where: {
//                         departmentId_category_subCategory: {
//                             departmentId: currentCourse,
//                             category: student.category,
//                             subCategory: 'GNGN', // assumed vertical fallback
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

//     // Export final allocations to sub.csv
//     await exportFinalAllocationsToCSV();
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

// async function exportFinalAllocationsToCSV() {
//     const allocations = await prisma.allocatedSeat.findMany({
//         include: {
//             student: true,
//         },
//     });

//     const csvHeader = "ApplicationNumber,StudentName,Category,SubCategory,AllocatedCourse,Round,AllocatedAt\n";
//     const csvRows = allocations.map(alloc => {
//         const student = alloc.student;
//         return `${student.applicationNumber},"${student.studentName}",${student.category},${student.subCategory},${alloc.allocatedCourse},${alloc.allocationRound},${alloc.allocatedAt.toISOString()}`;
//     });

//     const finalCSV = csvHeader + csvRows.join("\n");

//     const filePath = './sub.csv';
//     fs.writeFileSync(filePath, finalCSV);
//     console.log('📄 Final allocation written to sub.csv');
// }




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

        const sortedChoices = sortBySubCategoryRank(student, choices); // Sort by subCategoryRank

        for (let i = 0; i < sortedChoices.length; i++) {
            const preferredCourse = sortedChoices[i];

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

function sortBySubCategoryRank(student, choices) {
    // Check if subCategoryRank exists and is an object
    if (!student.subCategoryRank || typeof student.subCategoryRank !== 'object') {
        console.warn(`No subCategoryRank for student: ${student.studentName}`);
        // Fallback behavior: assign Infinity to all courses that don't have a rank
        return choices; // No sorting, or apply some default rank logic
    }

    const rankedChoices = choices.map(course => ({
        course,
        rank: student.subCategoryRank[course] !== undefined ? student.subCategoryRank[course] : Infinity, // Default to Infinity if no rank
    }));

    rankedChoices.sort((a, b) => a.rank - b.rank); // Sort by rank: low rank comes first
    return rankedChoices.map(choice => choice.course); // Return sorted courses
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
        const allocatedAt = alloc.allocationAt ? alloc.allocationAt.toISOString() : "N/A"; // Default to "N/A" if allocatedAt is undefined

        return `${student.applicationNumber},"${student.studentName}",${student.category},${student.subCategory},${alloc.allocatedCourse},${alloc.allocationRound},${allocatedAt}`;
    });

    const finalCSV = csvHeader + csvRows.join("\n");

    const filePath = './sub.csv';
    fs.writeFileSync(filePath, finalCSV);
    console.log('📄 Final allocation written to sub.csv');
}
