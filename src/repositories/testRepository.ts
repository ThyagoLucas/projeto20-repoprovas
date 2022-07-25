import prisma from "../configs/database/database.js";
import { Test } from "@prisma/client";

export type CreatTest = Omit<Test, "id">

export async function insert(test: CreatTest){
    await prisma.test.create({data: test});
}

export async function findAllTestsBydiscipline(){
    const tests = await prisma.term.findMany({
        include: {
          discipline: {
            select: {
              id: true,
              name: true,
              term: {},

              teacher: {
                select: {
                  id: true,
                  discipline: {},
                  teacher: {},
                  tests: {
                    select: { id: true, name: true, pdfUrl: true, category: {} },
                  }

                 
                },
              },
            },
          },
        },
      });

    return tests;
}
