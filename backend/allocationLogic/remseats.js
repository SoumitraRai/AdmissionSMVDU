import {PrismaClient} from './prisma/generated/prisma/index.js';
const prisma = new PrismaClient();

async function checkSeatsRemaining() {
    const seats = await prisma.seatMatrix.findMany();
    for (const seat of seats) {
        if (seat.availableSeats > 0) {
            return true;
        }
    }
    return false;
}

export { checkSeatsRemaining };