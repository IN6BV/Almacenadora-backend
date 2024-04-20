import { Router } from "express";
import { check } from "express-validator";
import { createTask, getTasksIncomplete, getTasksComplete, updateMyTask } from "./taskList.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { existeTastListPorId } from "../helpers/db-validators.js";

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

router.get(
    "/incomplete",
    [
        validarJWT
    ], getTasksIncomplete);

router.get(
    "/complete",
    [
        validarJWT
    ], getTasksComplete);

router.put(
    "/update/:id",
    [
        validarJWT,
        check("id").custom(existeTastListPorId),
    ], updateMyTask);

export default router;
