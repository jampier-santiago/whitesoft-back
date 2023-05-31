import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS ?? "");
  } catch (error) {
    console.log(error);
    throw new Error("Error with db connection");
  }
};
