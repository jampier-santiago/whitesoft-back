// Packages
import { request, response } from "express";

// Services
import { getAllConuntriesService } from "../services/countries.services";

export const getAllConutries = (req = request, res = response) => {
  getAllConuntriesService(res);
};
