import Empleados from "../models/Empleados.js";
//Metodos CRUD


//Funcion para mostrar empleados

export const getEmpleados = async (req, res) =>{

    try {
        const empleado = await Empleados.findAll();
        res.json(empleado);

    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para agregar empleados

export const agregarEmpleados = async (req, res) =>{

    try {
        const empleado = await Empleados.create(req.body);
        res.json(empleado);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para buscar un empleado
export const buscarEmpleado = async (req, res) =>{

    try {
        const empleado = await Empleados.findAll({
            where : {id: req.params.id}
        });
        res.json(empleado[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para actualizar un empleado
export const actualizarEmpleado = async (req, res) =>{
    try {
        await Empleados.update(req.body,{
            where: {id: req.params.id}
        });
    res.json({msg: 'El empleado se actualizo correctamente'});    

    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para eliminar un empleado
export const eliminarEmpleado = async (req, res) =>{
    try {
        await Empleados.destroy({
            where: {id: req.params.id}
        })
        res.json({msg: 'El empleado se elimino con éxito'});
    } catch (error) {
        res.json({message: error.message});
    }
}  