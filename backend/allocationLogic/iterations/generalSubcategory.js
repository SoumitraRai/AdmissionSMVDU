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
                
                // Skip students who already have their 1st choice
                if (s.allocations && s.allocations.length > 0) {
                    const allocation = s.allocations[0];
                    if (allocation.choiceNumber === 1) {
                        console.log(`Skipping student ${s.applicationNumber} - Already has 1st choice`);
                        return false;
                    }
                }
                
                return true;
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
                    case 'rank':
                        return a.jeeCRL - b.jeeCRL;  // Lower JEE rank is better (default for GNCDP)
                    case 'sptMarks':
                        return b.sptMarks - a.sptMarks;  // Higher sports marks is better (for GNSPT)
                    case 'cdpPriority':
                        return a.cdpPriority - b.cdpPriority;  // Lower priority number is better (1 is highest) (for GNCPF)
                    case 'pwdRank':
                        return a.pwdRank - b.pwdRank;  // Lower PWD rank is better (for GNPWD)
                    default:
                        return a.jeeCRL - b.jeeCRL;  // Default to JEE rank
                }
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

            // Check remaining seats after allocation (for verification)
            const remainingSeats = await prisma.seatMatrix.findMany({
                where: {
                    departmentId: {
                        in: ALL_DEPARTMENTS
                    },
                    category: 'GEN',
                    subCategory: subCategory,
                }
            });

            console.log(`Remaining seats after ${subCategory} allocation:`);
            remainingSeats.forEach(seat => {
                console.log(`- ${seat.departmentId}: ${seat.totalSeats} seats`);
            });
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
        case 'GNPWD': return 'rank';
        case 'GNSPT': return 'marks';
        case 'GNCDP':
        case 'GNCPF': return 'priority';
        default: return 'rank';
    }
}

export default runGeneralSubcategoryAllocation;