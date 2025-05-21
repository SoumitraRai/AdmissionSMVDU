import allocateSeats from '../allocateSeats.js';
import { categories } from '../categories.js';
import { PrismaClient } from '../prisma/generated/prisma/index.js';
import { runUpgradeAllocation } from './newInitialAllocation.js';

const prisma = new PrismaClient();

// List of all departments from the CSV
const ALL_DEPARTMENTS = [
    'cs', 'ce', 'ece', 'ee', 'me', 'mnc', 'b_arch', 'b_des', 'bt', 'ai_robotics'
];

export async function runReservedSubcategoryAllocation(students, round) {
    const results = {
        success: [],
        failures: [],
        vacated: []
    };

    try {
        // Get all reserved categories (excluding GEN)
        const reservedCategories = Object.keys(categories).filter(cat => cat !== 'GEN');

        console.log(`\n=== Starting Reserved Subcategory Allocation (Round ${round}) ===`);

        // Process each reserved category
        for (const category of reservedCategories) {
            console.log(`\nProcessing ${category} category subcategories`);

            // Filter students of this category
            const categoryStudents = students.filter(s => s.category === category);

            if (categoryStudents.length === 0) {
                console.log(`No students found for ${category} category`);
                continue;
            }

            // Process each subcategory (excluding the main category subcategory like EWS-EWS)
            const subCategories = categories[category]?.sub?.filter(
                sub => sub !== `${category}${category}`
            ) || [];

            if (subCategories.length === 0) {
                console.log(`No subcategories defined for ${category}`);
                continue;
            }

            for (const subCategory of subCategories) {
                console.log(`\nProcessing ${category}-${subCategory} subcategory`);

                // Filter students eligible for this subcategory
                const eligibleStudents = categoryStudents.filter(s => {
                    if (s.subCategory !== subCategory) return false;

                    if (s.allocations && s.allocations.length > 0) {
                        const hasFirstChoice = s.allocations.some(a => a.choiceNumber === 1);
                        if (hasFirstChoice) {
                            console.log(`Skipping student ${s.applicationNumber} - Already has 1st choice allocation`);
                            return false;
                        }
                    }

                    return true;
                });

                console.log(`Eligible students for ${category}-${subCategory}:`);
                eligibleStudents.forEach(s => {
                    const allocs = s.allocations?.map(a =>
                        `${a.departmentId} (Choice ${a.choiceNumber})`
                    ).join(', ') || 'None';
                    const specialInfo = getStudentSpecialInfo(s, subCategory);
                    console.log(`- ${s.applicationNumber}: ${specialInfo} CRL: ${s.jeeCRL}, Allocs: ${allocs}`);
                });

                if (eligibleStudents.length === 0) {
                    console.log(`No eligible students found for ${category}-${subCategory}`);
                    continue;
                }

                console.log(`Found ${eligibleStudents.length} eligible students in ${category}-${subCategory}`);

                const availableSeats = await prisma.seatMatrix.findMany({
                    where: {
                        departmentId: { in: ALL_DEPARTMENTS },
                        category,
                        subCategory,
                        totalSeats: { gt: 0 }
                    }
                });

                console.log(`Available seats for ${category}-${subCategory}:`);
                availableSeats.forEach(seat => {
                    console.log(`- ${seat.departmentId}: ${seat.totalSeats} seats`);
                });

                if (availableSeats.length === 0) {
                    console.log(`No available seats for ${category}-${subCategory}`);
                    results.failures.push(...eligibleStudents.map(s => ({
                        student: s.applicationNumber,
                        jeeRank: s.jeeCRL,
                        reason: `No seats available in ${category}-${subCategory}`
                    })));
                    continue;
                }

                const sortCriteria = getSortCriteriaForReservedSubcategory(category, subCategory);
                console.log(`Using sort criteria: ${sortCriteria} for ${category}-${subCategory}`);

                const sortedStudents = sortStudentsForReservedSubcategory(eligibleStudents, sortCriteria);

                console.log(`Sorted students for ${category}-${subCategory}:`);
                sortedStudents.forEach((s, i) => {
                    const specialInfo = getStudentSpecialInfo(s, subCategory);
                    console.log(`${i + 1}. ${s.applicationNumber}: ${specialInfo} CRL: ${s.jeeCRL}`);
                });

                try {
                    const result = await allocateSeats(sortedStudents, {
                        category,
                        subCategory,
                        round,
                        sortCriteria,
                        mode: 'upgrade',
                        checkExisting: true,
                        allowVacate: true
                    });

                    if (Array.isArray(result?.success)) results.success.push(...result.success);
                    if (Array.isArray(result?.failures)) results.failures.push(...result.failures);
                    if (Array.isArray(result?.vacated)) results.vacated.push(...result.vacated);

                    console.log(`${category}-${subCategory} Results:`, {
                        allocated: result.success?.length || 0,
                        failed: result.failures?.length || 0,
                        vacated: result.vacated?.length || 0
                    });

                    // 🔁 Run upgrade allocation after each subcategory
                    await runUpgradeAllocation(round);

                } catch (error) {
                    console.error(`Error allocating seats for ${category}-${subCategory}:`, error);
                    continue;
                }
            }
        }

        return results;
    } catch (error) {
        console.error('Error in reserved subcategory allocation:', error);
        return {
            success: [],
            failures: [],
            vacated: []
        };
    } finally {
        await prisma.$disconnect();
    }
}

function getSortCriteriaForReservedSubcategory(category, subCategory) {
    if (subCategory.endsWith('SPT')) return 'sptMarks';
    if (subCategory.endsWith('PWD')) return 'pwdRank';
    if (subCategory.endsWith('CPF')) return 'cdpPriority';
    if (subCategory.endsWith('CDP')) return 'rank';
    return 'categoryRank';
}

function sortStudentsForReservedSubcategory(students, criteria) {
    const sorted = [...students];

    switch (criteria) {
        case 'sptMarks':
            return sorted.sort((a, b) => b.sptMarks - a.sptMarks || a.jeeCRL - b.jeeCRL);
        case 'pwdRank':
            return sorted.sort((a, b) => a.pwdRank - b.pwdRank || a.jeeCRL - b.jeeCRL);
        case 'cdpPriority':
            return sorted.sort((a, b) => a.cdpPriority - b.cdpPriority || a.jeeCRL - b.jeeCRL);
        case 'categoryRank':
            return sorted.sort((a, b) => a.categoryRank - b.categoryRank || a.jeeCRL - b.jeeCRL);
        case 'rank':
        default:
            return sorted.sort((a, b) => a.jeeCRL - b.jeeCRL);
    }
}

function getStudentSpecialInfo(student, subCategory) {
    if (subCategory.endsWith('SPT')) return `Sports Marks: ${student.sptMarks}`;
    if (subCategory.endsWith('PWD')) return `PWD Rank: ${student.pwdRank}`;
    if (subCategory.endsWith('CPF')) return `Faculty Priority: ${student.cdpPriority}`;
    if (subCategory.endsWith('CDP')) return `Defense Priority: ${student.cdpPriority}`;
    return `Category Rank: ${student.categoryRank}`;
}

export default runReservedSubcategoryAllocation;
