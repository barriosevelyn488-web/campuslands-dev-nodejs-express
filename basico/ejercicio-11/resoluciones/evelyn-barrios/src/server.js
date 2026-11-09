import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[MUSICA-PROMISES] Servidor activo en http://localhost:${PORT}`);
  console.log(`[MUSICA-PROMISES] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-11`);
});
