import {
  leerManualSeguro,
  listarManualesDisponibles
} from '../services/motos.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'path y rutas seguras'
  });
}

export async function listar(req, res, next) {
  try {
    const lista = await listarManualesDisponibles();
    res.status(200).json({ ok: true, data: lista });
  } catch (error) {
    next(error);
  }
}

export async function obtenerManual(req, res, next) {
  try {
    const { archivo } = req.query;

    if (!archivo || typeof archivo !== 'string' || !archivo.trim()) {
      return res.status(400).json({
        ok: false,
        message: 'Debe especificar el parametro de consulta "archivo"'
      });
    }

    const resultado = await leerManualSeguro(archivo.trim());
    res.status(200).json({ ok: true, data: resultado });
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({
        ok: false,
        message: error.message
      });
    }
    next(error);
  }
}
