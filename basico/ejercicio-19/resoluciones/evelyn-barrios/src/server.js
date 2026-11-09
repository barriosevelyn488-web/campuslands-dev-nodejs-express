import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[TATUAJES-PARAMS-QUERY] Servidor activo en http://localhost:${PORT}`);
  console.log(`[TATUAJES-PARAMS-QUERY] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-19`);
});
