//Importamos la conexion a la base de datos
import db from '../config/db.js';
//Importamos sequelize
import { DataTypes } from 'sequelize';

const Empleados = db.define('empleados', {
    nombres:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Empleados;