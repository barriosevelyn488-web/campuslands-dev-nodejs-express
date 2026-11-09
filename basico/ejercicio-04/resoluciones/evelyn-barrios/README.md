# Básico 04 - Módulos ES Modules

Resolución del ejercicio 04 implementando el estándar nativo de módulos ECMAScript (`import` y `export`) en una API REST modular con tematica de Battle Royale.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

Servidor disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-04
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "modulos ES Modules"
}
```

### Consultar estado de la partida
```bash
curl http://localhost:3000/basico/ejercicio-04/estado
```

### Listar escuadrones activos
```bash
curl http://localhost:3000/basico/ejercicio-04/escuadrones
```

### Consultar escuadrón por ID
```bash
curl http://localhost:3000/basico/ejercicio-04/escuadrones/1
```

### Registrar nuevo escuadrón
```bash
curl -X POST http://localhost:3000/basico/ejercicio-04/escuadrones \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Delta Force", "bajas": 4, "estado": "Vivo", "integrantes": 4}'
```

### Manejo de errores (400 / 404)
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-04/escuadrones/abc

# Escuadron no encontrado (404)
curl http://localhost:3000/basico/ejercicio-04/escuadrones/99
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── battleroyale.controller.js
├── routes/
│   └── battleroyale.routes.js
└── services/
    └── battleroyale.service.js
```
