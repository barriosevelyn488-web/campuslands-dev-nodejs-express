import app from './app.js';
import { parsearArgumentos } from './services/autos.service.js';

const flags = parsearArgumentos();
const PORT = Number(flags.port) || process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[AUTOS-LUJO] Servidor activo en http://localhost:${PORT}`);
  console.log(`[AUTOS-LUJO] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-07`);
  if (flags.port) {
    console.log(`[AUTOS-LUJO] Puerto configurado via process.argv (--port=${flags.port})`);
  }
});
