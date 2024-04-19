import TaskList from "./taskList.model.js";

export const createTask = async (req, res) => {
    const {nombreTarea, descripcionTarea, fechaCreacion, fechaFinalizacion} = req.body;
    const {uid} = req.user;
    console.log(uid)


    const task = new TaskList({nombreTarea, descripcionTarea, fechaCreacion, fechaFinalizacion, empleadoAsignado: uid});
    console.log(task)

    await task.save();

    return res.status(200).json({
        msg: "Tarea creada con éxito",
        task
    });
}