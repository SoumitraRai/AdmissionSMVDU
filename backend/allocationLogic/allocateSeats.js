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
        allowVacate = false,
        respectFreeze = false,  // New flag
        handleFloat = false     // New flag
    } = options;

    const results = {
        success: [],
        failures: [],
        vacated: [],
        frozen: [],    // Track frozen seats
        floating: []   // Track floating seats
    };

    try {
        // Validate input parameters
        if (mode === 'upgrade' && (!respectFreeze || !handleFloat)) {
            throw new Error('Upgrade mode requires respectFreeze and handleFloat flags');
        }

        // Sort students based on provided criteria before processing
        let sortedStudents = [...students];
        
        if (sortCriteria) {
            console.log(`Sorting students by ${sortCriteria}`);
            sortedStudents = sortStudentsByCriteria(students, sortCriteria);
        }

        for (const student of sortedStudents) {
            try {
                console.log(`\nProcessing student ${student.applicationNumber} (JEE Rank: ${student.jeeCRL})`);

                // Check if student has a frozen seat
                if (respectFreeze) {
                    const frozenAllocation = await prisma.allocatedSeat.findFirst({
                        where: {
                            studentId: student.applicationNumber,
                            choiceNumber: 1,
                            allocationRound: round - 1
                        }
                    });

                    if (frozenAllocation) {
                        results.frozen.push({
                            student: student.applicationNumber,
                            department: frozenAllocation.departmentId,
                            reason: 'First choice allocation'
                        });
                        console.log(`🔒 Student ${student.applicationNumber} has frozen seat in ${frozenAllocation.departmentId}`);
                        continue;
                    }
                }

                // Handle floating seats
                let currentAllocation = null;
                if (handleFloat && mode === 'upgrade') {
                    currentAllocation = await prisma.allocatedSeat.findFirst({
                        where: {
                            studentId: student.applicationNumber,
                            allocationRound: round - 1
                        }
                    });

                    if (currentAllocation && currentAllocation.choiceNumber > 1) {
                        results.floating.push({
                            student: student.applicationNumber,
                            department: currentAllocation.departmentId,
                            choiceNumber: currentAllocation.choiceNumber
                        });
                    }
                }

                // Get student's current allocation if exists and we need to check
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
                                category: mode === 'initial' ? 'GEN' : (category || student.category),
                                subCategory: mode === 'initial' ? 'GNGN' : (subCategory || `${student.category}${student.category}`)
                            }
                        };

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
            } catch (studentError) {
                console.error(`Error processing student ${student.applicationNumber}:`, studentError);
                results.failures.push({
                    student: student.applicationNumber,
                    jeeRank: student.jeeCRL,
                    reason: `Processing error: ${studentError.message}`
                });
                continue; // Continue with next student
            }
        }

        // Enhanced Summary
        console.log('\n=== Detailed Allocation Summary ===');
        console.log(`Success: ${results.success.length}`);
        console.log(`Failures: ${results.failures.length}`);
        console.log(`Frozen: ${results.frozen.length}`);
        console.log(`Floating: ${results.floating.length}`);
        console.log(`Vacated: ${results.vacated.length}`);

        return results;

    } catch (error) {
        console.error('Critical allocation error:', error);
        await logError({
            error: error.message,
            stack: error.stack,
            round: options.round,
            mode: options.mode,
            category: options.category
        });
        throw error;
    } finally {
        // Cleanup and validation
        await validateAllocationIntegrity(round);
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

// Add new helper functions for error handling
async function logError(errorDetails) {
    try {
        // Use raw SQL if Prisma model is not available
        await prisma.$executeRaw`
            INSERT INTO "ErrorLog" ("error", "stack", "round", "mode", "category")
            VALUES (${errorDetails.error}, ${errorDetails.stack}, 
                    ${errorDetails.round}, ${errorDetails.mode}, ${errorDetails.category})
        `;
    } catch (logError) {
        console.error('Failed to log error:', logError);
    }
}

async function validateAllocationIntegrity(round) {
    try {
        // Check for seat matrix consistency
        const seatCounts = await prisma.$queryRaw`
            SELECT s."departmentId", s.category, s."subCategory", 
                   s."totalSeats", COUNT(a.id) as allocated
            FROM "SeatMatrix" s
            LEFT JOIN "AllocatedSeat" a 
                ON s."departmentId" = a."departmentId"
                AND s.category = a.category
                AND (
                    s."subCategory" = a."subCategory"
                    OR (s.category = a.category AND s.category = s."subCategory")
                )
                AND a."allocationRound" = ${round}
            GROUP BY s."departmentId", s.category, s."subCategory", s."totalSeats"
            HAVING COUNT(a.id) > s."totalSeats"
        `;

        if (seatCounts.length > 0) {
            console.error('⚠️ Seat allocation inconsistencies:', seatCounts);
        }
    } catch (error) {
        console.error('Validation error:', error);
    }
}

async function findAvailableSeat(student, choice, options) {
    const seatQuery = {
        where: {
            departmentId: choice,
            totalSeats: { gt: 0 },
            category: options.category || student.category,
            // Use main category if useMainCategory flag is set
            subCategory: options.useMainCategory ? 
                (options.category || student.category) :
                (options.subCategory || `${student.category}${student.category}`)
        }
    };

    // Add debug logging
    console.log(`Searching seats for ${student.applicationNumber}:`, {
        department: choice,
        category: seatQuery.where.category,
        subCategory: seatQuery.where.subCategory
    });

    const availableSeat = await prisma.seatMatrix.findFirst(seatQuery);

    return availableSeat;
}

export default allocateSeats;
