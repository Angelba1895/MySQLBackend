import { Sequelize } from "sequelize";

const db = new Sequelize('empleadosbd','root','',{
    host:'localhost',
    dialect:'mysql',
})

export default db;