import { enrutar } from './routes/comida.routes.js';

export function app(req, res) {
  enrutar(req, res).catch((err) => {
    console.error('[HTTP ERROR]', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, message: 'Error interno del servidor nativo' }));
  });
}

export default app;
