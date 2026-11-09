import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[KICKBOXING-API] Servidor activo en http://localhost:${PORT}`);
  console.log(`[KICKBOXING-API] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-09`);
});
