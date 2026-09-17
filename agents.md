# agents.md

## Principio general: no inventar datos del negocio
No asumas campos, valores o reglas de negocio no confirmados (ej. esquema de un producto). Si falta esa info, preguntá.

## Cómo usar este documento
Este archivo (`agents.md`) contiene los lineamientos generales del proyecto (objetivos, estructura, convenciones compartidas). El detalle de cada capa vive en un archivo aparte, para poder trabajar en una sin cargar contexto de la otra:
- `backend.md` → usalo cuando trabajes exclusivamente en `/backend` (Express, rutas, middlewares).
- `frontend.md` → usalo cuando trabajes exclusivamente en `/client` (React, componentes, estado).
Si una tarea toca ambas capas (por ejemplo, agregar un endpoint nuevo y consumirlo desde la UI), consultá los dos archivos.

## Arquitectura del proyecto
```
/backend  - Contendrá toda la aplicación de Node.js y Express.
/client   - Contendrá toda la aplicación de React (creada con create-react-app).
/docs     - Contendrá api-contract.md, el registro vivo del contrato de la API (ver backend.md).
```

## Seguridad
Nunca:
- Almacenar secretos directamente en el código.
- Devolver stack traces al cliente en producción.
- Confiar ciegamente en datos enviados por el cliente.
- Exponer información interna innecesaria.

## Convenciones de código
- **Asincronismo:** Utilizar siempre promesas y sintaxis moderna de asincronismo (`async` / `await`) tanto en backend como en frontend para el manejo de operaciones asíncronas (lectura de datos, consultas a la API, etc.). Evitar el uso de callbacks anidados.