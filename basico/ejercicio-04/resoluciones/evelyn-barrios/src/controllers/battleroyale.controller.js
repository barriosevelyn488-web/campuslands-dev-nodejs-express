import {
  obtenerEstadoPartida,
  listarEscuadrones,
  buscarEscuadronPorId,
  registrarEscuadron
} from '../services/battleroyale.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'modulos ES Modules'
  });
}

export function estado(req, res) {
  res.status(200).json({
    ok: true,
    data: obtenerEstadoPartida()
  });
}

export function obtenerEscuadrones(req, res) {
  res.status(200).json({
    ok: true,
    data: listarEscuadrones()
  });
}

export function obtenerEscuadronPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id de escuadron debe ser un numero valido'
    });
  }

  const escuadron = buscarEscuadronPorId(id);

  if (!escuadron) {
    return res.status(404).json({
      ok: false,
      message: `Escuadron con id ${id} no encontrado en la arena`
    });
  }

  res.status(200).json({
    ok: true,
    data: escuadron
  });
}

export function crearEscuadron(req, res) {
  const { nombre, bajas, estado, integrantes } = req.body || {};

  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    return res.status(400).json({
      ok: false,
      message: 'El nombre del escuadron es obligatorio'
    });
  }

  const nuevo = registrarEscuadron({ nombre, bajas, estado, integrantes });
  res.status(201).json({
    ok: true,
    message: 'Escuadron registrado en la partida',
    data: nuevo
  });
}
