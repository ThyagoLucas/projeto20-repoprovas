-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacher_id_fkey";

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teacher_discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
