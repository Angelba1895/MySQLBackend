import Tutorias from "../models/Tutorias.js";
//Metodos CRUD


//Funcion para mostrar las tutorias

export const getTutorias = async (req, res) =>{

    try {
        const tutorias = await Tutorias.findAll();
        res.json(tutorias);

    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para agregar tutorias

export const agregarTutorias = async (req, res) =>{

    try {
        const tutorias = await Tutorias.create(req.body);
        res.json(tutorias);
    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para buscar una tutoria
export const buscarTutoria = async (req, res) =>{

    try {
        const tutorias = await Tutorias.findAll({
            where : {id: req.params.id}
        });
        res.json(tutorias[0]);
    } catch (error) {
        res.json({message: error.message});
        
    }
}

//Funcion para actualizar una tutoria
export const actualizarTutoria = async (req, res) =>{
    try {
        await Tutorias.update(req.body,{
            where: {id: req.params.id}
        });
    res.json({msg: 'La tutoria se actualizo correctamente'});    

    } catch (error) {
        res.json({message: error.message});
    }
}

//Funcion para eliminar una tutoria
export const eliminarTutoria = async (req, res) =>{
    try {
        await Tutorias.destroy({
            where: {id: req.params.id}
        })
        res.json({msg: 'La tutoria se elimino con éxito'});
    } catch (error) {
        res.json({message: error.message});
    }
} 