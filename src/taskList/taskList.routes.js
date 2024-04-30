import { Router } from "express";
import { check } from "express-validator";
import { createTask, getTasksIncomplete, getTasksComplete, updateMyTask, completeTask, deleteTask } from "./taskList.controller.js";

const router = Router();

router.post(
    "/create",
    [
        check("nombreTarea", "El nombre de la tarea no puede estar vacío").not().isEmpty(),
        check("descripcionTarea", "La descripción de la tarea no puede estar vacía").not().isEmpty(),
        check("fechaCreacion", "La fecha de creación no puede estar vacía").not().isEmpty(),
        check("fechaFinalizacion", "La fecha de finalización no puede estar vacía").not().isEmpty(),
        check("empleadoAsignado", "El empleado asignado no puede estar vacío").not().isEmpty(),
    ], createTask);

router.get(
    "/incomplete",
    [
    ], getTasksIncomplete);

router.get(
    "/complete",
    [
    ], getTasksComplete);

router.put(
    "/update/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
    ], updateMyTask);

router.put(
    "/updateCompleteTask/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
    ], completeTask);

router.delete(
    "/delete/:id",
    [
        check("id", "No es un ID válido").isMongoId(),
    ], deleteTask)


export default router;
