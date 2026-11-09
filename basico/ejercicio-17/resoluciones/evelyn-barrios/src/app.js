import express from 'express';
import turismoRoutes from './routes/turismo.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-17', turismoRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Destino o recurso no encontrado' });
});

export default app;
