import { Model, Types } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactInfo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: UserName;

  gender: 'male' | 'female' | 'others';
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isDeleted: boolean;
};

export type studentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};

export type StudentMethodsModel = Model<
  TStudent,
  Record<string, never>,
  studentMethods
>;
