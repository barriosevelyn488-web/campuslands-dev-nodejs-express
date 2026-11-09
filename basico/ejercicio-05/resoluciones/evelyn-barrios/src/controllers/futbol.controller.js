import {
  leerDatosTorneo,
  obtenerEquipos,
  obtenerEquipoPorId,
  obtenerGoleadores
} from '../services/futbol.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'fs para leer archivos'
  });
}

export async function consultarTorneo(req, res, next) {
  try {
    const datos = await leerDatosTorneo();
    res.status(200).json({ ok: true, data: datos });
  } catch (error) {
    next(error);
  }
}

export async function listarEquipos(req, res, next) {
  try {
    const equipos = await obtenerEquipos();
    res.status(200).json({ ok: true, data: equipos });
  } catch (error) {
    next(error);
  }
}

export async function consultarEquipoPorId(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || id <= 0) {
      return res.status(400).json({
        ok: false,
        message: 'El id del equipo debe ser un numero entero positivo'
      });
    }

    const equipo = await obtenerEquipoPorId(id);

    if (!equipo) {
      return res.status(404).json({
        ok: false,
        message: `Equipo con id ${id} no encontrado en el torneo`
      });
    }

    res.status(200).json({ ok: true, data: equipo });
  } catch (error) {
    next(error);
  }
}

export async function listarGoleadores(req, res, next) {
  try {
    const goleadores = await obtenerGoleadores();
    res.status(200).json({ ok: true, data: goleadores });
  } catch (error) {
    next(error);
  }
}
