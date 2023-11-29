import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First name cannot be more than 20 characters' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .max(20, { message: 'Last name cannot be more than 20 characters' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactInfo: z.string(),
  address: z.string(),
});

const studentValidationSchema = z.object({
  id: z.string().min(1),
  password: z.string().max(20),
  name: userNameValidationSchema.required(),
  gender: z
    .enum(['male', 'female', 'others'])
    .refine((value) => value !== undefined, { message: 'Gender is required' }),
  dateOfBirth: z.string(),
  email: z
    .string()
    .refine((value) => value !== undefined, { message: 'Email is required' }),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
