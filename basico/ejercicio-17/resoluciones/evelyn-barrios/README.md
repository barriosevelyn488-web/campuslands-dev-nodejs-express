# Básico 17 - Rutas GET

Resolución del ejercicio 17 explorando el diseño de rutas de consulta HTTP (método GET), incluyendo parámetros de ruta (`req.params`) y parámetros de consulta (`req.query`) con filtros y ordenamientos sobre un catálogo de viajes y turismo.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-17
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "rutas GET"
}
```

### Listar todos los destinos
```bash
curl http://localhost:3000/basico/ejercicio-17/destinos
```

### Filtrar con query params (categoría y precio máximo)
```bash
curl "http://localhost:3000/basico/ejercicio-17/destinos?categoria=Aventura"
curl "http://localhost:3000/basico/ejercicio-17/destinos?precioMax=1300"
```

### Consultar destino específico por ID
```bash
curl http://localhost:3000/basico/ejercicio-17/destinos/1
```

### Listar categorías disponibles
```bash
curl http://localhost:3000/basico/ejercicio-17/destinos/categorias
```

### Destinos destacados
```bash
curl http://localhost:3000/basico/ejercicio-17/destinos/destacados
```

### Manejo de errores (400 / 404)
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-17/destinos/abc

# Destino inexistente (404)
curl http://localhost:3000/basico/ejercicio-17/destinos/99
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── turismo.controller.js
├── routes/
│   └── turismo.routes.js
└── services/
    └── turismo.service.js
```
