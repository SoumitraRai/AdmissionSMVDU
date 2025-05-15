/*
  Warnings:

  - Added the required column `cdpPriority` to the `StudentApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pwdRank` to the `StudentApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sptMarks` to the `StudentApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- Add priority fields with default values first
ALTER TABLE "StudentApplication" 
ADD COLUMN "sptMarks" INTEGER DEFAULT 0,
ADD COLUMN "cdpPriority" INTEGER DEFAULT 0,
ADD COLUMN "pwdRank" INTEGER DEFAULT 0;

-- Then make them required after all existing records have default values
ALTER TABLE "StudentApplication" 
ALTER COLUMN "sptMarks" SET NOT NULL,
ALTER COLUMN "cdpPriority" SET NOT NULL,
ALTER COLUMN "pwdRank" SET NOT NULL;
