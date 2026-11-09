# Básico 16 - Primer Servidor Express

Resolución del ejercicio 16 inicializando y configurando un servidor web mediante el framework Express con enrutamiento modular y manejo de payloads JSON, aplicado a una tienda de sneakers y ropa urbana.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-16
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "primer servidor Express"
}
```

### Listar sneakers del catálogo
```bash
curl http://localhost:3000/basico/ejercicio-16/sneakers
```

### Consultar sneaker por ID
```bash
curl http://localhost:3000/basico/ejercicio-16/sneakers/1
```

### Registrar nuevo sneaker (POST)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-16/sneakers \
  -H "Content-Type: application/json" \
  -d '{"modelo": "Forum Low", "marca": "Adidas", "precio": 100, "edicionLimitada": false, "stock": 15}'
```

### Manejo de errores (400 / 404)
```bash
# ID inexistente (404)
curl http://localhost:3000/basico/ejercicio-16/sneakers/99

# Payload con datos faltantes (400)
curl -X POST http://localhost:3000/basico/ejercicio-16/sneakers \
  -H "Content-Type: application/json" \
  -d '{"modelo": "Dunk Low"}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── sneakers.controller.js
├── routes/
│   └── sneakers.routes.js
└── services/
    └── sneakers.service.js
```
