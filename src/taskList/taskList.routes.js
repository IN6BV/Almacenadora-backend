import { Router } from "express";
import { check } from "express-validator";
import { createTask } from "./taskList.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post(
    "/create",
    [
        validarJWT,
        check("nombreTarea", "El nombre de la tarea no puede estar vacío").not().isEmpty(),
        check("descripcionTarea", "La descripción de la tarea no puede estar vacía").not().isEmpty(),
        check("fechaCreacion", "La fecha de creación no puede estar vacía").not().isEmpty(),
        check("fechaFinalizacion", "La fecha de finalización no puede estar vacía").not().isEmpty(),
    ], createTask);

export default router;
