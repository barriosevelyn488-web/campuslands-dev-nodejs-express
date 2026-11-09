import {
  obtenerTodosLosDestinos,
  buscarDestinoPorId,
  listarCategoriasUnicas,
  obtenerDestinosDestacados
} from '../services/turismo.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'rutas GET'
  });
}

export function listarDestinos(req, res) {
  const { categoria, pais, precioMax } = req.query;
  const destinos = obtenerTodosLosDestinos({ categoria, pais, precioMax });
  res.status(200).json({
    ok: true,
    total: destinos.length,
    filtrosAplicados: { categoria: categoria || null, pais: pais || null, precioMax: precioMax || null },
    data: destinos
  });
}

export function consultarPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id de destino debe ser un numero positivo'
    });
  }

  const destino = buscarDestinoPorId(id);

  if (!destino) {
    return res.status(404).json({
      ok: false,
      message: `Destino turistico con id ${id} no encontrado`
    });
  }

  res.status(200).json({ ok: true, data: destino });
}

export function listarCategorias(req, res) {
  res.status(200).json({
    ok: true,
    data: listarCategoriasUnicas()
  });
}

export function destacados(req, res) {
  res.status(200).json({
    ok: true,
    data: obtenerDestinosDestacados()
  });
}
