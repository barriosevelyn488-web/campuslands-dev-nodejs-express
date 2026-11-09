const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const jugadoresPingPong = [
  { id: 1, nombre: 'Ma Long', pais: 'China', rankingMundial: 1, estilo: 'Atacante diestro' },
  { id: 2, nombre: 'Fan Zhendong', pais: 'China', rankingMundial: 2, estilo: 'Topspin potente' },
  { id: 3, nombre: 'Hugo Calderano', pais: 'Brasil', rankingMundial: 6, estilo: 'Ofensivo agresivo' },
  { id: 4, nombre: 'Felix Lebrun', pais: 'Francia', rankingMundial: 5, estilo: 'Presa lapicero' }
];

export async function obtenerJugadoresAsync() {
  // Simula consulta asincrona a base de datos o servicio externo
  await delay(50);
  return [...jugadoresPingPong];
}

export async function buscarJugadorAsync(id) {
  await delay(30);
  return jugadoresPingPong.find((j) => j.id === id);
}

export async function simularPartidoAsync(jugador1Id, jugador2Id) {
  await delay(100);
  const j1 = jugadoresPingPong.find((j) => j.id === jugador1Id);
  const j2 = jugadoresPingPong.find((j) => j.id === jugador2Id);

  if (!j1 || !j2) {
    throw new Error('Uno o ambos jugadores no existen');
  }

  if (j1.id === j2.id) {
    throw new Error('No se puede simular un partido con el mismo jugador');
  }

  // Simulacion de sets al mejor de 5 (gana el primero que alcance 3)
  const sets = [];
  let setsJ1 = 0;
  let setsJ2 = 0;

  while (setsJ1 < 3 && setsJ2 < 3) {
    const pts1 = Math.floor(Math.random() * 5) + 8;
    const pts2 = Math.floor(Math.random() * 5) + 8;
    const ganadorSet = pts1 > pts2 ? 1 : 2;
    if (ganadorSet === 1) setsJ1++;
    else setsJ2++;
    sets.push({ set: sets.length + 1, marcador: `${pts1}-${pts2}` });
  }

  return {
    jugador1: j1.nombre,
    jugador2: j2.nombre,
    marcadorSets: `${setsJ1} - ${setsJ2}`,
    ganador: setsJ1 > setsJ2 ? j1.nombre : j2.nombre,
    detalleSets: sets
  };
}
