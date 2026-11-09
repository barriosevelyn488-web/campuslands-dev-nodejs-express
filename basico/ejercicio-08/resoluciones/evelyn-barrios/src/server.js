import app from './app.js';
import { config } from './config/env.js';

app.listen(config.port, () => {
  console.log(`[HIPERDEPORTIVOS] Servidor en puerto ${config.port} | Entorno: ${config.nodeEnv}`);
  console.log(`[HIPERDEPORTIVOS] Endpoint principal: http://localhost:${config.port}/basico/ejercicio-08`);
});
