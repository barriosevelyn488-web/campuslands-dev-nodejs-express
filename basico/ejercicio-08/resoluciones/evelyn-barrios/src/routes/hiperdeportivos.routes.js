import { Router } from 'express';
import {
  principal,
  infoConfig,
  obtenerHiperdeportivos,
  obtenerPorId
} from '../controllers/hiperdeportivos.controller.js';

const router = Router();

router.get('/', principal);
router.get('/config', infoConfig);
router.get('/vehiculos', obtenerHiperdeportivos);
router.get('/vehiculos/:id', obtenerPorId);

export default router;
