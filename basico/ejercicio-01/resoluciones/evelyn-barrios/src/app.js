import express from 'express';
import rpgRoutes from './routes/rpg.routes.js';

const app = express();

app.use(express.json());

// Logger de consola para trazabilidad de peticiones HTTP
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[HTTP] ${timestamp} | Metodo: ${req.method} | Ruta: ${req.url}`);
  next();
});

// Endpoint de verificacion de estado
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

// Ruta del ejercicio basico 01
app.use('/basico/ejercicio-01', rpgRoutes);

// Manejo de ruta no encontrada (404)
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: 'Ruta no encontrada',
  });
});

// Manejador centralizado de errores (500)
app.use((err, req, res, next) => {
  console.error('[FATAL] Error no controlado:', err);
  res.status(500).json({
    ok: false,
    message: 'Error interno del servidor',
  });
});

export default app;
