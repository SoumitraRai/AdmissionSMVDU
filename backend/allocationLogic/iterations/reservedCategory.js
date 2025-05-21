// reservedCategory.js (updated)
import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';
import { runUpgradeAllocation } from './newInitialAllocation.js';

export async function runReservedCategoryAllocation(students, round) {
    const results = {
        success: [],
        failures: [],
        vacated: []
    };

    // Get all reserved categories (main categories only)
    const reservedCategories = Object.keys(categories).filter(cat => cat !== 'GEN');

    for (const category of reservedCategories) {
        console.log(`\nProcessing ${category} category`);
        
        // Filter students of this category
        const categoryStudents = students.filter(s => s.category === category);

        if (categoryStudents.length === 0) {
            console.log(`No students found for category ${category}`);
            continue;
        }

        // Sort students by category rank
        const sortedStudents = [...categoryStudents].sort((a, b) => a.categoryRank - b.categoryRank);

        // Run allocation for this category
        const categoryResult = await allocateSeats(sortedStudents, {
            category,
            subCategory: category, // Using category as subCategory (e.g., EWS-EWS)
            round,
            mode: 'upgrade',
            checkExisting: true,
            allowVacate: true,
            sortCriteria: 'rank' // Simple rank-based sorting for main categories
        });

        // Merge results
        if (categoryResult?.success) results.success.push(...categoryResult.success);
        if (categoryResult?.failures) results.failures.push(...categoryResult.failures);
        if (categoryResult?.vacated) results.vacated.push(...categoryResult.vacated);

        console.log(`${category} category results:`, {
            allocated: categoryResult?.success?.length || 0,
            failed: categoryResult?.failures?.length || 0,
            vacated: categoryResult?.vacated?.length || 0
        });

        // 🟢 Run upgrade after this category allocation
        console.log(`Running upgrade allocation after ${category} category...`);
        await runUpgradeAllocation(round);
    }

    return results;
}

export default runReservedCategoryAllocation;
