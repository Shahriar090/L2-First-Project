import { Request, Response } from 'express';
import { studentService } from './student.service';
import studentValidationSchema from './student.validation.zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const zodValidatedData = studentValidationSchema.parse(studentData);
    const result = await studentService.createStudentIntoDb(zodValidatedData);

    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      message: 'Student Create Failed, Please Try Again',
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students Are Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Students Retrieved Failed, Please Try Again',
    });
  }
};

const getSingleStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getStudentById(studentId);
    res.status(200).json({
      success: true,
      message: 'Student Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: 'Student Retrieved Failed',
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudentById,
};
