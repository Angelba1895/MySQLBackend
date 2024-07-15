import express from "express";
import { actualizarEmpleado, agregarEmpleados, buscarEmpleado, eliminarEmpleado, getEmpleados } from "../controllers/EmpController.js";
const router = express.Router();

router.get('/', getEmpleados);
router.get('/:id', buscarEmpleado);
router.post('/', agregarEmpleados);
router.put('/:id', actualizarEmpleado);
router.delete('/:id', eliminarEmpleado);



export default router;