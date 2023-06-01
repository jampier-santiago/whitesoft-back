// Packages
import { request, response } from "express";

// Models
import CountryModel from "../models/country.model";

export const validCountry = async (
  req = request,
  res = response,
  next: any
) => {
  const { country } = req.body;

  const dataCountry = await CountryModel.findById(country);

  console.log(dataCountry);
  if (!dataCountry) {
    return res.status(400).json("There is not any country with this id");
  }

  next();
};
