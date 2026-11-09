const catalogoMusica = [
  { id: 1, titulo: 'Bohemian Rhapsody', artista: 'Queen', duracionSegundos: 354, genero: 'Rock' },
  { id: 2, titulo: 'Billie Jean', artista: 'Michael Jackson', duracionSegundos: 294, genero: 'Pop' },
  { id: 3, titulo: 'Take Five', artista: 'Dave Brubeck', duracionSegundos: 324, genero: 'Jazz' },
  { id: 4, titulo: 'Master of Puppets', artista: 'Metallica', duracionSegundos: 515, genero: 'Metal' }
];

export function listarCancionesPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...catalogoMusica]);
    }, 40);
  });
}

export function buscarCancionPorIdPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cancion = catalogoMusica.find((c) => c.id === id);
      if (!cancion) {
        reject(new Error(`Cancion con ID ${id} no encontrada en el catalogo`));
      } else {
        resolve(cancion);
      }
    }, 40);
  });
}

export function cargarPistaBufferPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cancion = catalogoMusica.find((c) => c.id === id);
      if (!cancion) {
        return reject(new Error('Pista de audio inexistente'));
      }
      resolve({
        pistaId: cancion.id,
        titulo: cancion.titulo,
        estado: 'Buffer cargado',
        sampleRate: '44.1 kHz',
        tamanoEstimadoMB: +(cancion.duracionSegundos * 0.04).toFixed(2)
      });
    }, 60);
  });
}
