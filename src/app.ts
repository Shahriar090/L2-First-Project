import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());
// application routes
app.use('/api/v1/students', studentRoute);
// app.use('/', studentRoute);
const getAController = (req: Request, res: Response) => {
  const a = 'welcome to the server of down fall';
  res.send(a);
};

app.get('/', getAController);

// console.log(process.cwd());
export default app;
