import mongoose from "mongoose";

const TaskListSchema = mongoose.Schema({
    nombreTarea:{
        type: String,
        required: [true, "El nombre de la tarea es requerido"]
    },
    descripcionTarea:{
        type: String,
        required: [true, "La descripción de la tarea es requerida"]
    },
    fechaCreacion:{
        type: Date,
    },
    fechaFinalizacion:{
        type: Date,
    },
    estado:{
        type: Boolean,
        default: false
    }
    empleadoAsignado:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

TaskListSchema.methods.toJSON = function(){
    const {__v, ...task} = this.toObject();
    return task;
}

export default mongoose.model('TaskList', TaskListSchema);