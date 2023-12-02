import { StudentModel } from '../student.model';

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
  getAllStudentsFromDb,
  getStudentById,
  deleteStudentFromDb,
};
