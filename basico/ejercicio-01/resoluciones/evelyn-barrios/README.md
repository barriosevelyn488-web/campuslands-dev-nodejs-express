# Básico 01 - Node Runtime y Consola

Resolución del ejercicio 01 utilizando Node.js y Express con arquitectura por capas, aplicando la temática de videojuegos RPG y explorando las propiedades del runtime (`process.version`, `process.platform`, `process.arch`, `process.pid`).

## Instalación y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-01
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "Node runtime y consola"
}
```

### Runtime del entorno
Devuelve información del runtime de Node y muestra una tabla con métricas en la consola del servidor:
```bash
curl http://localhost:3000/basico/ejercicio-01/runtime
```

### Listar héroes
```bash
curl http://localhost:3000/basico/ejercicio-01/heroes
```

### Buscar héroe por nombre
```bash
curl "http://localhost:3000/basico/ejercicio-01/heroes?nombre=Aria"
```

### Crear héroe
```bash
curl -X POST http://localhost:3000/basico/ejercicio-01/heroes \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Evelyn", "clase": "Paladina", "nivel": 5}'
```

### Caso de error (400 - sin nombre obligatorio)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-01/heroes \
  -H "Content-Type: application/json" \
  -d '{"clase": "Maga"}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── rpg.controller.js
├── routes/
│   └── rpg.routes.js
└── services/
    └── rpg.service.js
```
