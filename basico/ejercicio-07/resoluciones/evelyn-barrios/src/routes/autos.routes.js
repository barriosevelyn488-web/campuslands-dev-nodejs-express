import { Router } from 'express';
import {
  principal,
  infoCli,
  listarAutos,
  consultarAutoPorId
} from '../controllers/autos.controller.js';

const router = Router();

router.get('/', principal);
router.get('/cli-info', infoCli);
router.get('/autos', listarAutos);
router.get('/autos/:id', consultarAutoPorId);

export default router;
