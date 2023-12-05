import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());
// application routes
app.use('/api/v1', router);
const test = (req: Request, res: Response) => {
  const a = 'welcome to the server of down fall';
  res.send(a);
};

app.get('/', test);

// global error handler function
app.use(globalErrorHandler);

// not found
app.use(notFound);
export default app;
