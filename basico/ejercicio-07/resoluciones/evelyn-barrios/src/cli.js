#!/usr/bin/env node
import { parsearArgumentos, obtenerAutos } from './services/autos.service.js';

const flags = parsearArgumentos();

console.log('=== CLI CONCESIONARIO DE AUTOS DE LUJO ===');
console.log('Argumentos recibidos (process.argv):', process.argv.slice(2));

if (flags.help || flags.ayuda) {
  console.log('\nUso del comando CLI:');
  console.log('  node src/cli.js --listar');
  console.log('  node src/cli.js --marca=Ferrari');
  console.log('  node src/cli.js --ayuda');
  process.exit(0);
}

const marcaFiltro = typeof flags.marca === 'string' ? flags.marca : null;
const autos = obtenerAutos(marcaFiltro);

console.log(`\nResultados (${autos.length} encontrados):`);
console.table(autos);
