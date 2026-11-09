import {
  obtenerAutos,
  obtenerAutoPorId,
  parsearArgumentos
} from '../services/autos.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'process.argv y CLI'
  });
}

export function infoCli(req, res) {
  const flags = parsearArgumentos();
  res.status(200).json({
    ok: true,
    data: {
      ejecutable: process.argv[0],
      archivoInicio: process.argv[1],
      argumentosCrudos: process.argv.slice(2),
      flagsParseadas: flags
    }
  });
}

export function listarAutos(req, res) {
  const { marca } = req.query;
  const resultados = obtenerAutos(marca);
  res.status(200).json({
    ok: true,
    data: resultados
  });
}

export function consultarAutoPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero entero valido'
    });
  }

  const auto = obtenerAutoPorId(id);

  if (!auto) {
    return res.status(404).json({
      ok: false,
      message: `Auto de lujo con id ${id} no encontrado`
    });
  }

  res.status(200).json({ ok: true, data: auto });
}
