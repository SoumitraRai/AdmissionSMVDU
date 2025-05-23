import { PrismaClient } from './prisma/generated/prisma/index.js';
import fs from 'fs';
import csv from 'csv-parser';

const prisma = new PrismaClient();

async function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        // Clean BOM from first field if present
        const cleanedData = {};
        for (const key in data) {
          const cleanedKey = key.replace(/^\uFEFF/, ''); // Remove BOM
          cleanedData[cleanedKey] = data[key];
        }
        results.push(cleanedData);
      })
      .on('end', () => {
        console.log(`Read ${results.length} records from ${filePath}`);
        if (results.length > 0) {
          console.log('Sample record:', results[0]);
        }
        resolve(results);
      })
      .on('error', (error) => reject(error));
  });
}

function convertCourseName(fullName) {
  const courseMap = {
    'CSE': 'cs',
    'ECE': 'ece',
    'ME': 'me',
    'EE': 'ee',
    'CE': 'ce',
    'M&C': 'mnc',
    'R&AI': 'ai_robotics'
  };
  return courseMap[fullName] || null;
}

async function main() {
  try {
    // Clear existing data
    console.log('Clearing existing data...');
    await prisma.allocatedSeat.deleteMany();
    await prisma.seatMatrix.deleteMany();
    await prisma.studentApplication.deleteMany();
    await prisma.department.deleteMany();

    // Read CSV files from the correct location
    console.log('Reading CSV files...');
    const departments = await readCSV('../data/departments.csv');
    const seatMatrices = await readCSV('../data/seatMatrix.csv');
    const studentApplications = await readCSV('../data/finalData.csv');

    // Create a set of valid department IDs
    const departmentIds = new Set();
    
    // Insert Departments first
    console.log('Inserting departments...');
    for (const dept of departments) {
      await prisma.department.create({
        data: {
          id: dept.id,
          name: dept.name,
        },
      });
      departmentIds.add(dept.id);
    }

    // Insert Seat Matrix with validation
    console.log('Inserting seat matrix...');
    const validSeatMatrices = seatMatrices.filter(seat => {
      if (!departmentIds.has(seat.departmentId)) {
        console.warn(`Warning: Invalid department ID found in seat matrix: ${seat.departmentId}`);
        return false;
      }
      return true;
    });

    if (validSeatMatrices.length !== seatMatrices.length) {
      console.warn(`Found ${seatMatrices.length - validSeatMatrices.length} invalid seat matrix entries`);
    }

    await prisma.seatMatrix.createMany({
      data: validSeatMatrices.map((seat) => ({
        departmentId: seat.departmentId,
        category: seat.category,
        subCategory: seat.subCategory,
        totalSeats: parseInt(seat.totalSeats),
      })),
    });

    // Process Student Applications with validation
    console.log('Processing student applications...');
    const validApplications = studentApplications.filter(student => {
      if (!student.applicationNumber) {
        console.warn(`Warning: Missing applicationNumber for student: ${student.studentName}`);
        return false;
      }
      return true;
    });

    if (validApplications.length !== studentApplications.length) {
      console.warn(`Found ${studentApplications.length - validApplications.length} invalid student applications`);
    }

    console.log('Inserting valid student applications...');
    await prisma.studentApplication.createMany({
      data: validApplications.map((student) => {
        // Convert all required fields with proper defaults
        return {
          applicationNumber: student.applicationNumber,
          studentName: student.studentName || '',
          fatherMotherName: student.fatherMotherName || '',
          phoneNumber: student.phoneNumber || '',
          email: student.email || '',
          jeeCRL: parseInt(student.jeeCRL?.replace(/,/g, '') || '0'),
          category: student.category,
          subCategory: student.subcategory,
          categoryRank: parseInt(student.categoryRank || '0'),
          sptMarks: parseFloat(student.sptMarks || '0'),
          cdpPriority: parseInt(student.cdpPriority || '0'),
          pwdRank: parseInt(student.pwdRank || '0'),
          courseChoice1: convertCourseName(student.courseChoice1),
          courseChoice2: convertCourseName(student.courseChoice2),
          courseChoice3: convertCourseName(student.courseChoice3),
          courseChoice4: convertCourseName(student.courseChoice4),
          courseChoice5: convertCourseName(student.courseChoice5),
          courseChoice6: convertCourseName(student.courseChoice6),
          courseChoice7: convertCourseName(student.courseChoice7)
        };
      })
    });

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();