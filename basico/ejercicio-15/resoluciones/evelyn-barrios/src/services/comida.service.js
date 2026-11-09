const menuComidaUrbana = [
  { id: 1, platillo: 'Tacos al Pastor', categoria: 'Tacos', precio: 3.5, picante: true },
  { id: 2, platillo: 'Hamburguesa Doble Smash', categoria: 'Hamburguesas', precio: 7.0, picante: false },
  { id: 3, platillo: 'Arepa Reina Pepiada', categoria: 'Arepas', precio: 5.5, picante: false },
  { id: 4, platillo: 'Hot Dog Callejero Especial', categoria: 'Hot Dogs', precio: 4.0, picante: true }
];

export function listarMenu() {
  return [...menuComidaUrbana];
}

export function buscarPorId(id) {
  return menuComidaUrbana.find((p) => p.id === id);
}

export function agregarPlatillo({ platillo, categoria, precio, picante = false }) {
  const nuevo = {
    id: menuComidaUrbana.length + 1,
    platillo: platillo.trim(),
    categoria: categoria.trim(),
    precio: Number(precio),
    picante: Boolean(picante)
  };
  menuComidaUrbana.push(nuevo);
  return nuevo;
}
