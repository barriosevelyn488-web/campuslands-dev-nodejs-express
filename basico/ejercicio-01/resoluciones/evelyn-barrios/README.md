# Ejercicio Basico 01 - Node Runtime y Consola (Videojuegos RPG)

Solución desarrollada por **Evelyn Barrios** para el ejercicio básico 01 de Node.js y Express.

## Descripción

Este proyecto implementa una API REST modular orientada a la temática de **Videojuegos RPG**, organizada por capas (rutas, controladores y servicios) con registro claro de eventos y trazabilidad en consola, explorando las capacidades nativas del runtime de Node.js (`process.version`, `process.platform`, `process.arch`, `process.pid`, etc.).

## Requisitos

- Node.js 20 o superior.
- npm.

## Instalación

1. Dirígete a la carpeta de la entrega:

```bash
cd basico/ejercicio-01/resoluciones/evelyn-barrios
```

2. Instala las dependencias:

```bash
npm install
```

## Ejecución

### Modo producción / estándar
```bash
npm start
```

### Modo desarrollo (con recarga automática de Node)
```bash
npm run dev
```

El servidor iniciará por defecto en `http://localhost:3000`.

## Endpoints y Ejemplos de Uso

### 1. Verificación de salud (Health Check)
```bash
curl http://localhost:3000/health
```
**Respuesta:**
```json
{
  "ok": true,
  "status": "UP"
}
```

### 2. Endpoint Principal del Ejercicio
```bash
curl http://localhost:3000/basico/ejercicio-01
```
**Respuesta esperada:**
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "Node runtime y consola"
}
```

### 3. Información del Runtime de Node.js
```bash
curl http://localhost:3000/basico/ejercicio-01/runtime
```
**Respuesta:**
```json
{
  "ok": true,
  "data": {
    "nodeVersion": "v26.8.1",
    "platform": "linux",
    "arch": "x64",
    "pid": 12345,
    "uptimeSeconds": 10,
    "memoryUsageMB": {
      "rss": 35.2,
      "heapTotal": 6.8,
      "heapUsed": 4.5
    }
  }
}
```

### 4. Listar Héroes RPG
```bash
curl http://localhost:3000/basico/ejercicio-01/heroes
```

### 5. Buscar Héroe por Nombre (Query param)
```bash
curl "http://localhost:3000/basico/ejercicio-01/heroes?nombre=Aria"
```

### 6. Crear un Nuevo Héroe RPG
```bash
curl -X POST http://localhost:3000/basico/ejercicio-01/heroes \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Evelyn", "clase": "Paladina", "nivel": 10}'
```

### 7. Manejo de Errores y Validaciones
Si se envía una solicitud POST sin el nombre o la clase:
```bash
curl -X POST http://localhost:3000/basico/ejercicio-01/heroes \
  -H "Content-Type: application/json" \
  -d '{"clase": "Picaro"}'
```
**Respuesta (400 Bad Request):**
```json
{
  "ok": false,
  "message": "El campo \"nombre\" es obligatorio y debe ser un texto valido."
}
```

## Estructura del Proyecto

```text
basico/ejercicio-01/resoluciones/evelyn-barrios/
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── app.js
    ├── server.js
    ├── controllers/
    │   └── rpg.controller.js
    ├── routes/
    │   └── rpg.routes.js
    └── services/
        └── rpg.service.js
```
