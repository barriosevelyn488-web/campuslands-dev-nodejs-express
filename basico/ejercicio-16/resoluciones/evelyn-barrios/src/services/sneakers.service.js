const catalogoSneakers = [
  { id: 1, modelo: 'Air Jordan 1 Retro High', marca: 'Nike', precio: 180, edicionLimitada: true, stock: 12 },
  { id: 2, modelo: 'Yeezy Boost 350 V2', marca: 'Adidas', precio: 230, edicionLimitada: true, stock: 8 },
  { id: 3, modelo: 'New Balance 550', marca: 'New Balance', precio: 120, edicionLimitada: false, stock: 25 },
  { id: 4, modelo: 'Chuck 70 Vintage Canvas', marca: 'Converse', precio: 90, edicionLimitada: false, stock: 40 }
];

export function listarSneakers() {
  return [...catalogoSneakers];
}

export function buscarPorId(id) {
  return catalogoSneakers.find((s) => s.id === id);
}

export function registrarSneaker({ modelo, marca, precio, edicionLimitada = false, stock = 1 }) {
  const nuevo = {
    id: catalogoSneakers.length + 1,
    modelo: modelo.trim(),
    marca: marca.trim(),
    precio: Number(precio),
    edicionLimitada: Boolean(edicionLimitada),
    stock: Number(stock)
  };
  catalogoSneakers.push(nuevo);
  return nuevo;
}
