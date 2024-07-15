import express from "express";

import { actualizarTareas, agregarTareas, buscarTarea, eliminarTarea , getTareas} from "../controllers/TareaController.js";
const router = express.Router();

router.get('/', getTareas);
router.get('/:id', buscarTarea);
router.post('/', agregarTareas);
router.put('/:id', actualizarTareas);
router.delete('/:id', eliminarTarea);

export default router;