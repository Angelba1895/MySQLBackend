//Importamos la conexion a la base de datos
import db from '../config/db.js';
//Importamos sequelize
import { DataTypes } from 'sequelize';

const Tareas = db.define('tareas', {
    nombre:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    observacion:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Tareas;