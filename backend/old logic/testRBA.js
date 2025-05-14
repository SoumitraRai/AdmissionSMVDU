// test8.js - Corrected RBA Allocation

import { PrismaClient } from '../prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

async function allocateRound2RBA() {
    const targetCategory = 'RBA';
    const targetSubCategory = 'RBA';
    const roundNumber = 2;

    console.log('Fetching RBA students...');
    const students = await prisma.studentApplication.findMany({
        where: { category: targetCategory },
        orderBy: { categoryRank: 'asc' },
    });
    console.log(`Found ${students.length} RBA students.`);

    const seatMatrix = await prisma.seatMatrix.findMany({
        where: {
            category: targetCategory,
            subCategory: targetSubCategory,
            totalSeats: { gt: 0 },
        },
        include: { department: true },
    });

    const seatMap = new Map(); // departmentId => available seats
    const nameToDeptId = new Map(); // department name => departmentId

    seatMatrix.forEach(seat => {
        seatMap.set(seat.departmentId, seat.totalSeats);
        nameToDeptId.set(seat.department.name, seat.departmentId);
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
        ].filter(Boolean);

        for (const courseName of choices) {
            const deptId = nameToDeptId.get(courseName);
            if (!deptId) continue; // courseName not found in department list

            const available = seatMap.get(deptId);

            if (available && available > 0) {
                const existingAllocation = await prisma.allocatedSeat.findFirst({
                    where: { studentId: student.applicationNumber }
                });

                if (existingAllocation) {
                    const currentChoiceIndex = choices.indexOf(courseName);
                    const previousChoiceIndex = choices.indexOf(existingAllocation.allocatedCourse);

                    if (previousChoiceIndex !== -1 && currentChoiceIndex >= previousChoiceIndex) {
                        console.log(`${student.studentName}'s current seat is better or same, skipping...`);
                        break;
                    } else {
                        // Remove previous allocation
                        await prisma.allocatedSeat.delete({
                            where: { id: existingAllocation.id }
                        });

                        const previousDeptId = nameToDeptId.get(existingAllocation.allocatedCourse);
                        if (previousDeptId) {
                            seatMap.set(previousDeptId, seatMap.get(previousDeptId) + 1);

                            await prisma.seatMatrix.update({
                                where: {
                                    departmentId_category_subCategory: {
                                        departmentId: previousDeptId,
                                        category: targetCategory,
                                        subCategory: targetSubCategory,
                                    },
                                },
                                data: { totalSeats: { increment: 1 } },
                            });
                        }
                    }
                }

                // Allocate new seat
                await prisma.allocatedSeat.create({
                    data: {
                        studentId: student.applicationNumber,
                        allocatedCourse: courseName,
                        allocationRound: roundNumber,
                        allocatedAt: new Date(),
                    },
                });

                seatMap.set(deptId, available - 1);

                await prisma.seatMatrix.update({
                    where: {
                        departmentId_category_subCategory: {
                            departmentId: deptId,
                            category: targetCategory,
                            subCategory: targetSubCategory,
                        },
                    },
                    data: { totalSeats: { decrement: 1 } },
                });

                console.log(`Allocated ${student.studentName} to ${courseName}`);
                break; // once allocated, stop checking next choices
            }
        }
    }

    console.log('✅ Round 2 RBA allocation complete.');
}

allocateRound2RBA()
    .catch((e) => {
        console.error('❌ Allocation error:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export { allocateRound2RBA };
