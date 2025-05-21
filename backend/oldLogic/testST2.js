// test7.js - ST2 Allocation
import {PrismaClient} from './prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

async function allocateRound2ST2() {
    const targetCategory = 'ST2';
    const targetSubCategory = 'ST2';
    const roundNumber = 2;

    const students = await prisma.studentApplication.findMany({
        where: {category: targetCategory},
        orderBy: {categoryRank: 'asc'},
    });

    const seatMap = new Map(); // departmentId => available seats
    const nameToDeptId = new Map(); // courseName => departmentId

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
            if (!deptId) continue;

            const available = seatMap.get(deptId);

            if (available && available > 0) {
                const existingAllocation = await prisma.allocatedSeat.findFirst({
                    where: {
                        studentId: student.applicationNumber
                    }
                })

                if (existingAllocation) {
                    const currentChoiceIndex = choices.indexOf(courseName);
                    const previousChoiceIndex = choices.indexOf(existingAllocation.allocatedCourse);

                    if (currentChoiceIndex === -1 || currentChoiceIndex >= previousChoiceIndex) {
                        console.log(`${student.studentName}'s current seat is better, skipping...`);
                        break;
                    } else {
                        await prisma.allocatedSeat.delete({
                            where: {
                                id: existingAllocation.id
                            }
                        });

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
                    }
                }

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
                    data: {
                        totalSeats: { decrement: 1 },
                    },
                });

                console.log(`Allocated ${student.studentName} to ${courseName}`);
                break;
            }
        }
    }

    console.log('Round 2 ST2 allocation complete.');
}

allocateRound2ST2()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export { allocateRound2ST2 };