# Básico 11 - Promesas Básicas

Resolución del ejercicio 11 implementando promesas nativas mediante la clase constructora `new Promise`, encadenamiento con `.then()` y manejo de errores con `.catch()`, aplicado a la gestión y precarga de pistas musicales.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-11
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "promesas basicas"
}
```

### Listar canciones del catálogo
```bash
curl http://localhost:3000/basico/ejercicio-11/canciones
```

### Consultar canción por ID
```bash
curl http://localhost:3000/basico/ejercicio-11/canciones/1
```

### Cargar buffer de audio (simulación asíncrona)
```bash
curl http://localhost:3000/basico/ejercicio-11/canciones/1/buffer
```

### Validaciones y errores (400 / 404)
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-11/canciones/abc

# Cancion no encontrada (404)
curl http://localhost:3000/basico/ejercicio-11/canciones/99
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── musica.controller.js
├── routes/
│   └── musica.routes.js
└── services/
    └── musica.service.js
```
