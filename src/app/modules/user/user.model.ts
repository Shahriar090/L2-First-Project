// import { Schema, model } from 'mongoose';
// import { TUser } from './user.interface';

import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

// export const userSchema = new Schema<TUser>(
//   {
//     id: { type: String, required: true },
//     password: { type: String, required: true },
//     needsPasswordChange: { type: Boolean, default: true },
//     role: {
//       type: String,
//       enum: ['student', 'faculty', 'admin'],
//     },
//     status: {
//       type: String,
//       enum: ['in-progress', 'blocked'],
//       default: 'in-progress',
//     },
//     isDeleted: { type: Boolean, default: false },
//   },
//   { timestamps: true },
// );

// // model
// export const User = model<TUser>('User', userSchema);

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
  },
  {
    timestamps: true,
  },
);

// model

export const User = model<TUser>('User', userSchema);
