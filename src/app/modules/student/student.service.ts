import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDb = async (studentData: Student) => {
  // const result = await StudentModel.create(student); // mongoose built in statice method

  // instance method

  const student = new StudentModel(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exist');
  }
  const result = await student.save(); //built in instance method
  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentById = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};
export const studentService = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getStudentById,
  deleteStudentFromDb,
};
