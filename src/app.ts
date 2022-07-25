import Express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routers from './routers/index.js';
import errorHandler from './Middlewares/errorHandlerMiddleware.js';

const app = Express();

app.use(cors());
app.use(json());
app.use(routers);
app.use(errorHandler);

export default app;