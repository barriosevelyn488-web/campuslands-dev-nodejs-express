import {
  listarCancionesPromise,
  buscarCancionPorIdPromise,
  cargarPistaBufferPromise
} from '../services/musica.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'promesas basicas'
  });
}

export function listar(req, res) {
  listarCancionesPromise()
    .then((canciones) => {
      res.status(200).json({ ok: true, data: canciones });
    })
    .catch((err) => {
      res.status(500).json({ ok: false, message: err.message });
    });
}

export function consultarPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero positivo'
    });
  }

  buscarCancionPorIdPromise(id)
    .then((cancion) => {
      res.status(200).json({ ok: true, data: cancion });
    })
    .catch((err) => {
      res.status(404).json({ ok: false, message: err.message });
    });
}

export function cargarBuffer(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero valido'
    });
  }

  cargarPistaBufferPromise(id)
    .then((resultado) => {
      res.status(200).json({ ok: true, data: resultado });
    })
    .catch((err) => {
      res.status(404).json({ ok: false, message: err.message });
    });
}
