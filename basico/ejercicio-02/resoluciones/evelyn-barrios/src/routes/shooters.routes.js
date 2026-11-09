import { Router } from 'express';
import {
  principal,
  obtenerScripts,
  obtenerJugadores,
  obtenerJugadorPorId,
  crearJugador
} from '../controllers/shooters.controller.js';

const router = Router();

router.get('/', principal);
router.get('/scripts', obtenerScripts);
router.get('/jugadores', obtenerJugadores);
router.get('/jugadores/:id', obtenerJugadorPorId);
router.post('/jugadores', crearJugador);

export default router;
