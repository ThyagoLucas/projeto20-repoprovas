import { Request, Response } from "express";
import { CreateUser } from "../repositories/userRepository.js";
import * as authService from "../services/authenticationService.js"

export async function register(req: Request, res: Response) {
 
  const { email, password } = req.body;

  const userTocreate = {email:email, password:password} as CreateUser;

  await authService.register(userTocreate);

  res.status(201).send('created');

}

export async function login(req: Request, res: Response) {

  const { email, password } = req.body;
  const { authorization } = req.headers
  const token = authorization?.replace('Bearer', '').trim();
  console.log(token)
  let response = {};
  
  if(token){
    response = await authService.sesionConfirmate(token);
  }
  else{
    response = await authService.login( email, password );
  }

  res.status(201).send(response);
}

