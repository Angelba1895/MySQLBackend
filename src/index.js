import express from 'express';
import cors from 'cors';
//Importamos la conexion bd
import db from '../config/db.js';
//Importamos nuestras rutas
import routesEmp from '../routes/routesEmp.js';
import routesTareas from '../routes/routesTareas.js';
import routesTutorias from '../routes/routesTutorias.js';



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/empleados', routesEmp);
app.use('/api/tareas', routesTareas);
app.use('/api/tutorias', routesTutorias);

try {
    await db.authenticate();
    console.log("Estamos conectados exitosamente a la base de datos");

} catch (error) {
    console.log(`Error de conexión a la base de datos: ${error}`);
}


app.get('/', (req, res) =>{
    res.send("Estamos conectados desde la web")
});

app.listen(port, () =>{
    console.log("El servidor esta conectado al puerto: ", port);
});