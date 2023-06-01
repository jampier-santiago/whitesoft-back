// Packages
import { Router } from "express";

// Controllers
import { getAllConutries } from "../controllers/countries.controllers";

const router = Router();

router.get("/", getAllConutries);

export default router;
