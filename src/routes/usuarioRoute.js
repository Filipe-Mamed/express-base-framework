import express from "express";
const router = express.Router();

import { registrar, login, sair } from "../controllers/usuarioController.js";

router.post("/registrar", registrar); // Registar Usuario
router.post("/login", login); // Fazer Login
router.get("/sair", sair); // Sair

export default router;