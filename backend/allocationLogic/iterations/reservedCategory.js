import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';

export async function runReservedCategoryAllocation(students, round) {
    const results = {
        success: [],
        failures: [],
        vacated: []
    };

    // Get all reserved categories
    const reservedCategories = Object.keys(categories).filter(cat => cat !== 'GEN');

    for (const category of reservedCategories) {
        console.log(`\nProcessing ${category} category`);
        
        // Filter students of this category
        const categoryStudents = students.filter(s => s.category === category);

        if (categoryStudents.length === 0) {
            console.log(`No students found for category ${category}`);
            continue;
        }

        // First try category-level allocation
        const categoryResult = await allocateSeats(categoryStudents, {
            category,
            subCategory: `${category}${category}`,
            round,
            mode: 'upgrade',
            checkExisting: true,
            allowVacate: true,
            sortCriteria: getSortCriteriaForCategory(category)
        });

        // Safely merge results with null checks
        if (categoryResult?.success) results.success.push(...categoryResult.success);
        if (categoryResult?.failures) results.failures.push(...categoryResult.failures);
        if (categoryResult?.vacated) results.vacated.push(...categoryResult.vacated);

        console.log(`${category} main category results:`, {
            allocated: categoryResult?.success?.length || 0,
            failed: categoryResult?.failures?.length || 0,
            vacated: categoryResult?.vacated?.length || 0
        });

        // Process subcategories if any exist
        if (categories[category].sub?.length > 0) {
            for (const subCategory of categories[category].sub) {
                if (subCategory === `${category}${category}`) continue;

                console.log(`Processing ${category}-${subCategory} subcategory`);
                
                const subCategoryStudents = categoryStudents.filter(
                    s => s.subCategory === subCategory
                );

                if (subCategoryStudents.length === 0) {
                    console.log(`No students found for ${category}-${subCategory}`);
                    continue;
                }

                const subResult = await allocateSeats(subCategoryStudents, {
                    category,
                    subCategory,
                    round,
                    mode: 'upgrade',
                    checkExisting: true,
                    allowVacate: true,
                    sortCriteria: getSortCriteriaForCategory(category)
                });

                // Safely merge subcategory results
                if (subResult?.success) results.success.push(...subResult.success);
                if (subResult?.failures) results.failures.push(...subResult.failures);
                if (subResult?.vacated) results.vacated.push(...subResult.vacated);

                console.log(`${category}-${subCategory} results:`, {
                    allocated: subResult?.success?.length || 0,
                    failed: subResult?.failures?.length || 0,
                    vacated: subResult?.vacated?.length || 0
                });
            }
        }
    }

    return results;
}

function getSortCriteriaForCategory(category) {
    return 'rank'; // Default to rank-based sorting
}

export default runReservedCategoryAllocation;