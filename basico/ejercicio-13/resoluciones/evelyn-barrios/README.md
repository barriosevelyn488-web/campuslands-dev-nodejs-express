# Básico 13 - Manejo de Errores

Resolución del ejercicio 13 implementando una arquitectura de manejo centralizado de excepciones con clases de error personalizadas (`AppError`) y middleware global de Express, ambientado en la temática de ciencia ficción.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-13
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "manejo de errores"
}
```

### Listar naves espaciales
```bash
curl http://localhost:3000/basico/ejercicio-13/naves
```

### Consultar nave por ID
```bash
curl http://localhost:3000/basico/ejercicio-13/naves/1
```

### Activar hiperimpulsor (caso exitoso)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-13/naves/1/hiperimpulsor \
  -H "Content-Type: application/json" \
  -d '{"consumoEnergia": 30}'
```

### Pruebas de manejo de errores
```bash
# 400 Bad Request - ID invalido
curl http://localhost:3000/basico/ejercicio-13/naves/invalido

# 404 Not Found - Nave inexistente
curl http://localhost:3000/basico/ejercicio-13/naves/99

# 422 Unprocessable Entity - Energia insuficiente para el salto
curl -X POST http://localhost:3000/basico/ejercicio-13/naves/1/hiperimpulsor \
  -H "Content-Type: application/json" \
  -d '{"consumoEnergia": 95}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── errors/
│   └── app.error.js
├── controllers/
│   └── scifi.controller.js
├── routes/
│   └── scifi.routes.js
└── services/
    └── scifi.service.js
```
