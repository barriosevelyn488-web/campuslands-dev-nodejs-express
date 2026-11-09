import { Router } from 'express';
import {
  principal,
  listar,
  consultarPorId,
  crear
} from '../controllers/sneakers.controller.js';

const router = Router();

router.get('/', principal);
router.get('/sneakers', listar);
router.get('/sneakers/:id', consultarPorId);
router.post('/sneakers', crear);

export default router;
