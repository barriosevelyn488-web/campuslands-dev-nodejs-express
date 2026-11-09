const {
  listarCampeones,
  buscarPorId,
  registrarCampeon
} = require('../services/campeones.service');

function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'modulos CommonJS'
  });
}

function obtenerCampeones(req, res) {
  res.status(200).json({
    ok: true,
    data: listarCampeones()
  });
}

function obtenerCampeonPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero valido'
    });
  }

  const campeon = buscarPorId(id);

  if (!campeon) {
    return res.status(404).json({
      ok: false,
      message: `Campeon con id ${id} no encontrado`
    });
  }

  res.status(200).json({
    ok: true,
    data: campeon
  });
}

function crearCampeon(req, res) {
  const { nombre, rol, carril, dificultad, winRate } = req.body || {};

  if (!nombre || !rol || !carril || !dificultad) {
    return res.status(400).json({
      ok: false,
      message: 'Campos requeridos: nombre, rol, carril y dificultad'
    });
  }

  const nuevo = registrarCampeon({ nombre, rol, carril, dificultad, winRate });
  res.status(201).json({
    ok: true,
    message: 'Campeon registrado exitosamente en el meta',
    data: nuevo
  });
}

module.exports = {
  principal,
  obtenerCampeones,
  obtenerCampeonPorId,
  crearCampeon
};
