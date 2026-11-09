# Básico 03 - Módulos CommonJS

Resolución del ejercicio 03 implementando el sistema modular clásico de Node.js (`require` y `module.exports`) en una API REST con arquitectura por capas, ambientada en la temática de MOBA esports.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-03
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "modulos CommonJS"
}
```

### Listar campeones del meta
```bash
curl http://localhost:3000/basico/ejercicio-03/campeones
```

### Buscar campeón por ID
```bash
curl http://localhost:3000/basico/ejercicio-03/campeones/1
```

### Registrar nuevo campeón
```bash
curl -X POST http://localhost:3000/basico/ejercicio-03/campeones \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Darius", "rol": "Luchador", "carril": "Superior", "dificultad": "Baja", "winRate": 50.8}'
```

### Validaciones y errores
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-03/campeones/xyz

# Faltan campos requeridos (400)
curl -X POST http://localhost:3000/basico/ejercicio-03/campeones \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Lux"}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── campeones.controller.js
├── routes/
│   └── campeones.routes.js
└── services/
    └── campeones.service.js
```
