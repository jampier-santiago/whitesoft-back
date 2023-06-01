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
    check("country", "It is not a mongo id").isMongoId(),
    validCountry,
    validarCampos,
  ],
  postRegister
);

export default router;
