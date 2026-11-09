const scriptsDisponibles = [
  { script: 'start', comando: 'node src/server.js', descripcion: 'Inicia el servidor en modo normal' },
  { script: 'dev', comando: 'node --watch src/server.js', descripcion: 'Inicia con recarga automatica en cambios' },
  { script: 'info', comando: 'node -v', descripcion: 'Muestra la version actual de Node.js' },
  { script: 'status', comando: 'node -e "..."', descripcion: 'Comprueba el estado del servicio en consola' }
];

const jugadores = [
  { id: 1, gamertag: 'ViperX', rango: 'Diamante', rol: 'Controlador', armaFavorita: 'Phantom', kd: 1.35 },
  { id: 2, gamertag: 'ShadowSniper', rango: 'Inmortal', rol: 'Duelista', armaFavorita: 'Operator', kd: 1.62 },
  { id: 3, gamertag: 'Phoenix99', rango: 'Platino', rol: 'Iniciador', armaFavorita: 'Vandal', kd: 1.15 }
];

export function listarScripts() {
  return scriptsDisponibles;
}

export function listarJugadores() {
  return jugadores;
}

export function buscarPorId(id) {
  return jugadores.find((j) => j.id === id);
}

export function registrarJugador({ gamertag, rango, rol, armaFavorita, kd = 1.0 }) {
  const nuevo = {
    id: jugadores.length + 1,
    gamertag: gamertag.trim(),
    rango: rango.trim(),
    rol: rol.trim(),
    armaFavorita: armaFavorita.trim(),
    kd: Number(kd)
  };
  jugadores.push(nuevo);
  return nuevo;
}
