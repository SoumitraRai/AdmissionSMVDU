-- CreateTable
CREATE TABLE "StudentApplication" (
    "applicationNumber" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "fatherMotherName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jeeCRL" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "categoryRank" INTEGER,
    "subCategory" TEXT,
    "subCategoryRank" INTEGER,
    "courseChoice1" TEXT NOT NULL,
    "courseChoice2" TEXT,
    "courseChoice3" TEXT,
    "courseChoice4" TEXT,
    "courseChoice5" TEXT,
    "courseChoice6" TEXT,
    "courseChoice7" TEXT,
    "sportsMarks" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudentApplication_pkey" PRIMARY KEY ("applicationNumber")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeatMatrix" (
    "id" SERIAL NOT NULL,
    "departmentId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL,

    CONSTRAINT "SeatMatrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllocatedSeat" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "allocatedCourse" TEXT NOT NULL,
    "allocationRound" INTEGER NOT NULL,
    "allocatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AllocatedSeat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OriginalSeatMatrix" (
    "id" SERIAL NOT NULL,
    "departmentId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL,

    CONSTRAINT "OriginalSeatMatrix_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeatMatrix_departmentId_category_subCategory_key" ON "SeatMatrix"("departmentId", "category", "subCategory");

-- CreateIndex
CREATE UNIQUE INDEX "OriginalSeatMatrix_departmentId_category_subCategory_key" ON "OriginalSeatMatrix"("departmentId", "category", "subCategory");

-- AddForeignKey
ALTER TABLE "SeatMatrix" ADD CONSTRAINT "SeatMatrix_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllocatedSeat" ADD CONSTRAINT "AllocatedSeat_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentApplication"("applicationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OriginalSeatMatrix" ADD CONSTRAINT "OriginalSeatMatrix_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
