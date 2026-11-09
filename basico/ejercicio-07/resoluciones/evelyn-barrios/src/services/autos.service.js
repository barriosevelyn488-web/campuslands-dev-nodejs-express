const inventarioAutos = [
  { id: 1, marca: 'Ferrari', modelo: 'SF90 Stradale', hp: 1000, precioUSD: 516000 },
  { id: 2, marca: 'Porsche', modelo: '911 GT3 RS', hp: 525, precioUSD: 241300 },
  { id: 3, marca: 'Lamborghini', modelo: 'Revuelto', hp: 1015, precioUSD: 608000 },
  { id: 4, marca: 'Aston Martin', modelo: 'DBS Superleggera', hp: 715, precioUSD: 330000 }
];

export function parsearArgumentos(argv = process.argv.slice(2)) {
  const flags = {};
  for (const arg of argv) {
    if (arg.startsWith('--')) {
      const sinGuiones = arg.slice(2);
      const [clave, ...valorPartes] = sinGuiones.split('=');
      const valor = valorPartes.join('=');
      flags[clave] = valor === '' ? true : valor;
    }
  }
  return flags;
}

export function obtenerAutos(filtroMarca) {
  if (filtroMarca) {
    return inventarioAutos.filter(
      (a) => a.marca.toLowerCase() === filtroMarca.toLowerCase()
    );
  }
  return inventarioAutos;
}

export function obtenerAutoPorId(id) {
  return inventarioAutos.find((a) => a.id === id);
}
