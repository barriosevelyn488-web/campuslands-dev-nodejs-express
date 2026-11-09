import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[PINGPONG-ASYNC] Servidor activo en http://localhost:${PORT}`);
  console.log(`[PINGPONG-ASYNC] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-10`);
});
