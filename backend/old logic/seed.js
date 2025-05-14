import { PrismaClient } from '../prisma/generated/prisma/index.js';
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

async function main() {
  await prisma.allocatedSeat.deleteMany();
  await prisma.seatMatrix.deleteMany();
  await prisma.studentApplication.deleteMany();
  await prisma.department.deleteMany();

  // Read CSV files
  const departments = await readCSV('./data/departments.csv');
  const seatMatrices = await readCSV('./data/seatMatrix.csv');
  const studentApplications = await readCSV('./data/studentApplications.csv');

  // Insert Departments
  for (const dept of departments) {
    await prisma.department.create({
      data: {
        id: dept.id,
        name: dept.name,
      },
    });
  }

  // Insert Seat Matrix
  await prisma.seatMatrix.createMany({
    data: seatMatrices.map((seat) => ({
      departmentId: seat.departmentId,
      category: seat.category,
      subCategory: seat.subCategory,
      totalSeats: parseInt(seat.totalSeats),
    })),
  });

  // Insert Student Applications
  await prisma.studentApplication.createMany({
    data: studentApplications.map((student) => ({
      applicationNumber: student.applicationNumber,
      studentName: student.studentName,
      fatherMotherName: student.fatherMotherName,
      phoneNumber: student.phoneNumber,
      email: student.email,
      jeeCRL: parseInt(student.jeeCRL),
      category: student.category,
      subCategory: student.subCategory,
      categoryRank: parseInt(student.categoryRank),
      courseChoice1: student.courseChoice1,
      courseChoice2: student.courseChoice2,
      courseChoice3: student.courseChoice3,
      courseChoice4: student.courseChoice4,
      courseChoice5: student.courseChoice5,
      courseChoice6: student.courseChoice6,
      courseChoice7: student.courseChoice7,
      createdAt: new Date(), 
    })),
  });

  console.log('Seed data created from CSV!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
