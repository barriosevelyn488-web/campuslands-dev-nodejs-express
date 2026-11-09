import express from 'express';
import scifiRoutes from './routes/scifi.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-13', scifiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Sector galactico no encontrado' });
});

// Middleware global para manejo centralizado de errores
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Fallo critico en el sistema de la nave';

  res.status(statusCode).json({
    ok: false,
    error: {
      mensaje: message,
      codigoEstado: statusCode,
      detalles: err.details || null
    }
  });
});

export default app;
