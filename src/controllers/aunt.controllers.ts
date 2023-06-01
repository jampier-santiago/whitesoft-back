// Packages
import { request, response } from "express";

// Services
import { loginService } from "../services/auth.services";

export const login = (req = request, res = response) => {
  loginService(req, res);
};
