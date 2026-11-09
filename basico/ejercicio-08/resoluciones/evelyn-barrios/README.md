# Básico 08 - Variables de Entorno

Resolución del ejercicio 08 estructurando la lectura y gestión segura de variables de entorno mediante un archivo de configuración centralizado (`src/config/env.js`), con temática de hiperdeportivos.

## Configuración y ejecución

1. Copiar plantilla de variables de entorno (opcional):
```bash
cp .env.example .env
```

2. Instalar y arrancar el servidor:
```bash
npm install
npm run dev
```

El servidor usará por defecto el puerto `3000` o el valor definido en `PORT`.

## Pruebas de endpoints

### Endpoint principal
```bash
curl http://localhost:3000/basico/ejercicio-08
```

Respuesta esperada:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "variables de entorno"
}
```

### Consultar estado de configuración
Muestra el entorno activo sin exponer valores sensibles:
```bash
curl http://localhost:3000/basico/ejercicio-08/config
```

### Listar hiperdeportivos
```bash
curl http://localhost:3000/basico/ejercicio-08/vehiculos
```

### Consultar por ID
```bash
curl http://localhost:3000/basico/ejercicio-08/vehiculos/1
```

### Validaciones y errores
```bash
# ID invalido (400)
curl http://localhost:3000/basico/ejercicio-08/vehiculos/xyz

# Vehiculo no encontrado (404)
curl http://localhost:3000/basico/ejercicio-08/vehiculos/99
```

## Estructura

```text
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── app.js
    ├── server.js
    ├── config/
    │   └── env.js
    ├── controllers/
    │   └── hiperdeportivos.controller.js
    ├── routes/
    │   └── hiperdeportivos.routes.js
    └── services/
        └── hiperdeportivos.service.js
```
