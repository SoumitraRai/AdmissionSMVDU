import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';

export async function runGeneralSubcategoryAllocation(students, round) {
    const results = {
        success: [],
        failures: [],
        vacated: []
    };

    try {
        // Filter GEN category students
        const genStudents = students.filter(s => s.category === 'GEN');

        // Process each subcategory except GNGN
        for (const subCategory of categories.GEN.sub) {
            if (subCategory === 'GNGN') continue;

            console.log(`\nProcessing GEN-${subCategory} subcategory`);

            // Filter students eligible for this subcategory
            const eligibleStudents = genStudents.filter(s => s.subCategory === subCategory);

            if (eligibleStudents.length === 0) {
                console.log(`No students found for GEN-${subCategory}`);
                continue;
            }

            // Get subcategory-specific sorting criteria
            const sortCriteria = getSortCriteriaForSubcategory(subCategory);

            try {
                // Run allocation for this subcategory
                const result = await allocateSeats(eligibleStudents, {
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
    }
}

function getSortCriteriaForSubcategory(subCategory) {
    switch(subCategory) {
        case 'GNPWD': return 'rank';
        case 'GNSPT': return 'marks';
        case 'GNCDP':
        case 'GNCPF': return 'priority';
        default: return 'rank';
    }
}

export default runGeneralSubcategoryAllocation;