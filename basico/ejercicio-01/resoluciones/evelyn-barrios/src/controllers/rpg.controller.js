import {
  getRuntimeInfo,
  getAllHeroes,
  findHeroByName,
  createNewHero,
} from '../services/rpg.service.js';

export function getPrincipal(req, res) {
  console.log('[LOG] Consulta al endpoint principal /basico/ejercicio-01');
  return res.status(200).json({
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'Node runtime y consola',
  });
}

export function getRuntime(req, res) {
  const info = getRuntimeInfo();
  console.log('[LOG] Consulta de informacion del runtime de Node.js:');
  console.table({
    'Version Node': info.nodeVersion,
    Plataforma: info.platform,
    Arquitectura: info.arch,
    PID: info.pid,
  });
  return res.status(200).json({
    ok: true,
    data: info,
  });
}

export function getHeroes(req, res) {
  const { nombre } = req.query;
  if (nombre) {
    const hero = findHeroByName(nombre);
    if (!hero) {
      console.warn(`[WARN] Heroe '${nombre}' no fue encontrado.`);
      return res.status(404).json({
        ok: false,
        message: `Heroe '${nombre}' no encontrado`,
      });
    }
    console.log(`[LOG] Heroe encontrado: ${hero.nombre}`);
    return res.status(200).json({ ok: true, data: hero });
  }

  const list = getAllHeroes();
  console.log(`[LOG] Se listaron ${list.length} heroes RPG.`);
  return res.status(200).json({ ok: true, data: list });
}

export function createHero(req, res) {
  const { nombre, clase, nivel } = req.body || {};

  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    console.error('[ERROR] Intento de creacion sin nombre valido.');
    return res.status(400).json({
      ok: false,
      message: 'El campo "nombre" es obligatorio y debe ser un texto valido.',
    });
  }

  if (!clase || typeof clase !== 'string' || !clase.trim()) {
    console.error('[ERROR] Intento de creacion sin clase valida.');
    return res.status(400).json({
      ok: false,
      message: 'El campo "clase" es obligatorio y debe ser un texto valido.',
    });
  }

  const hero = createNewHero({ nombre, clase, nivel });
  console.log(`[LOG] Nuevo heroe creado exitosamente: ${hero.nombre} (${hero.clase})`);
  return res.status(201).json({
    ok: true,
    message: 'Heroe creado exitosamente',
    data: hero,
  });
}
