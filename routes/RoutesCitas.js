// Importamos express
import express from 'express';

// Importamos nuestro controlador
import {agregarCitas} from '../controller/CitasController.js';

const router = express.Router();
router.post('/', agregarCitas);

export default router;