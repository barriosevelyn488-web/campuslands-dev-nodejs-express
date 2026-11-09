const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[MOBA-API] Servidor activo en http://localhost:${PORT}`);
  console.log(`[MOBA-API] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-03`);
});
