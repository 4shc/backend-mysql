// Importamos el modelo 
import Usuarios from '../model/Usuarios.js';

// Creamos los métodos CRUD

// Creamos una función para agregar usuarios
export const agregarUser = async (req, res) => {
  try {
    await Usuarios.create(req.body)
    res.json({msg: "Usuario creado con éxito 😎"});
    
  } catch (error) {
    res.json ({msg: error.message});
  }
}

// Sesión 29
// Función para mostrar todos lss usuarios
export const getAllUser = async (req, res) =>{
  try {
    const usuarios = await Usuarios.findAll();
    return res.json(usuarios);
    
  } catch (error) {
    return res.json ({msg: error.message});
  }
}

// Función para mostrar un usuario por ID
export const getUser = async (req, res) => {
  try {
    let user = await Usuarios.findAll({where:{id:req.params.id}});
    if (!user[0]){
      return res.json({msg: "No se encontró el usuario con ese ID"});
    }
    await res.json(user[0]);
  } catch (error) {
      return res.json({msg: error.message})
  }
}

// Función para modificar un usuario
export const modificarUser = async (req, res) =>{
  try {
    let user = await Usuarios.update(req.body, { where:{id: req.params.id}})
    if(!user[0]){
      return res.json({msg: "El ID de usuario no es valido"})
    }
    await res.json({msg: "Se modifico un usuario"})
    
  } catch (error) {
    return res.json({msg: error.message})
  }
}

// Función para eliminar un usuario
export const eliminarUser = async (req, res) => {
  try {
    let user = await Usuarios.findAll({where:{id: req.params.id}});
    if (!user[0]){
      res.json({msg: "No se encuentra el usuario para eliminar"});
    }
    await user[0].destroy();
    res.json({msg: "Se elimino un usuario"})
  } catch (error) {
    res.json({msg: error.message})
  }
}