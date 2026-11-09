import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, '../../data/luchadores.json');

export async function leerLuchadores() {
  const contenido = await fs.readFile(FILE_PATH, 'utf-8');
  return JSON.parse(contenido);
}

export async function guardarLuchadores(luchadores) {
  const data = JSON.stringify(luchadores, null, 2);
  await fs.writeFile(FILE_PATH, data, 'utf-8');
}

export async function buscarLuchadorPorId(id) {
  const luchadores = await leerLuchadores();
  return luchadores.find((l) => l.id === id);
}

export async function registrarLuchador({ nombre, categoria, victorias = 0, derrotas = 0, ko = 0 }) {
  const luchadores = await leerLuchadores();
  const nuevo = {
    id: luchadores.length > 0 ? Math.max(...luchadores.map((l) => l.id)) + 1 : 1,
    nombre: nombre.trim(),
    categoria: categoria.trim(),
    victorias: Number(victorias),
    derrotas: Number(derrotas),
    ko: Number(ko)
  };
  luchadores.push(nuevo);
  await guardarLuchadores(luchadores);
  return nuevo;
}
