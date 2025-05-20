import { PrismaClient } from './prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

async function allocateSeats(students, options = {}) {
    const results = {
        success: [],
        failures: [],
        upgrades: []
    };

    try {
        for (const student of students) {
            console.log(`\nProcessing student ${student.applicationNumber} (JEE Rank: ${student.jeeCRL})`);

            const choices = [
                student.courseChoice1,
                student.courseChoice2,
                student.courseChoice3,
                student.courseChoice4,
                student.courseChoice5,
                student.courseChoice6,
                student.courseChoice7
            ].filter(Boolean); // Remove null/undefined choices

            console.log(`Choices in order: ${choices.join(' > ')}`);
            let allocated = false;

            for (const [index, choice] of choices.entries()) {
                const result = await prisma.$transaction(async (tx) => {
                    // Seat filter logic
                    const seat = await tx.seatMatrix.findFirst({
                        where: {
                            departmentId: choice,
                            totalSeats: { gt: 0 },
                            ...(options?.mode === 'initial' && {
                                category: 'GEN',
                                subCategory: 'GNGN'
                            })
                        }
                    });

                    if (!seat) {
                        console.log(`Choice ${index + 1}: ${choice} - No eligible seats available`);
                        return null;
                    }

                    // Allocate the seat
                    await tx.seatMatrix.update({
                        where: { id: seat.id },
                        data: { totalSeats: { decrement: 1 } }
                    });

                    return await tx.allocatedSeat.create({
                        data: {
                            studentId: student.applicationNumber,
                            departmentId: choice,
                            category: student.category,
                            subCategory: student.subCategory,
                            allocationRound: options.round || 1,
                            choiceNumber: index + 1,
                            jeeRank: student.jeeCRL
                        }
                    });
                });

                if (result) {
                    allocated = true;
                    results.success.push({
                        student: student.applicationNumber,
                        jeeRank: student.jeeCRL,
                        department: choice,
                        choiceNumber: index + 1
                    });
                    console.log(`✅ Allocated ${choice} (Choice #${index + 1}) to student ${student.applicationNumber}`);
                    break;
                }
            }

            if (!allocated) {
                results.failures.push({
                    student: student.applicationNumber,
                    jeeRank: student.jeeCRL,
                    reason: 'No eligible seats available in any of the choices'
                });
            }
        }

        return results;
    } catch (error) {
        console.error('Allocation error:', error);
        throw error;
    }
}

export default allocateSeats;
