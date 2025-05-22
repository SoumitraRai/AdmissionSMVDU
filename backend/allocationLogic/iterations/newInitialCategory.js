import { PrismaClient } from '../prisma/generated/prisma/index.js';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function allocateSeats(students, options) {
  const upgradedStudents = [];

  for (const student of students) {
    let allocatedBetterSeat = false;

    // Iterate over course choices in order to find a better seat
    for (let i = 0; i < student.courseChoices.length; i++) {
      const choice = student.courseChoices[i];
      if (!choice) continue;

      // If allocatedSeat exists, only try choices better than current one
      if (student.allocatedSeat && (i + 1) >= student.allocatedSeat.choiceNumber) {
        continue;
      }

      // Check if seat available in seat matrix
      const seatAvailable = await prisma.seatMatrix.findFirst({
        where: {
          departmentId: choice,
          category: student.category,
          subCategory: student.subCategory,
          totalSeats: { gt: 0 }
        }
      });

      if (seatAvailable) {
        // Allocate seat in transaction
        await prisma.$transaction(async (tx) => {
          // Decrement new seat
          await tx.seatMatrix.updateMany({
            where: {
              departmentId: choice,
              category: student.category,
              subCategory: student.subCategory
            },
            data: {
              totalSeats: { decrement: 1 }
            }
          });

          // Release old seat if any
          if (student.allocatedSeat) {
            await tx.seatMatrix.updateMany({
              where: {
                departmentId: student.allocatedSeat.departmentId,
                category: student.allocatedSeat.category,
                subCategory: student.allocatedSeat.subCategory
              },
              data: {
                totalSeats: { increment: 1 }
              }
            });

            await tx.allocatedSeat.delete({
              where: { id: student.allocatedSeat.id }
            });
          }

          // Create new allocation record
          await tx.allocatedSeat.create({
            data: {
              student: {
                connect: {
                  applicationNumber: student.applicationNumber
                }
              },
              department: {
                connect: {
                  id: choice
                }
              },
              category: student.category,
              subCategory: student.subCategory,
              choiceNumber: i + 1,
              allocationRound: options.round,
              allocatedAt: new Date(),
              jeeRank: student.jeeCRL
            }
          });
        });

        allocatedBetterSeat = true;
        upgradedStudents.push(student.applicationNumber);
        console.log(`Student ${student.applicationNumber} allocated to better choice #${i + 1}`);
        break;
      }
    }

    if (!allocatedBetterSeat) {
      console.log(`Student ${student.applicationNumber} could not be upgraded.`);
    }
  }

  return upgradedStudents;
}

export async function runUpgradeAllocation(round, options = {}) {
  console.log(`\n=== Starting Upgrade Allocation (Round ${round}) ===`);
  console.log(`Timestamp: ${new Date().toISOString()}`);

  try {
    // Fetch all students with their previous allocations
    const students = await prisma.studentApplication.findMany({
      include: {
        allocations: {
          where: { allocationRound: round - 1 },
          orderBy: { allocatedAt: 'desc' },
          take: 1
        }
      }
    });

    const transformedStudents = students.map(student => ({
      ...student,
      allocatedSeat: student.allocations[0] || null
    }));

    const upgradeCandidates = transformedStudents.filter(student => {
      if (!student.allocatedSeat) {
        console.log(`${student.applicationNumber}: Unallocated - Eligible`);
        return true;
      }
      if (student.allocatedSeat.choiceNumber === 1) {
        console.log(`${student.applicationNumber}: First choice - Frozen`);
        return false;
      }
      console.log(`${student.applicationNumber}: Choice #${student.allocatedSeat.choiceNumber} - Floating`);
      return true;
    });

    const sortedStudents = [...upgradeCandidates].sort((a, b) => a.jeeCRL - b.jeeCRL);

    const preparedStudents = sortedStudents.map(student => {
      const filteredChoices = [
        student.courseChoice1,
        student.courseChoice2,
        student.courseChoice3,
        student.courseChoice4,
        student.courseChoice5,
        student.courseChoice6,
        student.courseChoice7
      ].filter(Boolean);

      return {
        ...student,
        courseChoices: filteredChoices,
        category: 'GEN',
        subCategory: 'GNGN'
      };
    });

    const studentsForAllocation = preparedStudents.filter(student => {
      if (!student.allocatedSeat) return true;
      const betterChoices = student.courseChoices.filter((_, idx) => 
        idx + 1 < student.allocatedSeat.choiceNumber
      );
      return betterChoices.length > 0;
    });

    console.log(`Processing ${studentsForAllocation.length} students for allocation`);

    const result = await allocateSeats(studentsForAllocation, {
      round,
      ...options
    });

    console.log('\n=== Allocation Results ===');
    console.log(`Successfully upgraded students: ${result.length}`);
    return result;

  } catch (error) {
    console.error('Allocation failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Execute allocation
const round = 2;

runUpgradeAllocation(round)
  .then(result => {
    console.log('Upgrade allocation completed successfully');
    console.log('Upgraded students:', result);
  })
  .catch(error => {
    console.error('Fatal error during upgrade allocation:', error);
    process.exit(1);
  });