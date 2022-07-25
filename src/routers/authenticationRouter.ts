import { Router } from "express";
import { register, login } from "../controllers/authenticationController.js";
import { schemaValidations } from "../Middlewares/schemaValidationsMiddleware.js";
import loginSchema from "../schemas/loginSchema.js";
import registerSchema from "../schemas/registerSchema.js";

const authentication = Router();

authentication.post('/sign-up', schemaValidations(registerSchema), register);

authentication.post('/sign-in', schemaValidations(loginSchema), login);



export default authentication;