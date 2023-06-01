// Packages
import { request, response } from "express";

// Services
import { postRegisterService } from "../services/register.services";

export const postRegister = (req = request, res = response) => {
  const { name, country } = req.body;

  const data = { name, country, date: new Date() };

  postRegisterService(data, res);
};
