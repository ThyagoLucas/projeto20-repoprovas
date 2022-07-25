import { Router } from "express";
import testRouter from "./testRouter.js";
import authentication from "./authenticationRouter.js";

const routers = Router();

routers.use(authentication);
routers.use(testRouter);

export default routers;