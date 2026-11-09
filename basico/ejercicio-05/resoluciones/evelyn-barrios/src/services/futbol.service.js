import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../../data/torneo.json');

export async function leerDatosTorneo() {
  const contenido = await fs.readFile(DATA_PATH, 'utf-8');
  return JSON.parse(contenido);
}

export async function obtenerEquipos() {
  const datos = await leerDatosTorneo();
  return datos.equipos;
}

export async function obtenerEquipoPorId(id) {
  const equipos = await obtenerEquipos();
  return equipos.find((e) => e.id === id);
}

export async function obtenerGoleadores() {
  const datos = await leerDatosTorneo();
  return datos.goleadores;
}
