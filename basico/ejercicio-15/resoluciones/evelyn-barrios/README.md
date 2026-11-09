# Básico 15 - Mini API HTTP Nativa

Resolución del ejercicio 15 construyendo un servidor y API REST utilizando exclusivamente el módulo nativo `node:http` de Node.js, sin frameworks externos, implementando parseo de streams (`req.on('data')`, `req.on('end')`), enrutamiento manual y respuestas en formato JSON sobre un menú de comida urbana.

## Requisitos y ejecución

```bash
npm start
# O en modo desarrollo con recarga automatica:
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-15
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "mini API HTTP nativa"
}
```

### Consultar menú completo
```bash
curl http://localhost:3000/basico/ejercicio-15/menu
```

### Consultar platillo por ID
```bash
curl http://localhost:3000/basico/ejercicio-15/menu/1
```

### Agregar nuevo platillo urbano (POST)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-15/menu \
  -H "Content-Type: application/json" \
  -d '{"platillo": "Choripán Artesanal", "categoria": "Sandwiches", "precio": 4.5, "picante": true}'
```

### Manejo de errores nativos (400 / 404)
```bash
# Platillo inexistente (404)
curl http://localhost:3000/basico/ejercicio-15/menu/99

# Validacion de payload incompleto (400)
curl -X POST http://localhost:3000/basico/ejercicio-15/menu \
  -H "Content-Type: application/json" \
  -d '{"platillo": "Empanada"}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── comida.controller.js
├── routes/
│   └── comida.routes.js
└── services/
    └── comida.service.js
```
