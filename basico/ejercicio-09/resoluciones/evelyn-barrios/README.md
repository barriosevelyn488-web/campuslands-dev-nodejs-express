# Básico 09 - JSON y Persistencia Simple

Resolución del ejercicio 09 implementando persistencia básica basada en archivos mediante lectura y escritura asíncrona de datos en formato JSON (`data/luchadores.json`), con temática de kickboxing.

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-09
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "JSON y persistencia simple"
}
```

### Listar luchadores persistidos
```bash
curl http://localhost:3000/basico/ejercicio-09/luchadores
```

### Consultar luchador por ID
```bash
curl http://localhost:3000/basico/ejercicio-09/luchadores/1
```

### Registrar y persistir nuevo luchador
```bash
curl -X POST http://localhost:3000/basico/ejercicio-09/luchadores \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Badr Hari", "categoria": "Pesado", "victorias": 106, "derrotas": 16, "ko": 92}'
```

### Validaciones y errores (400 / 404)
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-09/luchadores/abc

# Luchador no encontrado (404)
curl http://localhost:3000/basico/ejercicio-09/luchadores/99
```

## Estructura

```text
data/
└── luchadores.json
src/
├── app.js
├── server.js
├── controllers/
│   └── kickboxing.controller.js
├── routes/
│   └── kickboxing.routes.js
└── services/
    └── kickboxing.service.js
```
