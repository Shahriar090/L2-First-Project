import express from 'express';
const router = express.Router();
import { StudentControllers } from './student.controller';

// will call controller function
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudentById);
router.delete('/:studentId', StudentControllers.deleteStudent);

export const studentRoute = router;
