import {
  listarProyectos,
  buscarPorId,
  registrarProyecto
} from '../services/dibujo.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'middleware express.json'
  });
}

export function listar(req, res) {
  res.status(200).json({ ok: true, data: listarProyectos() });
}

export function consultarPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id de proyecto debe ser un numero positivo'
    });
  }

  const proyecto = buscarPorId(id);

  if (!proyecto) {
    return res.status(404).json({
      ok: false,
      message: `Proyecto de dibujo con id ${id} no encontrado`
    });
  }

  res.status(200).json({ ok: true, data: proyecto });
}

export function crear(req, res) {
  // express.json parsea automaticamente el payload y lo expone en req.body
  const { titulo, capas, resolucion, formato, paleta } = req.body || {};

  if (!titulo || !capas || !resolucion || !formato) {
    return res.status(400).json({
      ok: false,
      message: 'Faltan campos obligatorios en el JSON: titulo, capas, resolucion, formato'
    });
  }

  const nuevo = registrarProyecto({ titulo, capas, resolucion, formato, paleta });
  res.status(201).json({
    ok: true,
    message: 'Proyecto de dibujo digital parseado por express.json y registrado',
    data: nuevo
  });
}
