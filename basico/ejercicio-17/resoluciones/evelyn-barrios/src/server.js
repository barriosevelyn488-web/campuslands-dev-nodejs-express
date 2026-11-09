import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[TURISMO-GET] Servidor activo en http://localhost:${PORT}`);
  console.log(`[TURISMO-GET] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-17`);
});
