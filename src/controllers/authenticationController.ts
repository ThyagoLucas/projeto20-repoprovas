
import { Request, Response } from "express";

export async function login(req: Request, res:Response){

    res.status(201).send('Entrei');
}