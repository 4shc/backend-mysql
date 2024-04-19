import express from "express";
import cors from "cors";
// Importamos la configuración de la BD
import BD from '../config/db.js';

// Importamos el archivo de las rutas 
import citasRoutes from '../routes/RoutesCitas.js';


// Definimos la variable para trabajar con Express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', citasRoutes );


// Autenticación BD
try {
  await BD.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// Muestra mensaje en el navegador
app.get('/', (req, res) => {
  res.send("Hola mundo");
})


// Configuración del puerto del servidor
app.listen(5000, () => {
  console.log("El servidor esta corriendo ⚡ en http://localhost:5000/")
});