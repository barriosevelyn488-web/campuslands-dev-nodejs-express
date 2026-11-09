# Básico 14 - Validación de Entrada

Resolución del ejercicio 14 implementando un middleware de validación rigurosa de datos de entrada (`req.body`) con verificación de tipos, longitudes mínimas y formatos como ISBN, aplicado a la gestión de libros.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-14
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "validacion de entrada"
}
```

### Listar libros
```bash
curl http://localhost:3000/basico/ejercicio-14/libros
```

### Consultar libro por ID
```bash
curl http://localhost:3000/basico/ejercicio-14/libros/1
```

### Registrar libro con datos válidos (201 Created)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-14/libros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Rayuela",
    "autor": "Julio Cortázar",
    "anio": 1963,
    "paginas": 600,
    "isbn": "9788466331906"
  }'
```

### Validación de errores (400 Bad Request)
```bash
# Payload con multiples campos invalidos o ausentes
curl -X POST http://localhost:3000/basico/ejercicio-14/libros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "A",
    "anio": 3000,
    "paginas": -10,
    "isbn": "123"
  }'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── middlewares/
│   └── validator.js
├── controllers/
│   └── libros.controller.js
├── routes/
│   └── libros.routes.js
└── services/
    └── libros.service.js
```
