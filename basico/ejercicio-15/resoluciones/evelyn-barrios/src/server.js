import http from 'node:http';
import app from './app.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`[COMIDA-URBANA-NATIVE-HTTP] Servidor iniciado en http://localhost:${PORT}`);
  console.log(`[COMIDA-URBANA-NATIVE-HTTP] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-15`);
});
