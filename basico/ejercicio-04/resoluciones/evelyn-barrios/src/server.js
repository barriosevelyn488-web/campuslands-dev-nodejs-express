import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[BATTLE-ROYALE] Servidor iniciado en http://localhost:${PORT}`);
  console.log(`[BATTLE-ROYALE] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-04`);
});
