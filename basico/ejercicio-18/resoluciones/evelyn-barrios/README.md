# Básico 18 - Rutas POST

Resolución del ejercicio 18 implementando el manejo de solicitudes HTTP POST para la creación de nuevos recursos, procesando el cuerpo de la petición (`req.body`) con `express.json()`, asignando identificadores automáticos y respondiendo con el código `201 Created` en un centro de paracaidismo.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-18
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "rutas POST"
}
```

### Listar saltos registrados
```bash
curl http://localhost:3000/basico/ejercicio-18/saltos
```

### Consultar salto por ID
```bash
curl http://localhost:3000/basico/ejercicio-18/saltos/1
```

### Registrar nuevo salto mediante POST (201 Created)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-18/saltos \
  -H "Content-Type: application/json" \
  -d '{
    "paracaidista": "David Morales",
    "modalidad": "Tandem",
    "altitudPies": 13500,
    "instructor": "Marcos Diaz",
    "seguroIncluido": true
  }'
```

### Validaciones y errores (400 Bad Request)
```bash
# Payload con campos faltantes
curl -X POST http://localhost:3000/basico/ejercicio-18/saltos \
  -H "Content-Type: application/json" \
  -d '{"paracaidista": "David Morales"}'

# Altitud fuera del rango de seguridad
curl -X POST http://localhost:3000/basico/ejercicio-18/saltos \
  -H "Content-Type: application/json" \
  -d '{
    "paracaidista": "David Morales",
    "modalidad": "Tandem",
    "altitudPies": 25000,
    "instructor": "Marcos Diaz"
  }'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── saltos.controller.js
├── routes/
│   └── saltos.routes.js
└── services/
    └── saltos.service.js
```
