// test3.js - Corrected OBC Allocation

import { PrismaClient } from './prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

async function allocateRound2OBC() {
    const targetCategory = 'OBC';
    const targetSubCategory = 'OBC'; // Corrected subcategory
    const roundNumber = 2;

    console.log('Fetching students...');
    const students = await prisma.studentApplication.findMany({
        where: { category: targetCategory },
        orderBy: { categoryRank: 'asc' },
    });
    console.log(`Found ${students.length} OBC students.`);

    const seatMatrix = await prisma.seatMatrix.findMany({
        where: {
            category: targetCategory,
            subCategory: targetSubCategory,
            totalSeats: {
                gt: 0,
            },
        },
        include: {
            department: true,
        },
    });

    const seatMap = new Map(); // departmentId => available seats
    const nameToDeptId = new Map(); // courseChoice => departmentId

    // Mapping departmentId to seats
    seatMatrix.forEach(seat => {
        seatMap.set(seat.departmentId, seat.totalSeats);
        nameToDeptId.set(seat.department.id, seat.departmentId); // <-- FIXED (id instead of name)
    });

    for (const student of students) {
        const choices = [
            student.courseChoice1,
            student.courseChoice2,
            student.courseChoice3,
            student.courseChoice4,
            student.courseChoice5,
            student.courseChoice6,
            student.courseChoice7,
        ].filter(Boolean); // Remove empty/null choices

        for (const courseId of choices) { // courseId like 'cs', 'ece', 'bt'
            const deptId = nameToDeptId.get(courseId);
            if (!deptId) continue; // skip invalid course

            const available = seatMap.get(deptId);

            if (available && available > 0) {
                // Check if already allocated
                const existingAllocation = await prisma.allocatedSeat.findFirst({
                    where: {
                        studentId: student.applicationNumber,
                    }
                });

                if (existingAllocation) {
                    const currentChoiceIndex = choices.indexOf(courseId);
                    const previousChoiceIndex = choices.indexOf(existingAllocation.allocatedCourse);

                    // Check if current choice is better
                    if (previousChoiceIndex !== -1 && currentChoiceIndex >= previousChoiceIndex) {
                        console.log(`${student.studentName}'s current seat is better, skipping...`);
                        break;
                    } else {
                        // Delete old allocation
                        await prisma.allocatedSeat.delete({
                            where: {
                                id: existingAllocation.id
                            }
                        });

                        // Restore seat to previous course
                        const previousDeptId = nameToDeptId.get(existingAllocation.allocatedCourse);
                        seatMap.set(previousDeptId, seatMap.get(previousDeptId) + 1);
                        await prisma.seatMatrix.update({
                            where: {
                                departmentId_category_subCategory: {
                                    departmentId: previousDeptId,
                                    category: targetCategory,
                                    subCategory: targetSubCategory,
                                },
                            },
                            data: {
                                totalSeats: { increment: 1 },
                            },
                        });

                        console.log(`Upgraded ${student.studentName} from ${existingAllocation.allocatedCourse} to ${courseId}`);
                    }
                }

                // Allocate new seat
                await prisma.allocatedSeat.create({
                    data: {
                        studentId: student.applicationNumber,
                        allocatedCourse: courseId,
                        allocationRound: roundNumber,
                        allocatedAt: new Date(),
                    },
                });

                // Update in-memory and DB seat counts
                seatMap.set(deptId, available - 1);
                await prisma.seatMatrix.update({
                    where: {
                        departmentId_category_subCategory: {
                            departmentId: deptId,
                            category: targetCategory,
                            subCategory: targetSubCategory,
                        },
                    },
                    data: {
                        totalSeats: { increment: -1 },
                    },
                });

                console.log(`Allocated ${student.studentName} to ${courseId}`);
                break; // stop at first successful choice
            }
        }
    }

    console.log('✅ Round 2 OBC allocation complete.');
}

allocateRound2OBC()
    .catch((e) => {
        console.error('❌ Allocation error:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export { allocateRound2OBC };
