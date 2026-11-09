const biblioteca = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967, paginas: 471, isbn: '9780307474728' },
  { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', anio: 1605, paginas: 863, isbn: '9788424116286' },
  { id: 3, titulo: 'Ficciones', autor: 'Jorge Luis Borges', anio: 1944, paginas: 224, isbn: '9780307950925' }
];

export function listarLibros() {
  return [...biblioteca];
}

export function buscarLibroPorId(id) {
  return biblioteca.find((l) => l.id === id);
}

export function registrarLibro({ titulo, autor, anio, paginas, isbn }) {
  const nuevo = {
    id: biblioteca.length + 1,
    titulo: titulo.trim(),
    autor: autor.trim(),
    anio: Number(anio),
    paginas: Number(paginas),
    isbn: isbn.trim().replace(/[-\s]/g, '')
  };
  biblioteca.push(nuevo);
  return nuevo;
}
