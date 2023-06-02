// Packages
import { request, response } from "express";

// Services
import { getAllConuntriesService } from "../services/countries.services";

/**
 * Get all countries from the database
 */
export const getAllConutries = (req = request, res = response) => {
  getAllConuntriesService(res);
};
