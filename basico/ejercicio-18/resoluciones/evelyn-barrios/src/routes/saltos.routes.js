import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  crear
} from '../controllers/saltos.controller.js';

const router = Router();

router.get('/', principal);
router.get('/saltos', listar);
router.get('/saltos/:id', consultarPorId);
router.post('/saltos', crear);

export default router;
