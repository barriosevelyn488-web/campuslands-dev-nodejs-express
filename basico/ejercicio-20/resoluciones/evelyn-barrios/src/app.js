import express from 'express';
import dibujoRoutes from './routes/dibujo.routes.js';

const app = express();

// Middleware express.json para parsear cuerpos de peticiones JSON
app.use(express.json({ limit: '1mb' }));

// Middleware para capturar errores de sintaxis en JSON malformado
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      ok: false,
      message: 'JSON malformado recibido en la peticion'
    });
  }
  next(err);
});

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, status: 'UP' });
});

app.use('/basico/ejercicio-20', dibujoRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

export default app;
