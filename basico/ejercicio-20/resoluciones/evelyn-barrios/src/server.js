import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[DIBUJO-EXPRESS-JSON] Servidor activo en http://localhost:${PORT}`);
  console.log(`[DIBUJO-EXPRESS-JSON] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-20`);
});
