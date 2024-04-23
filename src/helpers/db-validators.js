import TaskList from "../taskList/taskList.model.js";

export const existeTaskListPorId = async (id) => {
    const existeTaskList = await TaskList.findById(id);
    if (!existeTaskList) {
        throw { status: 400, message: 'No se encontró ninguna tarea con el ID proporcionado.' };
    }
}