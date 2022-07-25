import { Router } from "express";
import { add, getAll } from "../controllers/testsController.js";
import { checkSession } from "../Middlewares/checkSessionMiddlerware.js";
import { schemaValidations } from "../Middlewares/schemaValidationsMiddleware.js";
import testSchema from "../schemas/testSchema.js";


const testRouter = Router();

testRouter.use(checkSession);
testRouter.post('/addtest', schemaValidations(testSchema), add);
testRouter.get('/tests', getAll);

export default testRouter;