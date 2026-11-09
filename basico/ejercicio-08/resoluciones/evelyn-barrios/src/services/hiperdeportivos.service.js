import { config } from '../config/env.js';

const listaHiperdeportivos = [
  { id: 1, marca: 'Bugatti', modelo: 'Chiron Super Sport 300+', velocidadMaximaKmh: 490, hp: 1600 },
  { id: 2, marca: 'Koenigsegg', modelo: 'Jesko Absolut', velocidadMaximaKmh: 531, hp: 1600 },
  { id: 3, marca: 'Rimac', modelo: 'Nevera', velocidadMaximaKmh: 412, hp: 1914 },
  { id: 4, marca: 'Hennessey', modelo: 'Venom F5', velocidadMaximaKmh: 500, hp: 1817 }
];

export function listarVehiculos() {
  return listaHiperdeportivos.map((v) => {
    if (config.speedUnit === 'mph') {
      return {
        ...v,
        velocidadMaximaMph: Math.round(v.velocidadMaximaKmh * 0.621371)
      };
    }
    return v;
  });
}

export function buscarPorId(id) {
  return listaHiperdeportivos.find((v) => v.id === id);
}

export function obtenerConfiguracionSegura() {
  return {
    entorno: config.nodeEnv,
    puertoConfigurado: config.port,
    unidadVelocidad: config.speedUnit,
    apiKeyConfigurada: Boolean(config.apiKey)
  };
}
