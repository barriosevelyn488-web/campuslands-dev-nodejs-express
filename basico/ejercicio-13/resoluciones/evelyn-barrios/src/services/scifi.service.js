import { AppError } from '../errors/app.error.js';

const navesEstelares = [
  { id: 1, nombre: 'USS Enterprise', clase: 'Exploracion', reactor: 'Antimateria', nivelEnergia: 88 },
  { id: 2, nombre: 'Millennium Falcon', clase: 'Carguero ligero', reactor: 'Hiperimpulsor', nivelEnergia: 65 },
  { id: 3, nombre: 'Nostromo', clase: 'Remolcador comercial', reactor: 'Fision', nivelEnergia: 40 }
];

export function listarNaves() {
  return [...navesEstelares];
}

export function buscarNavePorId(id) {
  if (Number.isNaN(id) || id <= 0) {
    throw new AppError('El identificador de la nave estelar debe ser un entero positivo', 400);
  }

  const nave = navesEstelares.find((n) => n.id === id);
  if (!nave) {
    throw new AppError(`Nave con ID ${id} no encontrada en los radares de la federacion`, 404);
  }

  return nave;
}

export function activarHiperimpulsor(id, consumoEnergia) {
  const nave = buscarNavePorId(id);
  const consumo = Number(consumoEnergia);

  if (Number.isNaN(consumo) || consumo <= 0) {
    throw new AppError('El consumo de energia requerido debe ser un valor numerico positivo', 400);
  }

  if (nave.nivelEnergia < consumo) {
    throw new AppError(
      `Fallo de energia critica: La nave ${nave.nombre} tiene ${nave.nivelEnergia}% y requiere ${consumo}% para el salto hiperespacial`,
      422,
      { energiaDisponible: nave.nivelEnergia, energiaRequerida: consumo }
    );
  }

  nave.nivelEnergia -= consumo;
  return {
    mensaje: `Salto hiperespacial ejecutado con exito por la nave ${nave.nombre}`,
    energiaRestante: nave.nivelEnergia
  };
}
