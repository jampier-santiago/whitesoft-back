// Packages
import { Router } from "express";
import { check } from "express-validator";

// Controllers
import { postRegister } from "../controllers/register.controllers";

// Middlewares
import { validarCampos, validCountry } from "../middlewares";

const router = Router();

router.post(
  "/",
  [
    check("name", "The field name is required").notEmpty().isString(),
    validCountry,
    validarCampos,
  ],
  postRegister
);

export default router;
