import {
  listarMenu,
  buscarPorId,
  agregarPlatillo
} from '../services/comida.service.js';

function responderJSON(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

export function principal(req, res) {
  responderJSON(res, 200, {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'mini API HTTP nativa'
  });
}

export function health(req, res) {
  responderJSON(res, 200, { ok: true, status: 'UP' });
}

export function listar(req, res) {
  responderJSON(res, 200, { ok: true, data: listarMenu() });
}

export function consultarPorId(req, res, id) {
  const platillo = buscarPorId(id);
  if (!platillo) {
    return responderJSON(res, 404, {
      ok: false,
      message: `Platillo con ID ${id} no encontrado en el menu`
    });
  }
  responderJSON(res, 200, { ok: true, data: platillo });
}

export function crear(req, res, body) {
  const { platillo, categoria, precio, picante } = body || {};

  if (!platillo || !categoria || precio === undefined) {
    return responderJSON(res, 400, {
      ok: false,
      message: 'Campos obligatorios: platillo, categoria y precio'
    });
  }

  const nuevo = agregarPlatillo({ platillo, categoria, precio, picante });
  responderJSON(res, 201, {
    ok: true,
    message: 'Platillo agregado al menu de comida urbana',
    data: nuevo
  });
}

export function noEncontrado(req, res) {
  responderJSON(res, 404, { ok: false, message: 'Ruta no encontrada' });
}
