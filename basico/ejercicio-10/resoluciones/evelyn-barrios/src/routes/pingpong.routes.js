import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  simular
} from '../controllers/pingpong.controller.js';

const router = Router();

router.get('/', principal);
router.get('/jugadores', listar);
router.get('/jugadores/:id', consultarPorId);
router.post('/simular-partido', simular);

export default router;
