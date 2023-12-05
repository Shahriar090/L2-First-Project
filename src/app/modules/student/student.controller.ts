import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudentsFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students Are Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getStudentById(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Retrieved Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteStudentFromDb(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student has deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudentById,
  deleteStudent,
};
