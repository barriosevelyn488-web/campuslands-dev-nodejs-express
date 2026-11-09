import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[EXPRESS-SNEAKERS] Servidor Express activo en http://localhost:${PORT}`);
  console.log(`[EXPRESS-SNEAKERS] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-16`);
});
