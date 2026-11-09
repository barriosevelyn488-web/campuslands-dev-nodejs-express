import express from 'express';
import pingpongRoutes from './routes/pingpong.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-10', pingpongRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error('[PINGPONG ERROR]', err);
  res.status(500).json({ ok: false, message: 'Error interno en servicio asincrono' });
});

export default app;
