import { Router } from 'express';
import {
  principal,
  listarDestinos,
  consultarPorId,
  listarCategorias,
  destacados
} from '../controllers/turismo.controller.js';

const router = Router();

router.get('/', principal);
router.get('/destinos', listarDestinos);
router.get('/destinos/categorias', listarCategorias);
router.get('/destinos/destacados', destacados);
router.get('/destinos/:id', consultarPorId);

export default router;
