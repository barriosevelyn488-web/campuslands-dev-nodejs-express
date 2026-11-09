import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[MOTOS-PATH] Servidor iniciado en http://localhost:${PORT}`);
  console.log(`[MOTOS-PATH] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-06`);
});
