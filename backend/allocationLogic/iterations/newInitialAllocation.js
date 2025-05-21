import { PrismaClient } from '../prisma/generated/prisma/index.js';
import allocateSeats from '../allocateSeats.js';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

export async function runUpgradeAllocation(round) {
  console.log('\n=== Starting Upgrade Allocation (Round ' + round + ') ===');

  try {
    // Fetch all students and their allocations from the previous round
    const students = await prisma.studentApplication.findMany({
      include: {
        allocations: {
          where: {
            allocationRound: round - 1,
          },
          orderBy: {
            allocatedAt: 'desc',
          },
          take: 1,
        },
      },
    });

    // Prepare students with their latest allocation or null
    const transformedStudents = students.map((student) => ({
      ...student,
      allocatedSeat: student.allocations[0] || null,
    }));

    // Filter students who either:
    // - are unallocated, or
    // - didn't get their 1st choice (eligible for upgrade check)
    const upgradeCandidates = transformedStudents.filter(
      (student) => !student.allocatedSeat || student.allocatedSeat.choiceNumber !== 1
    );

    // Sort candidates by JEE rank ascending
    const sortedStudents = [...upgradeCandidates].sort((a, b) => a.jeeCRL - b.jeeCRL);

    // Prepare students with filtered choices and GEN-GNGN category
    const preparedStudents = sortedStudents.map((student) => {
      const filteredChoices = [
        student.courseChoice1,
        student.courseChoice2,
        student.courseChoice3,
        student.courseChoice4,
        student.courseChoice5,
        student.courseChoice6,
        student.courseChoice7,
      ].filter(Boolean);

      return {
        ...student,
        courseChoices: filteredChoices, // store as array for easier handling below
        category: 'GEN',
        subCategory: 'GNGN',
        allocatedSeat: student.allocatedSeat,
      };
    });

    // Now, filter out students who can't be upgraded to better preferences:
    // For allocated students, only keep choices better than current allocated seat choice number
    const studentsForAllocation = preparedStudents.filter((student) => {
      if (!student.allocatedSeat) {
        // Unallocated students get all choices
        return true;
      }
      // For allocated students, check if better choices exist
      // Better choice means choiceNumber < allocatedSeat.choiceNumber
      const betterChoices = student.courseChoices.filter(
        (_, index) => index + 1 < student.allocatedSeat.choiceNumber
      );
      return betterChoices.length > 0;
    }).map((student) => {
      // For allocated students, reduce their choices only to better ones
      if (!student.allocatedSeat) return student;

      return {
        ...student,
        courseChoice1: student.courseChoices[0],
        courseChoice2: student.courseChoices[1],
        courseChoice3: student.courseChoices[2],
        courseChoice4: student.courseChoices[3],
        courseChoice5: student.courseChoices[4],
        courseChoice6: student.courseChoices[5],
        courseChoice7: student.courseChoices[6],
        courseChoices: undefined, // remove helper
      };
    });

    // For unallocated students, map their choices fully too
    studentsForAllocation.forEach((student) => {
      if (!student.courseChoice1) {
        student.courseChoice1 = student.courseChoices?.[0] || null;
        student.courseChoice2 = student.courseChoices?.[1] || null;
        student.courseChoice3 = student.courseChoices?.[2] || null;
        student.courseChoice4 = student.courseChoices?.[3] || null;
        student.courseChoice5 = student.courseChoices?.[4] || null;
        student.courseChoice6 = student.courseChoices?.[5] || null;
        student.courseChoice7 = student.courseChoices?.[6] || null;
        student.courseChoices = undefined;
      }
    });

    // Call allocateSeats only with students who need upgrade or allocation
    return await allocateSeats(studentsForAllocation, {
      round,
      mode: 'upgrade',
      allowChoicePriority: true,
      options: {
        checkRanking: true,
        tryAllChoices: true,
        allowUpgrade: true,
      },
    });
  } catch (error) {
    console.error('Database operation failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
runUpgradeAllocation(2)
  .then(() => {
    console.log('Upgrade allocation completed successfully');
  })
  .catch((error) => {
    console.error('Error during upgrade allocation:', error);
  });