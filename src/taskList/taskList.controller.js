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

export const getTasksIncomplete = async (req, res) => {
    const query = {estado: false, empleadoAsignado: req.user.uid};

    const [incompleteTasks, total] = await Promise.all([
        TaskList.find(query),
        TaskList.countDocuments(query).populate({
            path: "empleadoAsignado",
            select: "nombre -_id"
        })
    ]);

    res.status(200).json({
        msg: "Tareas incompletas",
        total,
        incompleteTasks
    });
}

export const getTasksComplete = async (req, res) => {
    const query = {estado: true, empleadoAsignado: req.user.uid};

    const [completeTasks, total] = await Promise.all([
        TaskList.find(query),
        TaskList.countDocuments(query).populate({
            path: "empleadoAsignado",
            select: "nombre -_id"
        })
    ]);

    res.status(200).json({
        msg: "Tareas completas",
        total,
        completeTasks
    });    
}

