import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';
import { PrismaClient } from '../prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

// List of all departments from the CSV
const ALL_DEPARTMENTS = [
    'cs', 'ce', 'ece', 'ee', 'me', 'mnc', 'b_arch', 'b_des', 'bt', 'ai_robotics'
];

export async function runGeneralSubcategoryAllocation(students, round) {
    const results = {
        success: [],
        failures: [],
        vacated: []
    };

    try {
        // Filter GEN category students
        const genStudents = students.filter(s => s.category === 'GEN');

        console.log(`\n=== Starting General Subcategory Allocation (Round ${round}) ===`);
        console.log(`Found ${genStudents.length} GEN category students eligible for subcategory allocation`);

        // Get current seat matrix state for logging/debugging
        const seatMatrix = await prisma.seatMatrix.findMany({
            where: {
                departmentId: {
                    in: ALL_DEPARTMENTS
                },
                category: 'GEN',
                subCategory: {
                    in: ['GNPWD', 'GNCDP', 'GNCPF', 'GNSPT']
                },
                totalSeats: {
                    gt: 0
                }
            }
        });

        console.log('\nAvailable seats in subcategories:');
        seatMatrix.forEach(seat => {
            console.log(`${seat.departmentId} - ${seat.subCategory}: ${seat.totalSeats} seats`);
        });

        // Process each subcategory except GNGN
        for (const subCategory of categories.GEN.sub) {
            if (subCategory === 'GNGN') continue;

            console.log(`\nProcessing GEN-${subCategory} subcategory`);

            // Filter students eligible for this subcategory
            const eligibleStudents = genStudents.filter(s => {
                // Check if student belongs to this subcategory
                if (s.subCategory !== subCategory) return false;
                
                // Skip students who already have any 1st choice allocation
                if (s.allocations && s.allocations.length > 0) {
                    const hasFirstChoice = s.allocations.some(a => a.choiceNumber === 1);
                    if (hasFirstChoice) {
                        console.log(`Skipping student ${s.applicationNumber} - Already has 1st choice allocation`);
                        return false;
                    }
                }
                
                return true;
            });

            // Debug: Print eligible students
            console.log(`Eligible students for ${subCategory}:`);
            eligibleStudents.forEach(s => {
                const allocs = s.allocations?.map(a => 
                    `${a.departmentId} (Choice ${a.choiceNumber})`
                ).join(', ') || 'None';
                console.log(`- ${s.applicationNumber}: ${subCategory === 'GNSPT' ? `Sports Marks: ${s.sptMarks}` : ''} CRL: ${s.jeeCRL}, Allocs: ${allocs}`);
            });

            if (eligibleStudents.length === 0) {
                console.log(`No eligible students found for GEN-${subCategory}`);
                continue;
            }

            console.log(`Found ${eligibleStudents.length} eligible students in GEN-${subCategory} subcategory`);

            // Get available seats for this subcategory (for logging)
            const availableSeats = await prisma.seatMatrix.findMany({
                where: {
                    departmentId: {
                        in: ALL_DEPARTMENTS
                    },
                    category: 'GEN',
                    subCategory: subCategory,
                    totalSeats: { gt: 0 }
                }
            });

            console.log(`Available seats for ${subCategory}:`);
            availableSeats.forEach(seat => {
                console.log(`- ${seat.departmentId}: ${seat.totalSeats} seats`);
            });

            // Get subcategory-specific sorting criteria
            const sortCriteria = getSortCriteriaForSubcategory(subCategory);
            console.log(`Using sort criteria: ${sortCriteria} for ${subCategory}`);

            // Sort students by the appropriate criteria before allocation
            const sortedStudents = [...eligibleStudents].sort((a, b) => {
                switch (sortCriteria) {
                    case 'pwdRank':
                        // First by PWD rank (ascending), then by JEE CRL (ascending)
                        return a.pwdRank - b.pwdRank || a.jeeCRL - b.jeeCRL;
                    case 'sptMarks':
                        // First by sports marks (descending), then by JEE CRL (ascending)
                        return b.sptMarks - a.sptMarks || a.jeeCRL - b.jeeCRL;
                    case 'cdpPriority':
                        // First by CDP priority (ascending), then by JEE CRL (ascending)
                        return a.cdpPriority - b.cdpPriority || a.jeeCRL - b.jeeCRL;
                    case 'rank':
                    default:
                        // Default to JEE rank (ascending)
                        return a.jeeCRL - b.jeeCRL;
                }
            });

            // Debug: Print sorted students
            console.log(`Sorted students for ${subCategory}:`);
            sortedStudents.forEach((s, i) => {
                const marksInfo = subCategory === 'GNSPT' ? `Marks: ${s.sptMarks}` : '';
                console.log(`${i+1}. ${s.applicationNumber}: ${marksInfo} CRL: ${s.jeeCRL}`);
            });

            try {
                // Run allocation for this subcategory
                const result = await allocateSeats(sortedStudents, {
                    category: 'GEN',
                    subCategory,
                    round,
                    sortCriteria,
                    mode: 'upgrade',
                    checkExisting: true,
                    allowVacate: true
                });

                // Ensure arrays exist before spreading
                if (Array.isArray(result.success)) {
                    results.success.push(...result.success);
                }
                if (Array.isArray(result.failures)) {
                    results.failures.push(...result.failures);
                }
                if (Array.isArray(result.vacated)) {
                    results.vacated.push(...result.vacated);
                }

                console.log(`${subCategory} Results:`, {
                    allocated: result.success?.length || 0,
                    failed: result.failures?.length || 0,
                    vacated: result.vacated?.length || 0
                });
            } catch (error) {
                console.error(`Error allocating seats for ${subCategory}:`, error);
                continue; // Continue with next subcategory
            }
        }

        return results;
    } catch (error) {
        console.error('Error in general subcategory allocation:', error);
        return {
            success: [],
            failures: [],
            vacated: []
        };
    } finally {
        await prisma.$disconnect();
    }
}

function getSortCriteriaForSubcategory(subCategory) {
    // Only include valid GEN subcategories
    const validSubcategories = ['GNPWD', 'GNSPT', 'GNCDP', 'GNCPF'];
    if (!validSubcategories.includes(subCategory)) {
        throw new Error(`Invalid GEN subcategory: ${subCategory}`);
    }
    
    switch(subCategory) {
        case 'GNPWD': return 'pwdRank';
        case 'GNSPT': return 'sptMarks';
        case 'GNCDP':
        case 'GNCPF': return 'cdpPriority';
        default: return 'rank';
    }
}

export default runGeneralSubcategoryAllocation;