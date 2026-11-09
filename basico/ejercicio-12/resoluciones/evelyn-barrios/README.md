# Básico 12 - Async Await

Resolución del ejercicio 12 gestionando operaciones asíncronas con sintaxis `async/await` estructurada en bloques `try...catch`, aplicada a una API sobre catálogo de películas de miedo.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-12
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "async await"
}
```

### Listar películas de terror
```bash
curl http://localhost:3000/basico/ejercicio-12/peliculas
```

### Consultar película por ID
```bash
curl http://localhost:3000/basico/ejercicio-12/peliculas/1
```

### Registrar nueva película
```bash
curl -X POST http://localhost:3000/basico/ejercicio-12/peliculas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Smile", "director": "Parker Finn", "anio": 2022, "nivelSusto": "Alto", "duracionMin": 115}'
```

### Validaciones de error
```bash
# ID invalido o inexistente
curl http://localhost:3000/basico/ejercicio-12/peliculas/abc
curl http://localhost:3000/basico/ejercicio-12/peliculas/99

# Falta campo obligatorio
curl -X POST http://localhost:3000/basico/ejercicio-12/peliculas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Sinister"}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── terror.controller.js
├── routes/
│   └── terror.routes.js
└── services/
    └── terror.service.js
```
