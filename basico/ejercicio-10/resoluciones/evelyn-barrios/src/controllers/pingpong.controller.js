import {
  obtenerJugadoresAsync,
  buscarJugadorAsync,
  simularPartidoAsync
} from '../services/pingpong.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'funciones asincronas'
  });
}

export async function listar(req, res, next) {
  try {
    const lista = await obtenerJugadoresAsync();
    res.status(200).json({ ok: true, data: lista });
  } catch (error) {
    next(error);
  }
}

export async function consultarPorId(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || id <= 0) {
      return res.status(400).json({
        ok: false,
        message: 'El id debe ser un numero positivo'
      });
    }

    const jugador = await buscarJugadorAsync(id);

    if (!jugador) {
      return res.status(404).json({
        ok: false,
        message: `Jugador con id ${id} no encontrado`
      });
    }

    res.status(200).json({ ok: true, data: jugador });
  } catch (error) {
    next(error);
  }
}

export async function simular(req, res, next) {
  try {
    const { jugador1Id, jugador2Id } = req.body || {};

    if (!jugador1Id || !jugador2Id) {
      return res.status(400).json({
        ok: false,
        message: 'Debe enviar los campos "jugador1Id" y "jugador2Id"'
      });
    }

    const resultado = await simularPartidoAsync(Number(jugador1Id), Number(jugador2Id));
    res.status(200).json({
      ok: true,
      message: 'Partido simulado de forma asincrona exitosamente',
      data: resultado
    });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}
