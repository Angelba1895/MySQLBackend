//Importamos la conexion a la base de datos
import db from '../config/db.js';
//Importamos sequelize
import { DataTypes } from 'sequelize';

const Tutorias = db.define('tutorias', {
    profesor:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    materia:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Tutorias;