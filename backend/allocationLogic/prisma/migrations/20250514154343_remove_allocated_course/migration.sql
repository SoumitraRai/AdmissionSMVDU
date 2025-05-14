/*
  Warnings:

  - You are about to drop the column `allocatedCourse` on the `AllocatedSeat` table. All the data in the column will be lost.
  - You are about to drop the column `allocatedSeats` on the `SeatMatrix` table. All the data in the column will be lost.
  - You are about to drop the column `sportsMarks` on the `StudentApplication` table. All the data in the column will be lost.
  - You are about to drop the column `subCategoryRank` on the `StudentApplication` table. All the data in the column will be lost.
  - You are about to drop the `OriginalSeatMatrix` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `AllocatedSeat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departmentId` to the `AllocatedSeat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory` to the `AllocatedSeat` table without a default value. This is not possible if the table is not empty.
  - Made the column `categoryRank` on table `StudentApplication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subCategory` on table `StudentApplication` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OriginalSeatMatrix" DROP CONSTRAINT "OriginalSeatMatrix_departmentId_fkey";

-- AlterTable
ALTER TABLE "AllocatedSeat" DROP COLUMN "allocatedCourse",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "departmentId" TEXT NOT NULL,
ADD COLUMN     "subCategory" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SeatMatrix" DROP COLUMN "allocatedSeats";

-- AlterTable
ALTER TABLE "StudentApplication" DROP COLUMN "sportsMarks",
DROP COLUMN "subCategoryRank",
ALTER COLUMN "categoryRank" SET NOT NULL,
ALTER COLUMN "subCategory" SET NOT NULL,
ALTER COLUMN "courseChoice1" DROP NOT NULL;

-- DropTable
DROP TABLE "OriginalSeatMatrix";

-- AddForeignKey
ALTER TABLE "AllocatedSeat" ADD CONSTRAINT "AllocatedSeat_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
