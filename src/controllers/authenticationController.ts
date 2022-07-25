import { Request, Response } from "express";
import * as authService from "../services/authenticationService.js"

export async function register(req: Request, res: Response) {
 
  const { name, email, password } = req.body;
  await authService.register(name, email, password);

  res.status(201).send('created');
}

export async function login(req: Request, res: Response) {

  const { email, password } = req.body;
  const { authorization } = req.headers
  const token = authorization?.replace('Bearer', '').trim();

  let response = {};
  
  if(token){
    response = await authService.sesionConfirmate(token);
  }
  else{
    response = await authService.login( email, password );
  }

  res.status(201).send(response);
}

