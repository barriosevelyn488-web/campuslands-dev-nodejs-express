# Básico 07 - process.argv y CLI

Resolución del ejercicio 07 demostrando el procesamiento de argumentos por línea de comandos con `process.argv` y la creación de una utilidad CLI interactiva, integrada a una API Express sobre el catálogo de autos de lujo.

## Requisitos y ejecución

### 1. Servidor HTTP
```bash
npm install
npm run dev
```

También es posible pasar argumentos por consola al arrancar el servidor (por ejemplo el puerto):
```bash
node src/server.js --port=4000
```

### 2. Comandos CLI interactivos
```bash
# Mostrar ayuda
node src/cli.js --ayuda

# Listar inventario completo
npm run cli:listar

# Filtrar por marca usando argumentos
npm run cli:filtrar
node src/cli.js --marca=Ferrari
```

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-07
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "process.argv y CLI"
}
```

### Inspección de process.argv en la API
```bash
curl http://localhost:3000/basico/ejercicio-07/cli-info
```

### Listar inventario de autos
```bash
curl http://localhost:3000/basico/ejercicio-07/autos
```

### Filtrar por marca en query
```bash
curl "http://localhost:3000/basico/ejercicio-07/autos?marca=Porsche"
```

### Consultar auto por ID
```bash
curl http://localhost:3000/basico/ejercicio-07/autos/1
```

## Estructura

```text
src/
├── app.js
├── cli.js
├── server.js
├── controllers/
│   └── autos.controller.js
├── routes/
│   └── autos.routes.js
└── services/
    └── autos.service.js
```
