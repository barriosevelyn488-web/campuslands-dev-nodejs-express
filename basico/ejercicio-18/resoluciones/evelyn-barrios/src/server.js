import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[PARACAIDISMO-POST] Servidor activo en http://localhost:${PORT}`);
  console.log(`[PARACAIDISMO-POST] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-18`);
});
