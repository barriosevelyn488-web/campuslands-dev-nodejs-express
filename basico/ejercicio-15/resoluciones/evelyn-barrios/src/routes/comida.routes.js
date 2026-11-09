import {
  principal,
  health,
  listar,
  consultarPorId,
  crear,
  noEncontrado
} from '../controllers/comida.controller.js';

function leerBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export async function enrutar(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname.replace(/\/+$/, '') || '/';
  const method = req.method.toUpperCase();

  if (pathname === '/health' && method === 'GET') {
    return health(req, res);
  }

  if (pathname === '/basico/ejercicio-15' && method === 'GET') {
    return principal(req, res);
  }

  if (pathname === '/basico/ejercicio-15/menu' && method === 'GET') {
    return listar(req, res);
  }

  if (pathname === '/basico/ejercicio-15/menu' && method === 'POST') {
    const body = await leerBody(req);
    return crear(req, res, body);
  }

  const matchId = pathname.match(/^\/basico\/ejercicio-15\/menu\/(\d+)$/);
  if (matchId && method === 'GET') {
    const id = Number(matchId[1]);
    return consultarPorId(req, res, id);
  }

  return noEncontrado(req, res);
}
