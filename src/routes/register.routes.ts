// Packages
import { Router } from "express";
import { check } from "express-validator";

// Controllers
import {
  postRegister,
  getAllRegister,
} from "../controllers/register.controllers";

// Middlewares
import { validarCampos, validCountry, validarJWT } from "../middlewares";

const router = Router();

router.get("/", [validarJWT, validarCampos], getAllRegister);

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
