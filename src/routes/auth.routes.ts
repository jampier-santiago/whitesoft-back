// Packages
import { Router } from "express";

// Controllers
import { login } from "../controllers/aunt.controllers";

const router = Router();

router.post("/", login);

export default router;
