import { Router } from 'express';
import {
  principal,
  listar,
  obtenerManual
} from '../controllers/motos.controller.js';

const router = Router();

router.get('/', principal);
router.get('/manuales', listar);
router.get('/manual', obtenerManual);

export default router;
