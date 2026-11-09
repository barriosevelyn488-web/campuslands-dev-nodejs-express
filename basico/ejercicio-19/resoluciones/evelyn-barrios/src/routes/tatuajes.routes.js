import { Router } from 'express';
import {
  principal,
  listarConQuery,
  consultarPorParams
} from '../controllers/tatuajes.controller.js';

const router = Router();

router.get('/', principal);
router.get('/buscar', listarConQuery);
router.get('/estilos/:estilo/tatuajes/:id', consultarPorParams);

export default router;
