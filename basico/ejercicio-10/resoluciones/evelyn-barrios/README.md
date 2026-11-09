# Básico 10 - Funciones Asíncronas

Resolución del ejercicio 10 aplicando programación asíncrona mediante `async/await`, promesas y simulación de tareas no bloqueantes en un motor de emparejamiento y simulación de partidos de tenis de mesa (ping-pong).

## Requisitos y ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-10
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "funciones asincronas"
}
```

### Consultar jugadores de forma asíncrona
```bash
curl http://localhost:3000/basico/ejercicio-10/jugadores
```

### Consultar jugador por ID
```bash
curl http://localhost:3000/basico/ejercicio-10/jugadores/1
```

### Simulación asíncrona de partido
```bash
curl -X POST http://localhost:3000/basico/ejercicio-10/simular-partido \
  -H "Content-Type: application/json" \
  -d '{"jugador1Id": 1, "jugador2Id": 2}'
```

### Validaciones y errores
```bash
# ID inexistente o invalido
curl http://localhost:3000/basico/ejercicio-10/jugadores/abc
curl http://localhost:3000/basico/ejercicio-10/jugadores/99

# Mismo jugador en la simulacion (400)
curl -X POST http://localhost:3000/basico/ejercicio-10/simular-partido \
  -H "Content-Type: application/json" \
  -d '{"jugador1Id": 1, "jugador2Id": 1}'
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── pingpong.controller.js
├── routes/
│   └── pingpong.routes.js
└── services/
    └── pingpong.service.js
```
