import express from 'express';
import terrorRoutes from './routes/terror.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-12', terrorRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error('[ASYNC ERROR]', err);
  res.status(500).json({ ok: false, message: 'Error interno en operacion asincrona' });
});

export default app;
