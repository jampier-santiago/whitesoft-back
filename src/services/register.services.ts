// Packages
import { response } from "express";

// Model
import RegisterModel, { Register } from "../models/register.model";

/**
 * Function to generate a new record
 */
export const postRegisterService = async (data: Register, res = response) => {
  try {
    const newRegister = new RegisterModel(data);
    await newRegister.save();

    res.json("The register was inserted success");
    return;
  } catch (error: any) {
    throw new Error(error);
  }
};

/**
 * Function to fetch all records
 */
export const getAllRegistersService = async (res = response) => {
  try {
    const registers = await RegisterModel.find().populate("country", [
      "name",
      "flag",
    ]);

    res.json(registers);
  } catch (error) {
    res.status(500).json(error);
  }
};
