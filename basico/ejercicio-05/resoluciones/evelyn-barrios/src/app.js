import express from 'express';
import futbolRoutes from './routes/futbol.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-05', futbolRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error('[FS ERROR]', err);
  res.status(500).json({ ok: false, message: 'Error interno al leer archivo de datos' });
});

export default app;
