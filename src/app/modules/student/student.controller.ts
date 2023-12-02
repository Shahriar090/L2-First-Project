import { Request, Response } from 'express';
import { studentService } from './student.service';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students Are Retrieved Successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Students Retrieved Failed, Please Try Again',
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
  } catch (error: any) {
    res.status(200).json({
      success: true,
      message: error.message || 'Student Retrieved Failed',
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Student delete failed',
    });
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudentById,
  deleteStudent,
};
