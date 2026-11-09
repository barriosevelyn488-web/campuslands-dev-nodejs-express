import {
  listarPeliculasAsync,
  buscarPeliculaPorIdAsync,
  registrarPeliculaAsync
} from '../services/terror.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'async await'
  });
}

export async function listar(req, res, next) {
  try {
    const peliculas = await listarPeliculasAsync();
    res.status(200).json({ ok: true, data: peliculas });
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
        message: 'El id de la pelicula debe ser un numero positivo'
      });
    }

    const pelicula = await buscarPeliculaPorIdAsync(id);

    if (!pelicula) {
      return res.status(404).json({
        ok: false,
        message: `Pelicula con id ${id} no encontrada`
      });
    }

    res.status(200).json({ ok: true, data: pelicula });
  } catch (error) {
    next(error);
  }
}

export async function crear(req, res, next) {
  try {
    const { titulo, director, anio, nivelSusto, duracionMin } = req.body || {};

    if (!titulo || !director || !anio || !nivelSusto) {
      return res.status(400).json({
        ok: false,
        message: 'Campos obligatorios: titulo, director, anio y nivelSusto'
      });
    }

    const nueva = await registrarPeliculaAsync({
      titulo,
      director,
      anio,
      nivelSusto,
      duracionMin: duracionMin || 90
    });

    res.status(201).json({
      ok: true,
      message: 'Pelicula de terror registrada exitosamente con async/await',
      data: nueva
    });
  } catch (error) {
    next(error);
  }
}
