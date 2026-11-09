const registroSaltos = [
  { id: 1, paracaidista: 'Elena Gomez', modalidad: 'Tandem', altitudPies: 12000, instructor: 'Carlos Vega', seguroIncluido: true },
  { id: 2, paracaidista: 'Mateo Rivas', modalidad: 'Solo AFF', altitudPies: 14000, instructor: 'Sofia Bravo', seguroIncluido: true }
];

export function listarSaltos() {
  return [...registroSaltos];
}

export function buscarPorId(id) {
  return registroSaltos.find((s) => s.id === id);
}

export function registrarSalto({ paracaidista, modalidad, altitudPies, instructor, seguroIncluido = true }) {
  const nuevo = {
    id: registroSaltos.length + 1,
    paracaidista: paracaidista.trim(),
    modalidad: modalidad.trim(),
    altitudPies: Number(altitudPies),
    instructor: instructor.trim(),
    seguroIncluido: Boolean(seguroIncluido),
    fechaRegistro: new Date().toISOString()
  };
  registroSaltos.push(nuevo);
  return nuevo;
}
