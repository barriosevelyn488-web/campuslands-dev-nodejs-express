const catalogoTatuajes = [
  { id: 1, diseno: 'Dragon Oriental', estilo: 'oriental', zonaCuerpo: 'espalda', precio: 350, horas: 5, color: true },
  { id: 2, diseno: 'Rosa con Daga', estilo: 'tradicional', zonaCuerpo: 'antebrazo', precio: 120, horas: 2, color: true },
  { id: 3, diseno: 'Retrato Hiperrealista', estilo: 'realismo', zonaCuerpo: 'brazo', precio: 400, horas: 6, color: false },
  { id: 4, diseno: 'Geometria Sagrada', estilo: 'blackwork', zonaCuerpo: 'antebrazo', precio: 180, horas: 3, color: false },
  { id: 5, diseno: 'Mascara Hannya', estilo: 'oriental', zonaCuerpo: 'pierna', precio: 280, horas: 4, color: true }
];

export function buscarPorEstiloYId(estilo, id) {
  return catalogoTatuajes.find(
    (t) => t.estilo.toLowerCase() === estilo.toLowerCase() && t.id === id
  );
}

export function filtrarTatuajes({ estilo, zonaCuerpo, precioMax, soloColor }) {
  let resultado = [...catalogoTatuajes];

  if (estilo) {
    resultado = resultado.filter((t) => t.estilo.toLowerCase() === estilo.toLowerCase());
  }

  if (zonaCuerpo) {
    resultado = resultado.filter((t) => t.zonaCuerpo.toLowerCase() === zonaCuerpo.toLowerCase());
  }

  if (precioMax) {
    const max = Number(precioMax);
    if (!Number.isNaN(max)) {
      resultado = resultado.filter((t) => t.precio <= max);
    }
  }

  if (soloColor !== undefined) {
    const esColor = soloColor === 'true' || soloColor === '1';
    resultado = resultado.filter((t) => t.color === esColor);
  }

  return resultado;
}
