// Packages
import { request, response } from "express";

// Services
import { loginService } from "../services/auth.services";

/**
 * Function to make the user login
 */
export const login = (req = request, res = response) => {
  loginService(req, res);
};
