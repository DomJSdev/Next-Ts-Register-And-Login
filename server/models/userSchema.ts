import {Schema, Document, model} from 'mongoose';

export interface UserModel extends Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordSalt: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const UserSchema = new Schema(
  {
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true, require: true},
    passwordSalt: {type: String, unique: true, require: true},
    password: {type: String, require: true},
  },
  {timestamps: true}
);

UserSchema.pre<UserModel>('save', function init(this, next) {
  const utc = new Date().toISOString();
  if (!this.createdAt) {
    this.createdAt = utc;
  }
  this.updatedAt = utc;
  next();
});

const userModel = model<UserModel>('User', UserSchema);
export default userModel;
