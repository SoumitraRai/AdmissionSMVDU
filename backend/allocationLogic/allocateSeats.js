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
            
            // Get all choices in priority order
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

            // Try each choice in order
            for (const [index, choice] of choices.entries()) {
                const result = await prisma.$transaction(async (tx) => {
                    // Check for available seat
                    const seat = await tx.seatMatrix.findFirst({
                        where: {
                            departmentId: choice,
                            totalSeats: { gt: 0 }
                        }
                    });

                    if (!seat) {
                        console.log(`Choice ${index + 1}: ${choice} - No seats available`);
                        return null;
                    }

                    // Allocate seat
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
                            jeeRank: student.jeeCRL,  // Make sure this matches the schema
                            // allocatedAt will be set automatically
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
                    reason: 'No seats available in any of the choices'
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