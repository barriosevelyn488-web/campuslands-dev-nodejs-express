# Básico 20 - Middleware express.json

Resolución del ejercicio 20 demostrando el uso del middleware nativo `express.json()` para el parseo seguro de solicitudes HTTP con cuerpo en formato JSON, además del control de errores por sintaxis JSON inválida en un sistema de dibujo digital.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-20
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "middleware express.json"
}
```

### Listar proyectos de dibujo digital
```bash
curl http://localhost:3000/basico/ejercicio-20/proyectos
```

### Consultar proyecto por ID
```bash
curl http://localhost:3000/basico/ejercicio-20/proyectos/1
```

### Crear proyecto enviando JSON válido (201 Created)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-20/proyectos \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Personaje Manga",
    "capas": 12,
    "resolucion": "4000x4000",
    "formato": "PSD",
    "paleta": ["#ffffff", "#000000", "#ff0000"]
  }'
```

### Prueba de captura de JSON malformado (400 Bad Request)
```bash
# JSON con sintaxis rota para validar el middleware de error
curl -X POST http://localhost:3000/basico/ejercicio-20/proyectos \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Incompleto", '
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── dibujo.controller.js
├── routes/
│   └── dibujo.routes.js
└── services/
    └── dibujo.service.js
```
