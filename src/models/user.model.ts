// Packages
import { Schema, model } from "mongoose";

export interface User {
  name: string;
  password: string;
  email: string;
  state: boolean;
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, "The field name is required"],
    indexes: true,
  },
  email: {
    type: String,
    required: [true, "The field email is required"],
    indexes: true,
  },
  password: {
    type: String,
    required: [true, "The field password is required"],
  },
  state: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, state, _id, ...user } = this.toObject();

  user.uid = _id;

  return user;
};

export default model<User>("User", UserSchema);
