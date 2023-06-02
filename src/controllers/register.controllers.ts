// Packages
import { request, response } from "express";

// Services
import {
  postRegisterService,
  getAllRegistersService,
} from "../services/register.services";

/**
 * Function to generate a new record
 */
export const postRegister = (req = request, res = response) => {
  const { name, country } = req.body;

  const data = { name, country, date: new Date() };

  postRegisterService(data, res);
};

/**
 * Function to fetch all records
 */
export const getAllRegister = (req = request, res = response) => {
  getAllRegistersService(res);
};
