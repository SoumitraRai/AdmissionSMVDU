import { PrismaClient } from './prisma/generated/prisma/index.js';
import fs from 'fs';
import csv from 'csv-parser';

const prisma = new PrismaClient();

async function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

function convertCourseName(fullName) {
  const courseMap = {
    'B. TECH. (COMPUTER SCIENCE & ENGINEERING)': 'cs',
    'B. TECH. (ELECTRONICS & COMMUNICATION ENGINEERING)': 'ece',
    'B. TECH. (MECHANICAL ENGINEERING)': 'me',
    'B. TECH. (ELECTRICAL ENGINEERING)': 'ee',
    'B. TECH. (CIVIL ENGINEERING)': 'ce',
    'B. TECH. (MATHEMATICS & COMPUTING)': 'mnc',
    'B. TECH. (ROBOTICS & AI)': 'ai_robotics'
  };
  return courseMap[fullName] || null;
}

function convertCategory(fullCategory) {
  const categoryMap = {
    'GENERAL': 'GEN',
    'SCHEDULED CASTE (SC)': 'SC', 
    'SCHEDULED TRIBE (ST)': 'ST',
    'OTHER BACKWARD CLASSES (OBC)': 'OBC',
    'ECONOMICALLY WEAKER SECTIONS (EWS)': 'EWS'
  };
  return categoryMap[fullCategory] || fullCategory;
}

async function main() {
  // Clear existing data
  await prisma.allocatedSeat.deleteMany();
  await prisma.seatMatrix.deleteMany();
  await prisma.studentApplication.deleteMany();
  await prisma.department.deleteMany();

  // Read CSV files from the correct location
  const departments = await readCSV('../data/departments.csv');
  const seatMatrices = await readCSV('../data/seatMatrix[1].csv');
  const studentApplications = await readCSV('../data/studentdatanewip.csv');

  console.log('Loading data from CSV files...');
  
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

  // Insert Student Applications
  console.log('Inserting student applications...');
  await prisma.studentApplication.createMany({
    data: studentApplications.map((student) => ({
      applicationNumber: student.applicationNumber,
      studentName: student.studentName,
      fatherMotherName: student.fatherMotherName || '',
      phoneNumber: student.phoneNumber || '',
      email: student.email || '',
      jeeCRL: parseInt(student.jeeCRL.replace(/,/g, '')),
      category: convertCategory(student.category),
      subCategory: student.subCategory || 'GNGN',
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
    }))
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
