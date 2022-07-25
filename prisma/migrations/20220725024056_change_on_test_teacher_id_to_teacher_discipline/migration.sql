/*
  Warnings:

  - You are about to drop the column `teacher_id` on the `tests` table. All the data in the column will be lost.
  - Added the required column `teacher_discipline` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacher_id_fkey";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "teacher_id",
ADD COLUMN     "teacher_discipline" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacher_discipline_fkey" FOREIGN KEY ("teacher_discipline") REFERENCES "teacher_discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
