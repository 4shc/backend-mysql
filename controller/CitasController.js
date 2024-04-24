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

// Sesión 29
// Función para mostrar todas las citas
export const getAllCitas = async (req, res) =>{
  try {
    const citas = await Citas.findAll();
    return res.json(citas);
    
  } catch (error) {
    return res.json ({msg: error.message});
  }
}

// Función para mostrar una cita por ID
export const getCita = async (req, res) => {
  try {
    let citas = await Citas.findAll({where:{id:req.params.id}});
    if (!citas[0]){
      return res.json({msg: "No se encontró la cita con ese ID"});
    }
    await res.json(citas[0]);
  } catch (error) {
      return res.json({msg: error.message})
  }
}

// Función para modificar una cita
export const modificarCita = async (req, res) =>{
  try {
    let citas = await Citas.update(req.body, { where:{id: req.params.id}})
    if(!citas[0]){
      return res.json({msg: "El ID de cita no es valido"})
    }
    await res.json({msg: "Se modifico una cita"})
    
  } catch (error) {
    return res.json({msg: error.message})
  }
}

// Función para eliminar una cita
export const eliminarCita = async (req, res) => {
  try {
    let citas = await Citas.findAll({where:{id: req.params.id}});
    if (!citas[0]){
      res.json({msg: "No se encuentra la cita"});
    }
    await citas[0].destroy();
    res.json({msg: "Se elimino una cita"})
  } catch (error) {
    res.json({msg: error.message})
  }
}