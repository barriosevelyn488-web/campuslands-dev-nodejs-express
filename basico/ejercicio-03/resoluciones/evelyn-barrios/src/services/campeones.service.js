const campeones = [
  { id: 1, nombre: 'Ahri', rol: 'Mid', carril: 'Central', dificultad: 'Media', winRate: 51.4 },
  { id: 2, nombre: 'Jinx', rol: 'ADC', carril: 'Inferior', dificultad: 'Baja', winRate: 52.1 },
  { id: 3, nombre: 'Thresh', rol: 'Soporte', carril: 'Inferior', dificultad: 'Alta', winRate: 49.8 },
  { id: 4, nombre: 'Lee Sin', rol: 'Jungla', carril: 'Jungla', dificultad: 'Alta', winRate: 48.9 }
];

function listarCampeones() {
  return campeones;
}

function buscarPorId(id) {
  return campeones.find((c) => c.id === id);
}

function registrarCampeon({ nombre, rol, carril, dificultad, winRate = 50.0 }) {
  const nuevo = {
    id: campeones.length + 1,
    nombre: nombre.trim(),
    rol: rol.trim(),
    carril: carril.trim(),
    dificultad: dificultad.trim(),
    winRate: Number(winRate)
  };
  campeones.push(nuevo);
  return nuevo;
}

module.exports = {
  listarCampeones,
  buscarPorId,
  registrarCampeon
};
