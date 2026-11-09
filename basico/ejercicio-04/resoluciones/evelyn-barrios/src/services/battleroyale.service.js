const estadoPartida = {
  idPartida: 'BR-2026-MATCH-01',
  jugadoresIniciales: 100,
  jugadoresVivos: 24,
  faseTormenta: 3,
  zonaSegura: 'Picos Picados'
};

const escuadrones = [
  { id: 1, nombre: 'Alpha Squad', bajas: 12, estado: 'Vivo', integrantes: 4 },
  { id: 2, nombre: 'Shadow Wolves', bajas: 8, estado: 'Vivo', integrantes: 3 },
  { id: 3, nombre: 'Storm Chasers', bajas: 5, estado: 'Eliminado', integrantes: 0 }
];

export function obtenerEstadoPartida() {
  return estadoPartida;
}

export function listarEscuadrones() {
  return escuadrones;
}

export function buscarEscuadronPorId(id) {
  return escuadrones.find((e) => e.id === id);
}

export function registrarEscuadron({ nombre, bajas = 0, estado = 'Vivo', integrantes = 4 }) {
  const nuevo = {
    id: escuadrones.length + 1,
    nombre: nombre.trim(),
    bajas: Number(bajas),
    estado: estado.trim(),
    integrantes: Number(integrantes)
  };
  escuadrones.push(nuevo);
  return nuevo;
}
