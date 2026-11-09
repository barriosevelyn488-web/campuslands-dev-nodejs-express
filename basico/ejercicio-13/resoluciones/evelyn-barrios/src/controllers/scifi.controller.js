import {
  listarNaves,
  buscarNavePorId,
  activarHiperimpulsor
} from '../services/scifi.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'manejo de errores'
  });
}

export function listar(req, res) {
  res.status(200).json({ ok: true, data: listarNaves() });
}

export function consultarPorId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const nave = buscarNavePorId(id);
    res.status(200).json({ ok: true, data: nave });
  } catch (error) {
    next(error);
  }
}

export function hiperimpulsor(req, res, next) {
  try {
    const id = Number(req.params.id);
    const { consumoEnergia } = req.body || {};
    const resultado = activarHiperimpulsor(id, consumoEnergia);
    res.status(200).json({ ok: true, data: resultado });
  } catch (error) {
    next(error);
  }
}
