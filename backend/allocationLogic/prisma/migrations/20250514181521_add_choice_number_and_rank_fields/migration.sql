/*
  Warnings:

  - Added the required column `jeeRank` to the `AllocatedSeat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AllocatedSeat" ADD COLUMN     "jeeRank" INTEGER NOT NULL;
