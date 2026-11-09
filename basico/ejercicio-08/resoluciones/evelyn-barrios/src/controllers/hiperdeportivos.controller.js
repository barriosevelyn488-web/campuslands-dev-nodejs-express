import {
  listarVehiculos,
  buscarPorId,
  obtenerConfiguracionSegura
} from '../services/hiperdeportivos.service.js';

export function principal(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'variables de entorno'
  });
}

export function infoConfig(req, res) {
  res.status(200).json({
    ok: true,
    data: obtenerConfiguracionSegura()
  });
}

export function obtenerHiperdeportivos(req, res) {
  res.status(200).json({
    ok: true,
    data: listarVehiculos()
  });
}

export function obtenerPorId(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({
      ok: false,
      message: 'El id debe ser un numero positivo'
    });
  }

  const vehiculo = buscarPorId(id);

  if (!vehiculo) {
    return res.status(404).json({
      ok: false,
      message: `Hiperdeportivo con id ${id} no encontrado`
    });
  }

  res.status(200).json({ ok: true, data: vehiculo });
}
