import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[SCIFI-ERRORS] Servidor activo en http://localhost:${PORT}`);
  console.log(`[SCIFI-ERRORS] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-13`);
});
