import express from 'express';
import hiperdeportivosRoutes from './routes/hiperdeportivos.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-08', hiperdeportivosRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

export default app;
