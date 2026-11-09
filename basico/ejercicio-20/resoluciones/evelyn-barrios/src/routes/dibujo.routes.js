import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  crear
} from '../controllers/dibujo.controller.js';

const router = Router();

router.get('/', principal);
router.get('/proyectos', listar);
router.get('/proyectos/:id', consultarPorId);
router.post('/proyectos', crear);

export default router;
