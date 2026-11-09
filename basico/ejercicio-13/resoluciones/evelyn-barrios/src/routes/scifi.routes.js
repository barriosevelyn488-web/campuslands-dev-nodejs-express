import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  hiperimpulsor
} from '../controllers/scifi.controller.js';

const router = Router();

router.get('/', principal);
router.get('/naves', listar);
router.get('/naves/:id', consultarPorId);
router.post('/naves/:id/hiperimpulsor', hiperimpulsor);

export default router;
