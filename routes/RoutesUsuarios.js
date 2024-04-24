// Importamos express
import express from 'express';

// Importamos nuestros controladores para nuestro nuevo mod.
import {agregarUser} from '../controller/UsuariosController.js';
import {getAllUser} from '../controller/UsuariosController.js';
import {getUser} from '../controller/UsuariosController.js';
import {modificarUser} from '../controller/UsuariosController.js';
import {eliminarUser} from '../controller/UsuariosController.js';

// Definimos las rutas para nuestro nuevo mod.
const router = express.Router();
router.post('/', agregarUser);
router.get('/', getAllUser);
router.get('/:id', getUser);
router.put('/:id', modificarUser);
router.delete('/:id', eliminarUser)

export default router;



