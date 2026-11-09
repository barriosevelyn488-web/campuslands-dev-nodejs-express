import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  crear
} from '../controllers/terror.controller.js';

const router = Router();

router.get('/', principal);
router.get('/peliculas', listar);
router.get('/peliculas/:id', consultarPorId);
router.post('/peliculas', crear);

export default router;
