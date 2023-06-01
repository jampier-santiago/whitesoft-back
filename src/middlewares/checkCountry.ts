// Packages
import { request, response } from "express";

// Models
import CountryModel from "../models/country.model";
import { validationResult } from "express-validator";

/**
 * Functon for validate country
 */
export const validCountry = async (
  req = request,
  res = response,
  next: any
) => {
  const { country } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const dataCountry = await CountryModel.findById(country);

  if (!dataCountry) {
    return res.status(400).json("There is not any country with this id");
  }

  next();
};
