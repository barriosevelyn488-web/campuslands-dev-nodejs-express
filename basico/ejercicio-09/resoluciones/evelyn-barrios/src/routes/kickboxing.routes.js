import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  crear
} from '../controllers/kickboxing.controller.js';

const router = Router();

router.get('/', principal);
router.get('/luchadores', listar);
router.get('/luchadores/:id', consultarPorId);
router.post('/luchadores', crear);

export default router;
