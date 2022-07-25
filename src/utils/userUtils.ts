import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import prisma from '../configs/database/database.js';
import { deleteSession } from '../repositories/userRepository.js';

dotenv.config();

export function tokenCreate(userId: number, email:string){

    const datas = {userId: userId, email:email};
    const secretKey = process.env.JWT_SECRET;
    const expiration = {expiresIn : 60*60*24} //24h
    const token = jwt.sign(datas, secretKey, expiration);

    return token;
}

export async function userInfoByToken(token: string){

    let user = {userId:null,email:null};
    try {
        
        user = jwt.verify(token, process.env.JWT_SECRET);

        return user;

    } catch (error) {

        await deleteSession(token);
        throw {type:401, message:'expired token'};
    }
    
}