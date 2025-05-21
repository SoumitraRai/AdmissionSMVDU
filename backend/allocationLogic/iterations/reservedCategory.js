// import allocateSeats from '../allocateSeats.js';
// import { categories } from '../categories.js';

// export async function runReservedCategoryAllocation(students, round) {
//     const results = {
//         success: [],
//         failures: [],
//         vacated: []
//     };

//     // Get all reserved categories
//     const reservedCategories = Object.keys(categories).filter(cat => cat !== 'GEN');

//     for (const category of reservedCategories) {
//         console.log(`\nProcessing ${category} category`);
        
//         // Filter students of this category
//         const categoryStudents = students.filter(s => s.category === category);

//         if (categoryStudents.length === 0) {
//             console.log(`No students found for category ${category}`);
//             continue;
//         }

//         // First try category-level allocation
//         const categoryResult = await allocateSeats(categoryStudents, {
//             category,
//             subCategory: `${category}${category}`,
//             round,
//             mode: 'upgrade',
//             checkExisting: true,
//             allowVacate: true,
//             sortCriteria: getSortCriteriaForCategory(category)
//         });

//         // Safely merge results with null checks
//         if (categoryResult?.success) results.success.push(...categoryResult.success);
//         if (categoryResult?.failures) results.failures.push(...categoryResult.failures);
//         if (categoryResult?.vacated) results.vacated.push(...categoryResult.vacated);

//         console.log(`${category} main category results:`, {
//             allocated: categoryResult?.success?.length || 0,
//             failed: categoryResult?.failures?.length || 0,
//             vacated: categoryResult?.vacated?.length || 0
//         });

//         // Process subcategories if any exist
//         if (categories[category].sub?.length > 0) {
//             for (const subCategory of categories[category].sub) {
//                 if (subCategory === `${category}${category}`) continue;

//                 console.log(`Processing ${category}-${subCategory} subcategory`);
                
//                 const subCategoryStudents = categoryStudents.filter(
//                     s => s.subCategory === subCategory
//                 );

//                 if (subCategoryStudents.length === 0) {
//                     console.log(`No students found for ${category}-${subCategory}`);
//                     continue;
//                 }

//                 const subResult = await allocateSeats(subCategoryStudents, {
//                     category,
//                     subCategory,
//                     round,
//                     mode: 'upgrade',
//                     checkExisting: true,
//                     allowVacate: true,
//                     sortCriteria: getSortCriteriaForCategory(category, subCategory)
//                 });

//                 // Safely merge subcategory results
//                 if (subResult?.success) results.success.push(...subResult.success);
//                 if (subResult?.failures) results.failures.push(...subResult.failures);
//                 if (subResult?.vacated) results.vacated.push(...subResult.vacated);

//                 console.log(`${category}-${subCategory} results:`, {
//                     allocated: subResult?.success?.length || 0,
//                     failed: subResult?.failures?.length || 0,
//                     vacated: subResult?.vacated?.length || 0
//                 });
//             }
//         }
//     }

//     return results;
// }

// function getSortCriteriaForCategory(category, subCategory = null) {
//     // If subCategory is provided, handle specific subcategory sorting
//     if (subCategory) {
//         switch(true) {
//             // Sports quota
//             case subCategory.endsWith('SPT'):
//                 return student => ({
//                     primary: -student.sptMarks,  // Higher marks first
//                     secondary: student.jeeCRL     // Lower rank better
//                 });
            
//             // Children of Defense Personnel
//             case subCategory.endsWith('CDP'):
//                 return student => ({
//                     primary: student.jeeCRL
//                 });
            
//             // Persons with Disability
//             case subCategory.endsWith('PWD'):
//                 return student => ({
//                     primary: student.pwdRank,     // Lower rank better
//                     secondary: student.jeeCRL
//                 });

//             // Children of Faculty/Staff Personnel
//             case subCategory.endsWith('CPF'):
//                 return student => ({
//                     primary: -student.cdpPriority,  // Higher priority first
//                     secondary: student.jeeCRL
//                 });
            
//             // Default subcategory sorting
//             default:
//                 return student => ({
//                     primary: student.categoryRank,
//                     secondary: student.jeeCRL
//                 });
//         }
//     }

//     // Default sorting for main categories
//     return student => ({
//         primary: student.categoryRank,
//         secondary: student.jeeCRL
//     });
// }

// export default runReservedCategoryAllocation;

// reservedCategory.js (updated)
import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';

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
    }

    return results;
}

export default runReservedCategoryAllocation;