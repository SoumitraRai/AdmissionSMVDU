// import allocateSeats from '../allocateSeats.js';

// export async function runInitialAllocation(students, round) {
//     // 1. Take all students and sort by JEE rank
//     const sortedStudents = [...students].sort((a, b) => {
//         // Lower JEE CRL rank is better
//         return a.jeeCRL - b.jeeCRL;
//     });

//     console.log('\n=== Starting Initial Allocation (Round 1) ===');
//     console.log(`Processing ${sortedStudents.length} students in JEE rank order`);

//     return await allocateSeats(sortedStudents, {
//         round: 1,
//         mode: 'initial',
//         allowChoicePriority: true,  // Enable trying all choices in order
//         options: {
//             checkRanking: true,     // Consider JEE ranking
//             tryAllChoices: true     // Try all choices before moving to next student
//         }
//     });
// }

// export default runInitialAllocation;






import allocateSeats from '../allocateSeats.js';

export async function runInitialAllocation(students, round) {
    // 1. Sort students by JEE rank
    const sortedStudents = [...students].sort((a, b) => a.jeeCRL - b.jeeCRL);

    console.log('\n=== Starting Initial Allocation (Round 1) ===');
    console.log(`Processing ${sortedStudents.length} students in JEE rank order`);

    // Override only for GEN-GNGN filtering by modifying the choices
    const filteredStudents = sortedStudents.map(student => {
        const filteredChoices = [
            student.courseChoice1,
            student.courseChoice2,
            student.courseChoice3,
            student.courseChoice4,
            student.courseChoice5,
            student.courseChoice6,
            student.courseChoice7
        ].filter(Boolean); // remove nulls

        return {
            ...student,
            courseChoice1: filteredChoices[0],
            courseChoice2: filteredChoices[1],
            courseChoice3: filteredChoices[2],
            courseChoice4: filteredChoices[3],
            courseChoice5: filteredChoices[4],
            courseChoice6: filteredChoices[5],
            courseChoice7: filteredChoices[6],
            category: 'GEN',
            subCategory: 'GNGN'
        };
    });

    return await allocateSeats(filteredStudents, {
        round,
        mode: 'initial',
        allowChoicePriority: true,
        options: {
            checkRanking: true,
            tryAllChoices: true
        }
    });
}

// Optional: call if running directly
// (async () => {
//     const students = await prisma.studentApplication.findMany({ orderBy: { jeeCRL: 'asc' } });
//     await runInitialAllocation(students, 1);
// })();
