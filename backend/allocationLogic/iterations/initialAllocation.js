import allocateSeats from '../allocateSeats.js';

export async function runInitialAllocation(students, round) {
    // 1. Take all students and sort by JEE rank
    const sortedStudents = [...students].sort((a, b) => {
        // Lower JEE CRL rank is better
        return a.jeeCRL - b.jeeCRL;
    });

    console.log('\n=== Starting Initial Allocation (Round 1) ===');
    console.log(`Processing ${sortedStudents.length} students in JEE rank order`);

    return await allocateSeats(sortedStudents, {
        round: 1,
        mode: 'initial',
        allowChoicePriority: true,  // Enable trying all choices in order
        options: {
            checkRanking: true,     // Consider JEE ranking
            tryAllChoices: true     // Try all choices before moving to next student
        }
    });
}

export default runInitialAllocation;