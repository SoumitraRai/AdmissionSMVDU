/*
  Warnings:

  - Added the required column `choiceNumber` to the `AllocatedSeat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AllocatedSeat" ADD COLUMN     "choiceNumber" INTEGER NOT NULL;
