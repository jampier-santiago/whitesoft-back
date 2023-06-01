// Packages
import { Schema, model } from "mongoose";

export interface Register {
  name: string;
  date: Date;
  country: Schema.Types.ObjectId;
}

const RegisterSchema = new Schema<Register>({
  name: {
    type: String,
    required: [true, "The field name is required"],
    indexes: true,
  },
  date: { type: Date, required: true },
  country: { type: Schema.Types.ObjectId, required: true },
});

RegisterSchema.methods.toJSON = function () {
  const { __v, ...register } = this.toObject();

  return register;
};

export default model<Register>("Register", RegisterSchema);
