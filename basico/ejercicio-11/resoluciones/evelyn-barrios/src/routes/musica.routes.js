import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  cargarBuffer
} from '../controllers/musica.controller.js';

const router = Router();

router.get('/', principal);
router.get('/canciones', listar);
router.get('/canciones/:id', consultarPorId);
router.get('/canciones/:id/buffer', cargarBuffer);

export default router;
