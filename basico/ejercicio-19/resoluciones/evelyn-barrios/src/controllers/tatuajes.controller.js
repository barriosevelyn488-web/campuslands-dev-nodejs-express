import {
  filtrarTatuajes,
  buscarPorEstiloYId
} from '../services/tatuajes.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'req.params y req.query'
  });
}

export function listarConQuery(req, res) {
  const { estilo, zonaCuerpo, precioMax, color } = req.query;
  const data = filtrarTatuajes({ estilo, zonaCuerpo, precioMax, soloColor: color });

  res.status(200).json({
    ok: true,
    fuente: 'req.query',
    parametrosRecibidos: req.query,
    totalResultados: data.length,
    data
  });
}

export function consultarPorParams(req, res) {
  const { estilo, id } = req.params;
  const numId = Number(id);

  if (Number.isNaN(numId) || numId <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El parametro de ruta ":id" debe ser un numero positivo'
    });
  }

  const tatuaje = buscarPorEstiloYId(estilo, numId);

  if (!tatuaje) {
    return res.status(404).json({
      ok: false,
      message: `Tatuaje de estilo "${estilo}" con id ${id} no encontrado en catalogo`
    });
  }

  res.status(200).json({
    ok: true,
    fuente: 'req.params',
    parametrosDeRuta: req.params,
    data: tatuaje
  });
}
