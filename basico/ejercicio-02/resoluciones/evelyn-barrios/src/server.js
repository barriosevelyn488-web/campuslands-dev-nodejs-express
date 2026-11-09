import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[INFO] Servidor shooter competitivo iniciado en http://localhost:${PORT}`);
  console.log(`[INFO] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-02`);
});
