// Packages
import { response } from "express";
import { AxiosAdapter } from "../data/adapters/axios.adapter";

// Model
import CountryModel, { Country } from "../models/country.model";

/**
 * Function to alphabetically arrange the countries
 */
const arrangeCountries = (a: Country, b: Country) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
};

/**
 * Get all countries from the database
 */
export const getAllConuntriesService = async (res = response) => {
  const countries = await CountryModel.find({ state: true });

  // get data of countries api external
  if (countries.length === 0) {
    new AxiosAdapter()
      .get<Array<Country>>(process.env.API_COUNTRIES ?? "")
      .then(async (data) => {
        const dataCountry: Array<Country> = data.map((country: any) => ({
          name: country.name.common,
          state: true,
          flag: country.flags.png,
          timezone: country.timezones[0],
        }));

        const result = await CountryModel.insertMany(
          dataCountry.sort(arrangeCountries)
        );

        res.json(result);
      });
  }

  res.json(countries);
};
