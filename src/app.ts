import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());
// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);
const getAController = (req: Request, res: Response) => {
  const a = 'welcome to the server of down fall';
  res.send(a);
};

app.get('/', getAController);

// global error handler function
app.use(globalErrorHandler);
// console.log(process.cwd());
export default app;
