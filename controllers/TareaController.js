import Tareas from "../models/Tareas.js";
//Metodos CRUD


//Funcion para mostrar tareas

export const getTareas = async (req, res) =>{

    try {
        const tareas = await Tareas.findAll();
        res.json(tareas);

    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para agregar tareas

export const agregarTareas = async (req, res) =>{

    try {
        const tareas = await Tareas.create(req.body);
        res.json(tareas);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para buscar una tarea
export const buscarTarea = async (req, res) =>{

    try {
        const tareas = await Tareas.findAll({
            where : {id: req.params.id}
        });
        res.json(tareas[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para actualizar un empleado
export const actualizarTareas = async (req, res) =>{
    try {
        await Tareas.update(req.body,{
            where: {id: req.params.id}
        });
    res.json({msg: 'La tarea se actualizo correctamente'});    

    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para eliminar una tarea
export const eliminarTarea = async (req, res) =>{
    try {
        await Tareas.destroy({
            where: {id: req.params.id}
        })
        res.json({msg: 'La tarea se elimino con éxito'});
    } catch (error) {
        res.json({message: error.message});
    }
} 