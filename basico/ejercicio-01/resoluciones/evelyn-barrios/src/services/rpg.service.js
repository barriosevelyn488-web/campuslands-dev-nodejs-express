const heroesDatabase = [
  { id: 1, nombre: 'Aria', clase: 'Maga', nivel: 5, vida: 120, mana: 200 },
  { id: 2, nombre: 'Garrick', clase: 'Guerrero', nivel: 7, vida: 250, mana: 40 },
  { id: 3, nombre: 'Lyra', clase: 'Arquera', nivel: 6, vida: 160, mana: 90 },
];

export function getRuntimeInfo() {
  const memory = process.memoryUsage();
  return {
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    pid: process.pid,
    uptimeSeconds: Math.floor(process.uptime()),
    memoryUsageMB: {
      rss: +(memory.rss / (1024 * 1024)).toFixed(2),
      heapTotal: +(memory.heapTotal / (1024 * 1024)).toFixed(2),
      heapUsed: +(memory.heapUsed / (1024 * 1024)).toFixed(2),
    },
  };
}

export function getAllHeroes() {
  return [...heroesDatabase];
}

export function findHeroByName(nombre) {
  return heroesDatabase.find(
    (hero) => hero.nombre.toLowerCase() === nombre.toLowerCase()
  );
}

export function createNewHero({ nombre, clase, nivel = 1 }) {
  const newHero = {
    id: heroesDatabase.length + 1,
    nombre: nombre.trim(),
    clase: clase.trim(),
    nivel: Number(nivel),
    vida: 100 + Number(nivel) * 15,
    mana: 50 + Number(nivel) * 10,
  };
  heroesDatabase.push(newHero);
  return newHero;
}
