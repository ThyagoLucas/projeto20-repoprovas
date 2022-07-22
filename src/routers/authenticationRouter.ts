import { Router } from "express";
import { login } from "../controllers/authenticationController.js";


const authentication = Router();

authentication.post('/login', login);



export default authentication;