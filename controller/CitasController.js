// Importamos el modelo 
import Citas from '../model/Citas.js';

// Creamos los métodos CRUD

// Creamos una función para agregar citas
export const agregarCitas = async (req, res) => {
  try {
    await Citas.create(req.body)
    res.json({msg: "Cita creada con éxito 😎"});
    
  } catch (error) {
    res.json ({msg: error.message});
  }
}