# Básico 02 - npm scripts y package.json

Resolución del ejercicio 02 con temática de shooters competitivos. Demuestra el uso y configuración de scripts personalizados en `package.json` para gestionar la ejecución de una API construida con Node.js y Express.

## Scripts configurados

- `npm start`: Inicia el servidor normalmente.
- `npm run dev`: Inicia el servidor con recarga automática usando `node --watch`.
- `npm run info`: Consulta la versión instalada de Node.js.
- `npm run status`: Ejecuta un comando inline que valida el estado de la consola.

## Instalación y ejecución

```bash
npm install
npm run dev
```

El servidor quedará escuchando en `http://localhost:3000`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-02
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "npm scripts y package.json"
}
```

### Consultar scripts del package.json
```bash
curl http://localhost:3000/basico/ejercicio-02/scripts
```

### Listar jugadores del shooter
```bash
curl http://localhost:3000/basico/ejercicio-02/jugadores
```

### Buscar jugador por ID
```bash
curl http://localhost:3000/basico/ejercicio-02/jugadores/1
```

### Crear nuevo jugador competitivo
```bash
curl -X POST http://localhost:3000/basico/ejercicio-02/jugadores \
  -H "Content-Type: application/json" \
  -d '{"gamertag": "Valkyrie", "rango": "Radiante", "rol": "Duelista", "armaFavorita": "Vandal", "kd": 1.45}'
```

### Manejo de errores
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-02/jugadores/abc

# Jugador inexistente (404)
curl http://localhost:3000/basico/ejercicio-02/jugadores/99
```

## Estructura

```text
src/
├── app.js
├── server.js
├── controllers/
│   └── shooters.controller.js
├── routes/
│   └── shooters.routes.js
└── services/
    └── shooters.service.js
```
