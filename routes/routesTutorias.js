import express from "express";

import { actualizarTutoria, agregarTutorias, buscarTutoria, eliminarTutoria, getTutorias } from "../controllers/TutoriaController.js"
const router = express.Router();

router.get('/', getTutorias);
router.get('/:id', buscarTutoria);
router.post('/', agregarTutorias);
router.put('/:id', actualizarTutoria);
router.delete('/:id', eliminarTutoria);

export default router;
