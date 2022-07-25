import prisma from "../configs/database/database.js";
import { Test } from "@prisma/client";

export type CreatTest = Omit<Test, "id"|"createdAt">

export async function insert(test: CreatTest){
    await prisma.test.create({data: test});
}
