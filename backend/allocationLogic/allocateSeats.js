import { PrismaClient } from './prisma/generated/prisma/index.js';

const prisma = new PrismaClient();

async function allocateSeats(students, options = {}) {
    const {
        category,
        subCategory,
        round = 1,
        sortCriteria = 'rank',
        mode = 'initial',
        checkExisting = true,
        allowVacate = false
    } = options;

    const results = {
        success: [],
        failures: [],
        vacated: [] // Add vacated array to track vacated seats
    };

    try {
        // Sort students based on provided criteria before processing
        let sortedStudents = [...students];
        
        if (sortCriteria) {
            console.log(`Sorting students by ${sortCriteria}`);
            sortedStudents = sortStudentsByCriteria(students, sortCriteria);
        }

        for (const student of sortedStudents) {
            console.log(`\nProcessing student ${student.applicationNumber} (JEE Rank: ${student.jeeCRL})`);
            
            // Log subcategory-specific information
            if (subCategory === 'GNSPT') {
                console.log(`Sports marks: ${student.sptMarks}`);
            } else if (subCategory === 'GNCPF') {
                console.log(`CDP Priority: ${student.cdpPriority}`);
            } else if (subCategory === 'GNPWD') {
                console.log(`PWD Rank: ${student.pwdRank}`);
            }

            // Skip students who already have their 1st choice when in subcategory allocation mode
            if (mode === 'upgrade' && subCategory && subCategory !== 'GNGN') {
                const currentAllocation = await prisma.allocatedSeat.findFirst({
                    where: {
                        studentId: student.applicationNumber,
                        choiceNumber: 1 // First choice
                    }
                });

                if (currentAllocation) {
                    console.log(`Skipping student ${student.applicationNumber} - Already has 1st choice`);
                    results.failures.push({
                        student: student.applicationNumber,
                        jeeRank: student.jeeCRL,
                        reason: 'Already has 1st choice'
                    });
                    continue;
                }
            }

            // Get student's current allocation if exists and we need to check
            let currentAllocation = null;
            if (checkExisting && mode === 'upgrade') {
                currentAllocation = await prisma.allocatedSeat.findFirst({
                    where: {
                        studentId: student.applicationNumber
                    }
                });

                if (currentAllocation) {
                    console.log(`Student currently allocated to ${currentAllocation.departmentId} (Choice #${currentAllocation.choiceNumber})`);
                }
            }

            const choices = [
                student.courseChoice1,
                student.courseChoice2,
                student.courseChoice3,
                student.courseChoice4,
                student.courseChoice5,
                student.courseChoice6,
                student.courseChoice7
            ].filter(Boolean); // Remove null/undefined choices

            console.log(`Choices in order: ${choices.join(' > ')}`);
            let allocated = false;

            for (const [index, choice] of choices.entries()) {
                // In upgrade mode, only consider better choices than current
                if (mode === 'upgrade' && currentAllocation && (index + 1) >= currentAllocation.choiceNumber) {
                    console.log(`Skipping choice ${index + 1}: ${choice} - Not better than current allocation`);
                    continue;
                }

                const result = await prisma.$transaction(async (tx) => {
                    // Query seat based on mode
                    const seatQuery = {
                        where: {
                            departmentId: choice,
                            totalSeats: { gt: 0 },
                        }
                    };

                    // Apply category/subcategory filters based on mode
                    if (mode === 'initial') {
                        // For initial allocation, use GEN-GNGN
                        seatQuery.where.category = 'GEN';
                        seatQuery.where.subCategory = 'GNGN';
                    } else if (mode === 'upgrade') {
                        // For subcategory allocation, use specific subcategory
                        seatQuery.where.category = category || student.category;
                        seatQuery.where.subCategory = subCategory || student.subCategory;
                    }

                    console.log(`Querying seats for ${choice} with criteria:`, seatQuery.where);

                    // Find eligible seat
                    const seat = await tx.seatMatrix.findFirst(seatQuery);

                    if (!seat) {
                        console.log(`Choice ${index + 1}: ${choice} - No eligible seats available for ${seatQuery.where.category}-${seatQuery.where.subCategory}`);
                        return null;
                    }

                    // Check if we're upgrading and need to vacate current seat
                    if (currentAllocation && allowVacate) {
                        console.log(`Vacating current seat in ${currentAllocation.departmentId}`);
                        
                        // Return seat to the seat matrix
                        await tx.seatMatrix.updateMany({
                            where: {
                                departmentId: currentAllocation.departmentId,
                                category: currentAllocation.category,
                                subCategory: currentAllocation.subCategory
                            },
                            data: { totalSeats: { increment: 1 } }
                        });
                        
                        // Delete current allocation
                        await tx.allocatedSeat.delete({
                            where: { id: currentAllocation.id }
                        });
                        
                        // Add to vacated results
                        results.vacated.push({
                            student: student.applicationNumber,
                            department: currentAllocation.departmentId,
                            category: currentAllocation.category,
                            subCategory: currentAllocation.subCategory
                        });
                    }

                    // Decrement available seats
                    await tx.seatMatrix.update({
                        where: { id: seat.id },
                        data: { totalSeats: { decrement: 1 } }
                    });

                    // Create new allocation
                    return await tx.allocatedSeat.create({
                        data: {
                            studentId: student.applicationNumber,
                            departmentId: choice,
                            category: seat.category,
                            subCategory: seat.subCategory,
                            allocationRound: round,
                            choiceNumber: index + 1,
                            jeeRank: student.jeeCRL
                        }
                    });
                });

                if (result) {
                    allocated = true;
                    results.success.push({
                        student: student.applicationNumber,
                        jeeRank: student.jeeCRL,
                        department: choice,
                        category: result.category,
                        subCategory: result.subCategory,
                        choiceNumber: index + 1
                    });
                    
                    if (currentAllocation) {
                        console.log(`✅ Upgraded from ${currentAllocation.departmentId} (Choice #${currentAllocation.choiceNumber}) to ${choice} (Choice #${index + 1})`);
                    } else {
                        console.log(`✅ Allocated ${choice} (Choice #${index + 1}) to student ${student.applicationNumber}`);
                    }
                    
                    break;
                }
            }

            if (!allocated) {
                results.failures.push({
                    student: student.applicationNumber,
                    jeeRank: student.jeeCRL,
                    reason: mode === 'upgrade' 
                        ? 'No better allocation possible'
                        : 'No eligible seats available in any of the choices'
                });
                
                console.log(`❌ Failed to allocate student ${student.applicationNumber}`);
            }
        }

        // Print summary
        console.log('\n=== Allocation Summary ===');
        console.log(`Success: ${results.success.length}`);
        console.log(`Failures: ${results.failures.length}`);
        console.log(`Vacated: ${results.vacated.length}`);

        return results;
    } catch (error) {
        console.error('Allocation error:', error);
        throw error;
    }
}

// Function to sort students based on specified criteria
function sortStudentsByCriteria(students, criteria) {
    // Clone the array to avoid modifying the original
    const sortedStudents = [...students];
    
    switch(criteria) {
        case 'rank':
            // Sort by JEE rank (lower is better)
            return sortedStudents.sort((a, b) => a.jeeCRL - b.jeeCRL);
            
        case 'sptMarks':
            // Sort by sports marks (higher is better)
            return sortedStudents.sort((a, b) => b.sptMarks - a.sptMarks);
            
        case 'cdpPriority':
            // Sort by priority (lower is better, 1 is highest priority)
            return sortedStudents.sort((a, b) => a.cdpPriority - b.cdpPriority);
            
        case 'pwdRank':
            // Sort by PWD rank (lower is better)
            return sortedStudents.sort((a, b) => a.pwdRank - b.pwdRank);
            
        default:
            // Default to JEE rank
            return sortedStudents.sort((a, b) => a.jeeCRL - b.jeeCRL);
    }
}

export default allocateSeats;
