// Importamos la conexión a la BD
import BD from "../config/db.js";
import { DataTypes } from "sequelize";

const Usuarios = BD.define('usuarios', {

  nombre_user : 
  {
    type: DataTypes.STRING, 
    allowNull:false
  },

  edad : 
  {
    type: DataTypes.STRING, 
    allowNull:false
  },
  
  doctor: 
  {
    type: DataTypes.STRING, 
    allowNull:false
  }
});

export default Usuarios;


