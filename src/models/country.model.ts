import { Schema, model } from "mongoose";

export interface Country {
  name: string;
  state: boolean;
  flag: string;
  timezone: string;
}

const CountrySchema = new Schema<Country>({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
    indexes: true,
  },
  state: {
    type: Boolean,
    required: true,
    default: true,
  },
  flag: {
    type: String,
    required: [true, "The flag is required"],
  },
  timezone: {
    type: String,
    required: [true, "The timezone is required"],
  },
});

CountrySchema.methods.toJSON = function () {
  const { __v, state, _id, ...country } = this.toObject();
  country.uid = _id;

  return country;
};

export default model<Country>("Country", CountrySchema);
