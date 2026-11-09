import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[FUTBOL-FS] Servidor iniciado en http://localhost:${PORT}`);
  console.log(`[FUTBOL-FS] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-05`);
});
