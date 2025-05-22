import { PrismaClient } from '../prisma/generated/prisma/index.js';
import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';
import { runUpgradeAllocation } from './newInitialAllocation.js';

const prisma = new PrismaClient();

export async function runReservedCategoryAllocation(students, round) {
    const results = {
        success: [],
        failures: [],
        vacated: [],
        seatMatrix: {} // Track seat availability
    };

    // First, get initial seat matrix state
    try {
        const seatMatrix = await prisma.seatMatrix.findMany({
            where: {
                totalSeats: { gt: 0 }
            }
        });
        results.seatMatrix = seatMatrix.reduce((acc, seat) => {
            const key = `${seat.departmentId}-${seat.category}-${seat.subCategory}`;
            acc[key] = seat.totalSeats;
            return acc;
        }, {});
    } catch (error) {
        console.error('Failed to fetch seat matrix:', error);
    }

    // Get all reserved categories
    const reservedCategories = Object.keys(categories).filter(cat => cat !== 'GEN');
    console.log('Reserved categories to process:', reservedCategories.join(', '));

    for (const category of reservedCategories) {
        console.log(`\nProcessing ${category} category`);
        
        // Filter and sort students
        const categoryStudents = students
            .filter(s => s.category === category)
            .sort((a, b) => (a.categoryRank || a.jeeCRL) - (b.categoryRank || b.jeeCRL));

        console.log(`Found ${categoryStudents.length} students for ${category}`);

        try {
            // Run allocation with proper flags
            const categoryResult = await allocateSeats(categoryStudents, {
                category,
                // Use OBC instead of OBCOBC for subcategory
                subCategory: category,
                round,
                mode: 'upgrade',
                checkExisting: true,
                allowVacate: true,
                sortCriteria: 'rank',
                respectFreeze: true,
                handleFloat: true,
                options: {
                    useMainCategory: true  // New flag to use main category as subcategory
                }
            });

            console.log(`Processing ${category} category with available seats:`, 
                await prisma.seatMatrix.findMany({
                    where: {
                        category,
                        totalSeats: { gt: 0 }
                    },
                    select: {
                        departmentId: true,
                        category: true,
                        subCategory: true,
                        totalSeats: true
                    }
                })
            );

            // Add logging to help debug
            console.log(`Processing ${categoryStudents.length} students for ${category} category`);
            console.log(`Using subcategory: ${category}${category}`);

            // Log detailed results
            console.log(`${category} allocation results:`, {
                success: categoryResult?.success?.length || 0,
                failures: categoryResult?.failures?.length || 0,
                vacated: categoryResult?.vacated?.length || 0
            });

            // Merge results with null checks
            if (categoryResult?.success) results.success.push(...categoryResult.success);
            if (categoryResult?.failures) results.failures.push(...categoryResult.failures);
            if (categoryResult?.vacated) results.vacated.push(...categoryResult.vacated);

            // Run upgrade with proper flags
            try {
                await runUpgradeAllocation(round, {
                    mode: 'upgrade',
                    respectFreeze: true,
                    handleFloat: true,
                    category,
                    checkExisting: true,
                    allowVacate: true,
                    options: {
                        checkRanking: true,
                        tryAllChoices: true
                    }
                });
                console.log(`Upgrade completed for ${category}`);
            } catch (upgradeError) {
                console.error(`Error during upgrade after ${category}:`, upgradeError.message);
            }

        } catch (error) {
            console.error(`Error processing ${category}:`, error);
            results.failures.push({
                category,
                error: error.message,
                count: categoryStudents.length
            });
        }
    }

    // Final validation
    await validateResults(results, round);

    return results;
}

async function validateResults(results, round) {
    try {
        // Check for duplicate allocations using raw SQL query
        const duplicates = await prisma.$queryRaw`
            SELECT "studentId", COUNT(*) as allocation_count
            FROM "AllocatedSeat"
            WHERE "allocationRound" = ${round}
            GROUP BY "studentId"
            HAVING COUNT(*) > 1
        `;

        if (duplicates.length > 0) {
            console.error('⚠️ Found duplicate allocations:', duplicates);
        }

        // Validate seat matrix consistency
        const seatCounts = await prisma.$queryRaw`
            SELECT sm."departmentId", sm.category, sm."subCategory",
                   sm."totalSeats", COUNT(a.id) as allocated
            FROM "SeatMatrix" sm
            LEFT JOIN "AllocatedSeat" a 
                ON sm."departmentId" = a."departmentId"
                AND sm.category = a.category
                AND sm."subCategory" = a."subCategory"
                AND a."allocationRound" = ${round}
            GROUP BY sm."departmentId", sm.category, sm."subCategory", sm."totalSeats"
            HAVING COUNT(a.id) > sm."totalSeats"
        `;

        if (seatCounts.length > 0) {
            console.error('⚠️ Seat matrix inconsistencies:', seatCounts);
        }

    } catch (error) {
        console.error('Validation error:', error);
    }
}

export default runReservedCategoryAllocation;
