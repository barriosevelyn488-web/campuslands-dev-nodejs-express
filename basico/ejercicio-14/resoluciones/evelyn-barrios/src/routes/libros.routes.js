import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  crear
} from '../controllers/libros.controller.js';
import { validarCreacionLibro } from '../middlewares/validator.js';

const router = Router();

router.get('/', principal);
router.get('/libros', listar);
router.get('/libros/:id', consultarPorId);
router.post('/libros', validarCreacionLibro, crear);

export default router;
