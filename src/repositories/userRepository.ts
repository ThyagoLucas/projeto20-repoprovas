import { Session, User } from "@prisma/client";
import prisma from "../configs/database/database.js";

export type CreateUser = Omit<User, "id" | "createdAt">
export type CreateSession = Omit<Session, "id"|"createdAt">

export async function userByEmail(email: string){

    const user = prisma.user.findFirst({where:{email:email}});

    return user;
}

export async function insert (user: CreateUser){ 

    await prisma.user.create({data:user});

}

export async function createSession(datasSession: CreateSession){

    await prisma.session.create({ data: datasSession });

}

export async function findSession(userId: number, token: string){
    const session = await prisma.session.findFirst({where:{ userId:userId, token:token}})
    return session;
}

