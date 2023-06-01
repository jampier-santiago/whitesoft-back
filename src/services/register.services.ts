// Packages
import { response } from "express";

// Model
import RegisterModel, { Register } from "../models/register.model";

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
