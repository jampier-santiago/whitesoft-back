// Packages
import { request, response } from "express";

// Services
import {
  postRegisterService,
  getAllRegistersService,
} from "../services/register.services";

export const postRegister = (req = request, res = response) => {
  const { name, country } = req.body;

  const data = { name, country, date: new Date() };

  postRegisterService(data, res);
};

export const getAllRegister = (req = request, res = response) => {
  getAllRegistersService(res);
};
