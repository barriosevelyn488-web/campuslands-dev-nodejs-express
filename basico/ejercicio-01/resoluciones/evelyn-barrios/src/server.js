import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('====================================================');
  console.log('   EJERCICIO BASICO 01 - NODE RUNTIME Y CONSOLA     ');
  console.log('   Tematica: Videojuegos RPG                        ');
  console.log('====================================================');
  console.log(`Servidor activo en: http://localhost:${PORT}`);
  console.log(`Endpoint principal: http://localhost:${PORT}/basico/ejercicio-01`);
  console.log(`Runtime info:       http://localhost:${PORT}/basico/ejercicio-01/runtime`);
  console.log(`Heroes RPG:         http://localhost:${PORT}/basico/ejercicio-01/heroes`);
  console.log(`Health check:       http://localhost:${PORT}/health`);
  console.log('====================================================');
});
