export function validarCreacionLibro(req, res, next) {
  const { titulo, autor, anio, paginas, isbn } = req.body || {};
  const errores = [];

  if (!titulo || typeof titulo !== 'string' || titulo.trim().length < 2) {
    errores.push('El campo "titulo" es obligatorio y debe tener al menos 2 caracteres.');
  }

  if (!autor || typeof autor !== 'string' || autor.trim().length < 2) {
    errores.push('El campo "autor" es obligatorio y debe tener al menos 2 caracteres.');
  }

  const anioNum = Number(anio);
  const anioActual = new Date().getFullYear();
  if (!anio || Number.isNaN(anioNum) || anioNum < 1450 || anioNum > anioActual) {
    errores.push(`El campo "anio" debe ser un año valido entre 1450 y ${anioActual}.`);
  }

  const paginasNum = Number(paginas);
  if (!paginas || Number.isNaN(paginasNum) || paginasNum <= 0) {
    errores.push('El campo "paginas" debe ser un numero entero positivo mayor a 0.');
  }

  if (!isbn || typeof isbn !== 'string' || !/^(97(8|9))?\d{9}(\d|X)$/.test(isbn.replace(/[-\s]/g, ''))) {
    errores.push('El campo "isbn" debe ser un codigo ISBN valido de 10 o 13 digitos.');
  }

  if (errores.length > 0) {
    return res.status(400).json({
      ok: false,
      message: 'Fallo en la validacion de entrada de datos',
      errores
    });
  }

  next();
}
