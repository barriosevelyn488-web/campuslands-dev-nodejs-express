import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[LIBROS-VALIDACION] Servidor activo en http://localhost:${PORT}`);
  console.log(`[LIBROS-VALIDACION] Endpoint principal: http://localhost:${PORT}/basico/ejercicio-14`);
});
