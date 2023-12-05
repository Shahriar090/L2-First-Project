import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

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

// document middleware
//pre save middleware/hook
userSchema.pre('save', async function (next) {
  try {
    const user = this;
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_round),
    );
    next();
  } catch (error) {
    console.log(error);
  }
});

// set empty string after saving the password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// model

export const User = model<TUser>('User', userSchema);
