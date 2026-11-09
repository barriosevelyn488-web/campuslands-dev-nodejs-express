# Básico 05 - fs para Leer Archivos

Resolución del ejercicio 05 utilizando el módulo nativo `node:fs/promises` para la lectura asíncrona de archivos locales en formato JSON, integrando la temática de fútbol y fútbol sala.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-05
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "fs para leer archivos"
}
```

### Consultar archivo completo del torneo
Lee de manera asíncrona el archivo `data/torneo.json`:
```bash
curl http://localhost:3000/basico/ejercicio-05/torneo
```

### Listar equipos
```bash
curl http://localhost:3000/basico/ejercicio-05/equipos
```

### Consultar equipo por ID
```bash
curl http://localhost:3000/basico/ejercicio-05/equipos/1
```

### Tabla de goleadores
```bash
curl http://localhost:3000/basico/ejercicio-05/goleadores
```

### Validaciones de error
```bash
# ID no numerico (400)
curl http://localhost:3000/basico/ejercicio-05/equipos/abc

# Equipo no encontrado (404)
curl http://localhost:3000/basico/ejercicio-05/equipos/99
```

## Estructura

```text
data/
└── torneo.json
src/
├── app.js
├── server.js
├── controllers/
│   └── futbol.controller.js
├── routes/
│   └── futbol.routes.js
└── services/
    └── futbol.service.js
```
