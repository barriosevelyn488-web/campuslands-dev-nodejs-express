const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const peliculasTerror = [
  { id: 1, titulo: 'El Conjuro', director: 'James Wan', anio: 2013, nivelSusto: 'Alto', duracionMin: 112 },
  { id: 2, titulo: 'Hereditary', director: 'Ari Aster', anio: 2018, nivelSusto: 'Extremo', duracionMin: 127 },
  { id: 3, titulo: 'Halloween', director: 'John Carpenter', anio: 1978, nivelSusto: 'Moderado', duracionMin: 91 },
  { id: 4, titulo: 'It Follows', director: 'David Robert Mitchell', anio: 2014, nivelSusto: 'Alto', duracionMin: 100 }
];

export async function listarPeliculasAsync() {
  await delay(30);
  return [...peliculasTerror];
}

export async function buscarPeliculaPorIdAsync(id) {
  await delay(20);
  return peliculasTerror.find((p) => p.id === id);
}

export async function registrarPeliculaAsync({ titulo, director, anio, nivelSusto, duracionMin }) {
  await delay(40);
  const nueva = {
    id: peliculasTerror.length + 1,
    titulo: titulo.trim(),
    director: director.trim(),
    anio: Number(anio),
    nivelSusto: nivelSusto.trim(),
    duracionMin: Number(duracionMin)
  };
  peliculasTerror.push(nueva);
  return nueva;
}
