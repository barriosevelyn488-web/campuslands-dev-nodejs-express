const { Router } = require('express');
const {
  principal,
  obtenerCampeones,
  obtenerCampeonPorId,
  crearCampeon
} = require('../controllers/campeones.controller');

const router = Router();

router.get('/', principal);
router.get('/campeones', obtenerCampeones);
router.get('/campeones/:id', obtenerCampeonPorId);
router.post('/campeones', crearCampeon);

module.exports = router;
