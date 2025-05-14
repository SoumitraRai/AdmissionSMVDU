import { PrismaClient } from '../prisma/generated/prisma/index.js';
import { allocateRound1GNGN } from './testGN.js';
import { allocateRound2EWS } from './testEWS.js';
import { allocateRound2SC } from './testSC.js';
import { allocateRound2ST1 } from './testST1.js';
import { allocateRound2ST2 } from './testST2.js';
import { allocateRound2RBA } from './testRBA.js';
import { allocateRound2RLAC } from './testRLAC.js';
import { allocateRound2OBC } from './testOBC.js';
import { checkSeatsRemaining } from './remseats.js';
import { upgradeToHorizontalSubcategory } from './testcdp.js';
import { writeFileSync } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function finalAllotment() {
    let round = 1;
    let allocationComplete = false;
    let unallocatedStudents;

    try {
        const allStudents = await prisma.studentApplication.findMany({
            orderBy: { jeeCRL: 'asc' },
        });

        console.log(`👨‍🎓 Total students fetched: ${allStudents.length}`);
        unallocatedStudents = [...allStudents];

        while (!allocationComplete) {
            console.log(`\n==== 🌀 ROUND ${round} START ====\n`);

            console.log('🎯 Allocating General Category (GNGN)...');
            const newlyAllocatedGNGN = await allocateRound1GNGN(unallocatedStudents, round);
            console.log(`✅ GNGN Allocated: ${newlyAllocatedGNGN.length} students`);

            await upgradeToHorizontalSubcategory(round);

            unallocatedStudents = unallocatedStudents.filter(
                (student) => !newlyAllocatedGNGN.includes(student.applicationNumber)
            );

            console.log('📦 Allocating EWS...');
            await allocateRound2EWS();

            console.log('📦 Allocating SC...');
            await allocateRound2SC();

            console.log('📦 Allocating ST1...');
            await allocateRound2ST1();

            console.log('📦 Allocating ST2...');
            await allocateRound2ST2();

            console.log('📦 Allocating RBA...');
            await allocateRound2RBA();

            console.log('📦 Allocating RLAC...');
            await allocateRound2RLAC();

            console.log('📦 Allocating OBC...');
            await allocateRound2OBC();

            console.log(`\n==== ✅ ROUND ${round} COMPLETE ====\n`);

            const allGNGNSeatsFilled = await areAllGNGNSeatsFilled();
            const allApplicationsProcessed = await areAllApplicationsProcessed();
            const noSeatsLeft = !(await checkSeatsRemaining());

            if (allGNGNSeatsFilled || allApplicationsProcessed || noSeatsLeft) {
                allocationComplete = true;
                console.log('\n🛑 Allocation stopping condition met.\n');
            } else {
                round++;
            }
        }

        console.log('\n🎯 Allocation process complete!');
        await exportAllocatedSeatsToCSV();

    } catch (error) {
        console.error('❌ Error during final allotment:', error);
    } finally {
        await prisma.$disconnect();
    }
}

// --- Helper Functions ---

async function areAllApplicationsProcessed() {
    try {
        const distinctAllocatedStudents = await prisma.allocatedSeat.findMany({
            distinct: ['studentId'],
            select: { studentId: true },
        });

        const numberOfUniqueStudents = distinctAllocatedStudents.length;

        const totalStudents = await prisma.studentApplication.count();

        console.log(`🔍 Allocated: ${numberOfUniqueStudents} / ${totalStudents}`);
        return numberOfUniqueStudents === totalStudents;
    } catch (error) {
        console.error("❌ Error in areAllApplicationsProcessed:", error);
        return false;
    }
}


async function areAllGNGNSeatsFilled() {
    try {
        const totalGNGNSeats = await prisma.seatMatrix.aggregate({
            _sum: { totalSeats: true },
            where: {
                category: 'GEN',
                subCategory: 'GNGN',
            },
        });

        const remainingGNGNSeats = await prisma.seatMatrix.aggregate({
            _sum: { totalSeats: true },
            where: {
                category: 'GEN',
                subCategory: 'GNGN',
                totalSeats: { gt: 0 },
            },
        });

        const totalSeats = totalGNGNSeats._sum.totalSeats || 0;
        const remainingSeats = remainingGNGNSeats._sum.totalSeats || 0;

        console.log(`📊 GNGN Total Seats: ${totalSeats}, Remaining: ${remainingSeats}`);
        return totalSeats > 0 && remainingSeats === 0;
    } catch (error) {
        console.error('❌ Error checking GNGN seats:', error);
        return false;
    }
}

async function exportAllocatedSeatsToCSV() {
    console.log('📄 Exporting allocated seats to CSV...');

    try {
        const students = await prisma.studentApplication.findMany({
            where: {
                allocations: {
                    some: {}
                }
            },
            include: {
                allocations: true
            }
        });

        console.log(`🔍 Found ${students.length} students with allocations.`);

        if (students.length === 0) {
            console.warn('⚠️ No students to export.');
            return;
        }

        const header = 'StudentID,Name,Email,Phone,Category,Department Allocated,Allocation Round\n';

        const rows = students.flatMap(student =>
            student.allocations.map(allocation =>
                `${student.applicationNumber},"${student.studentName}","${student.email}",${student.phoneNumber},"${student.category}","${allocation.allocatedCourse}",${allocation.allocationRound}`
            )
        );

        const csvContent = header + rows.join('\n');
        const filePath = path.resolve('final_allocation.csv');

        writeFileSync(filePath, csvContent);
        console.log(`✅ CSV file saved successfully at: ${filePath}`);
    } catch (error) {
        console.error('❌ Error exporting CSV:', error);
    }
}

// 🔁 Start the process
finalAllotment();
