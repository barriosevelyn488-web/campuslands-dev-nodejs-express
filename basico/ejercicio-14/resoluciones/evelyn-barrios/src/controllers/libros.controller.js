import {
  listarLibros,
  buscarLibroPorId,
  registrarLibro
} from '../services/libros.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'validacion de entrada'
  });
}

export function listar(req, res) {
  res.status(200).json({ ok: true, data: listarLibros() });
}

export function consultarPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero positivo'
    });
  }

  const libro = buscarLibroPorId(id);

  if (!libro) {
    return res.status(404).json({
      ok: false,
      message: `Libro con id ${id} no encontrado en la biblioteca`
    });
  }

  res.status(200).json({ ok: true, data: libro });
}

export function crear(req, res) {
  const nuevo = registrarLibro(req.body);
  res.status(201).json({
    ok: true,
    message: 'Libro validado y registrado exitosamente',
    data: nuevo
  });
}
