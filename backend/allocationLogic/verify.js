const { PrismaClient } = require('./prisma/generated/prisma');
const prisma = new PrismaClient();

async function viewAllocations() {
  const allocations = await prisma.allocatedSeat.findMany();
  console.log('Allocated Seats:', allocations);
}

viewAllocations()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
