import { Router } from 'express';
import {
  principal,
  estado,
  obtenerEscuadrones,
  obtenerEscuadronPorId,
  crearEscuadron
} from '../controllers/battleroyale.controller.js';

const router = Router();

router.get('/', principal);
router.get('/estado', estado);
router.get('/escuadrones', obtenerEscuadrones);
router.get('/escuadrones/:id', obtenerEscuadronPorId);
router.post('/escuadrones', crearEscuadron);

export default router;
