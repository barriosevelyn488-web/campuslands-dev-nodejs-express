const destinosTuristicos = [
  { id: 1, ciudad: 'Kioto', pais: 'Japón', categoria: 'Cultural', dias: 7, precioUSD: 1450, disponible: true },
  { id: 2, ciudad: 'Cusco', pais: 'Perú', categoria: 'Aventura', dias: 5, precioUSD: 850, disponible: true },
  { id: 3, ciudad: 'Roma', pais: 'Italia', categoria: 'Historico', dias: 6, precioUSD: 1200, disponible: true },
  { id: 4, ciudad: 'Bali', pais: 'Indonesia', categoria: 'Playa', dias: 10, precioUSD: 1600, disponible: false },
  { id: 5, ciudad: 'Reikiavik', pais: 'Islandia', categoria: 'Naturaleza', dias: 8, precioUSD: 1950, disponible: true }
];

export function obtenerTodosLosDestinos({ categoria, pais, precioMax }) {
  let resultado = [...destinosTuristicos];

  if (categoria) {
    resultado = resultado.filter((d) => d.categoria.toLowerCase() === categoria.toLowerCase());
  }

  if (pais) {
    resultado = resultado.filter((d) => d.pais.toLowerCase() === pais.toLowerCase());
  }

  if (precioMax) {
    const max = Number(precioMax);
    if (!Number.isNaN(max)) {
      resultado = resultado.filter((d) => d.precioUSD <= max);
    }
  }

  return resultado;
}

export function buscarDestinoPorId(id) {
  return destinosTuristicos.find((d) => d.id === id);
}

export function listarCategoriasUnicas() {
  return [...new Set(destinosTuristicos.map((d) => d.categoria))];
}

export function obtenerDestinosDestacados() {
  return destinosTuristicos.filter((d) => d.disponible && d.precioUSD < 1500);
}
