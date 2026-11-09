import { Router } from 'express';
import {
  getPrincipal,
  getRuntime,
  getHeroes,
  createHero,
} from '../controllers/rpg.controller.js';

const router = Router();

router.get('/', getPrincipal);
router.get('/runtime', getRuntime);
router.get('/heroes', getHeroes);
router.post('/heroes', createHero);

export default router;
