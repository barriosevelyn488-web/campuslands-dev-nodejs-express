import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_MANUALES = path.resolve(__dirname, '../../manuales');

export async function leerManualSeguro(nombreArchivo) {
  // Resolver la ruta absoluta normalizada
  const rutaFinal = path.resolve(BASE_MANUALES, nombreArchivo);

  // Validar prevencion de Path Traversal: debe permanecer dentro de BASE_MANUALES
  if (!rutaFinal.startsWith(BASE_MANUALES)) {
    const error = new Error('Acceso no permitido: intento de escape de ruta');
    error.statusCode = 403;
    throw error;
  }

  try {
    const contenido = await fs.readFile(rutaFinal, 'utf-8');
    return {
      archivo: path.basename(rutaFinal),
      extension: path.extname(rutaFinal),
      contenido
    };
  } catch (err) {
    if (err.code === 'ENOENT') {
      const error = new Error(`Manual '${nombreArchivo}' no encontrado`);
      error.statusCode = 404;
      throw error;
    }
    throw err;
  }
}

export async function listarManualesDisponibles() {
  const archivos = await fs.readdir(BASE_MANUALES);
  return archivos.map((nombre) => ({
    nombre,
    extension: path.extname(nombre),
    rutaRelativa: path.join('manuales', nombre)
  }));
}
