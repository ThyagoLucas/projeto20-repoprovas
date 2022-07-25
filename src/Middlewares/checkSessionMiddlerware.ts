import { NextFunction, Request, Response } from "express";
import { sesionConfirmate } from "../services/authenticationService.js";

export async function checkSession( req: Request, res: Response, next:NextFunction){

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer','').trim();


    if(!token){
        throw {type: 401, message:'unauthorized'};
    }
    else{
        await sesionConfirmate(token);
    }

    next();

}