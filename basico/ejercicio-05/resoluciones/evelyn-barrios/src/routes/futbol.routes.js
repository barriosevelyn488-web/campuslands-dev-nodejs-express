import { Router } from 'express';
import {
  principal,
  consultarTorneo,
  listarEquipos,
  consultarEquipoPorId,
  listarGoleadores
} from '../controllers/futbol.controller.js';

const router = Router();

router.get('/', principal);
router.get('/torneo', consultarTorneo);
router.get('/equipos', listarEquipos);
router.get('/equipos/:id', consultarEquipoPorId);
router.get('/goleadores', listarGoleadores);

export default router;
