# Básico 06 - Path y Rutas Seguras

Resolución del ejercicio 06 implementando el módulo nativo `node:path` para resolver rutas seguras de archivos y evitar vulnerabilidades de Path Traversal, aplicado a manuales técnicos de taller de motos.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

Servidor disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-06
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "path y rutas seguras"
}
```

### Listar manuales disponibles
```bash
curl http://localhost:3000/basico/ejercicio-06/manuales
```

### Leer manual técnico
```bash
curl "http://localhost:3000/basico/ejercicio-06/manual?archivo=frenos.txt"
curl "http://localhost:3000/basico/ejercicio-06/manual?archivo=motor.txt"
```

### Pruebas de seguridad y errores
```bash
# Intento de Path Traversal bloqueado (403 Forbidden)
curl "http://localhost:3000/basico/ejercicio-06/manual?archivo=../../package.json"

# Archivo inexistente (404 Not Found)
curl "http://localhost:3000/basico/ejercicio-06/manual?archivo=embrague.txt"

# Parametro faltante (400 Bad Request)
curl http://localhost:3000/basico/ejercicio-06/manual
```

## Estructura

```text
manuales/
├── frenos.txt
└── motor.txt
src/
├── app.js
├── server.js
├── controllers/
│   └── motos.controller.js
├── routes/
│   └── motos.routes.js
└── services/
    └── motos.service.js
```
