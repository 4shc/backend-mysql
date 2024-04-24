// Importamos express
import express from 'express';

// Importamos nuestro controlador
import {agregarCitas} from '../controller/CitasController.js';
import {getAllCitas} from '../controller/CitasController.js';
import {getCita} from '../controller/CitasController.js';
import {modificarCita} from '../controller/CitasController.js';
import {eliminarCita} from '../controller/CitasController.js';

const router = express.Router();
router.post('/', agregarCitas);
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;



