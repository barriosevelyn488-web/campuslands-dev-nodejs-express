import {
  listarScripts,
  listarJugadores,
  buscarPorId,
  registrarJugador
} from '../services/shooters.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'npm scripts y package.json'
  });
}

export function obtenerScripts(req, res) {
  res.status(200).json({
    ok: true,
    data: listarScripts()
  });
}

export function obtenerJugadores(req, res) {
  res.status(200).json({
    ok: true,
    data: listarJugadores()
  });
}

export function obtenerJugadorPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero entero positivo'
    });
  }

  const jugador = buscarPorId(id);

  if (!jugador) {
    return res.status(404).json({
      ok: false,
      message: `Jugador con id ${id} no encontrado`
    });
  }

  res.status(200).json({
    ok: true,
    data: jugador
  });
}

export function crearJugador(req, res) {
  const { gamertag, rango, rol, armaFavorita, kd } = req.body || {};

  if (!gamertag || !rango || !rol || !armaFavorita) {
    return res.status(400).json({
      ok: false,
      message: 'Campos obligatorios: gamertag, rango, rol y armaFavorita'
    });
  }

  const nuevo = registrarJugador({ gamertag, rango, rol, armaFavorita, kd });
  res.status(201).json({
    ok: true,
    message: 'Jugador registrado en la partida competitiva',
    data: nuevo
  });
}
