/*
  Warnings:

  - You are about to drop the column `discipline_id` on the `teacher_discipline` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_id` on the `teacher_discipline` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_discipline` on the `tests` table. All the data in the column will be lost.
  - Added the required column `disciplineId` to the `teacher_discipline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `teacher_discipline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherDiscipline` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teacher_discipline" DROP CONSTRAINT "teacher_discipline_discipline_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher_discipline" DROP CONSTRAINT "teacher_discipline_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_category_id_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacher_discipline_fkey";

-- AlterTable
ALTER TABLE "teacher_discipline" DROP COLUMN "discipline_id",
DROP COLUMN "teacher_id",
ADD COLUMN     "disciplineId" INTEGER NOT NULL,
ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "category_id",
DROP COLUMN "createdAt",
DROP COLUMN "teacher_discipline",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "teacherDiscipline" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "teacher_discipline" ADD CONSTRAINT "teacher_discipline_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_discipline" ADD CONSTRAINT "teacher_discipline_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDiscipline_fkey" FOREIGN KEY ("teacherDiscipline") REFERENCES "teacher_discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
