import {
  listarSaltos,
  buscarPorId,
  registrarSalto
} from '../services/saltos.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'rutas POST'
  });
}

export function listar(req, res) {
  res.status(200).json({ ok: true, data: listarSaltos() });
}

export function consultarPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id del salto debe ser un numero entero positivo'
    });
  }

  const salto = buscarPorId(id);

  if (!salto) {
    return res.status(404).json({
      ok: false,
      message: `Registro de salto con id ${id} no encontrado`
    });
  }

  res.status(200).json({ ok: true, data: salto });
}

export function crear(req, res) {
  const { paracaidista, modalidad, altitudPies, instructor, seguroIncluido } = req.body || {};

  if (!paracaidista || !modalidad || !altitudPies || !instructor) {
    return res.status(400).json({
      ok: false,
      message: 'Campos requeridos en el cuerpo POST: paracaidista, modalidad, altitudPies e instructor'
    });
  }

  if (Number(altitudPies) < 3000 || Number(altitudPies) > 18000) {
    return res.status(400).json({
      ok: false,
      message: 'La altitud en pies debe estar en el rango de seguridad (3000 - 18000 pies)'
    });
  }

  const nuevoSalto = registrarSalto({
    paracaidista,
    modalidad,
    altitudPies,
    instructor,
    seguroIncluido
  });

  res.status(201).json({
    ok: true,
    message: 'Salto en paracaidas programado y registrado con exito mediante ruta POST',
    data: nuevoSalto
  });
}
