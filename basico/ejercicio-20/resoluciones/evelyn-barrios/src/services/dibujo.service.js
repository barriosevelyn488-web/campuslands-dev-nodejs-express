const proyectosDibujo = [
  { id: 1, titulo: 'Concept Art Cyberpunk', capas: 14, resolucion: '3840x2160', formato: 'PNG', paleta: ['#0ff', '#f0f', '#111'] },
  { id: 2, titulo: 'Ilustracion Botanica', capas: 8, resolucion: '2048x2048', formato: 'SVG', paleta: ['#2d6a4f', '#d8f3dc'] }
];

export function listarProyectos() {
  return [...proyectosDibujo];
}

export function buscarPorId(id) {
  return proyectosDibujo.find((p) => p.id === id);
}

export function registrarProyecto({ titulo, capas, resolucion, formato, paleta = [] }) {
  const nuevo = {
    id: proyectosDibujo.length + 1,
    titulo: titulo.trim(),
    capas: Number(capas),
    resolucion: resolucion.trim(),
    formato: formato.trim().toUpperCase(),
    paleta: Array.isArray(paleta) ? paleta : []
  };
  proyectosDibujo.push(nuevo);
  return nuevo;
}
