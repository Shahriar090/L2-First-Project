// import config from '../../config';
// import { StudentModel } from '../student.model';
// import { Student } from '../student/student.interface';
// import { TUser } from './user.interface';

import config from '../../config';
import { StudentModel } from '../student.model';
import { TStudent } from '../student/student.interface';
import { NewUser, TUser } from './user.interface';
import { User } from './user.model';

// const createStudentIntoDb = async (password: string, studentData: Student) => {
//   // create a user object
//   const userData: Partial<TUser> = {};
//   // if password is not given
//   // user.password = password || (config.default_password as string); //shortcut of if else
//   if (!password) {
//     userData.password = config.default_password as string;
//   } else {
//     userData.password = password;
//   }
//   // set student role
//   userData.role = 'student';
//   // set manually generated id
//   userData.id = '2030100001';
//   const newUser = await StudentModel.create(userData); // mongoose built in statice method
//   // create a student
//   if (Object.keys(newUser).length) {
//     //  set id , id as user
//     studentData.id = newUser.id;
//     studentData.user = newUser._id; //reference id
//     const newStudent = await StudentModel.create(studentData);
//     return newStudent;
//   }
//   // instance method

//   // const student = new StudentModel(studentData);
//   //   if (await student.isUserExists(studentData.id)) {
//   //     throw new Error('User already exist');
//   //   }
//   // const result = await student.save(); //built in instance method
// };

// export const UserServices = {
//   createStudentIntoDb,
// };
const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  // create a student
  const userData: Partial<TUser> = {};
  //if password is not given, use the default password
  if (!password) {
    userData.password = config.default_password as string;
  } else {
    userData.password = password;
  }

  // set role for student

  userData.role = 'student';

  // manually set user id
  userData.id = '2030100001';
  const newUser = await User.create(userData);
  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDb,
};
