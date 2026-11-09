# Básico 19 - req.params y req.query

Resolución del ejercicio 19 profundizando en la extracción y validación de datos a través de parámetros de ruta (`req.params`) para identificar recursos específicos, y parámetros de búsqueda (`req.query`) para filtros opcionales en el catálogo de un estudio de tatuajes.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-19
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "req.params y req.query"
}
```

### Consultas con req.query (filtros opcionales)
```bash
# Todos los tatuajes
curl http://localhost:3000/basico/ejercicio-19/buscar

# Filtrar por estilo y zona del cuerpo
curl "http://localhost:3000/basico/ejercicio-19/buscar?estilo=oriental&zonaCuerpo=espalda"

# Filtrar por precio maximo y solo a color
curl "http://localhost:3000/basico/ejercicio-19/buscar?precioMax=200&color=true"
```

### Consultas con req.params (rutas dinámicas)
```bash
# Buscar tatuaje por estilo e ID especifico
curl http://localhost:3000/basico/ejercicio-19/estilos/oriental/tatuajes/1
curl http://localhost:3000/basico/ejercicio-19/estilos/tradicional/tatuajes/2
```

### Manejo de errores
```bash
# Parametro de ruta ID no numerico (400)
curl http://localhost:3000/basico/ejercicio-19/estilos/realismo/tatuajes/abc

# Tatuaje no encontrado en ese estilo (404)
curl http://localhost:3000/basico/ejercicio-19/estilos/blackwork/tatuajes/99
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── tatuajes.controller.js
├── routes/
│   └── tatuajes.routes.js
└── services/
    └── tatuajes.service.js
```
