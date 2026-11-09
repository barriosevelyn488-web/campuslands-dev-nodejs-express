import {
  leerLuchadores,
  buscarLuchadorPorId,
  registrarLuchador
} from '../services/kickboxing.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'JSON y persistencia simple'
  });
}

export async function listar(req, res, next) {
  try {
    const luchadores = await leerLuchadores();
    res.status(200).json({ ok: true, data: luchadores });
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

    const luchador = await buscarLuchadorPorId(id);

    if (!luchador) {
      return res.status(404).json({
        ok: false,
        message: `Luchador con id ${id} no encontrado`
      });
    }

    res.status(200).json({ ok: true, data: luchador });
  } catch (error) {
    next(error);
  }
}

export async function crear(req, res, next) {
  try {
    const { nombre, categoria, victorias, derrotas, ko } = req.body || {};

    if (!nombre || !categoria) {
      return res.status(400).json({
        ok: false,
        message: 'Campos requeridos: nombre y categoria'
      });
    }

    const nuevo = await registrarLuchador({ nombre, categoria, victorias, derrotas, ko });
    res.status(201).json({
      ok: true,
      message: 'Luchador registrado y persistido en archivo JSON',
      data: nuevo
    });
  } catch (error) {
    next(error);
  }
}
