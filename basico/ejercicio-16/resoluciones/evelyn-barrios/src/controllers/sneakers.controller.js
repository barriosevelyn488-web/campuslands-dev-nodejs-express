import {
  listarSneakers,
  buscarPorId,
  registrarSneaker
} from '../services/sneakers.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'primer servidor Express'
  });
}

export function listar(req, res) {
  res.status(200).json({ ok: true, data: listarSneakers() });
}

export function consultarPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id del sneaker debe ser un numero entero positivo'
    });
  }

  const sneaker = buscarPorId(id);

  if (!sneaker) {
    return res.status(404).json({
      ok: false,
      message: `Sneaker con id ${id} no encontrado en inventario`
    });
  }

  res.status(200).json({ ok: true, data: sneaker });
}

export function crear(req, res) {
  const { modelo, marca, precio, edicionLimitada, stock } = req.body || {};

  if (!modelo || !marca || precio === undefined) {
    return res.status(400).json({
      ok: false,
      message: 'Campos requeridos: modelo, marca y precio'
    });
  }

  const nuevo = registrarSneaker({ modelo, marca, precio, edicionLimitada, stock });
  res.status(201).json({
    ok: true,
    message: 'Sneaker registrado exitosamente en el servidor Express',
    data: nuevo
  });
}
