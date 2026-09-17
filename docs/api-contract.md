# API Contract
Registro vivo del contrato de la API. Cada vez que se agregue o modifique un endpoint en `/backend`, actualizar este archivo en el mismo cambio.

## Modelo de Datos: Producto

Esquema basado en [`backend/data/products.js`](../backend/data/products.js):

| Campo | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Identificador único en formato slug | `"aparador-uspallata"` |
| `nombre` | `string` | Nombre comercial del producto | `"Aparador Uspallata"` |
| `descripcion` | `string` | Descripción detallada del producto | `"Aparador de seis puertas..."` |
| `imagen` | `string` | Nombre del archivo o ruta de la imagen | `"aparador-uspallata.png"` |
| `precio` | `number` | Precio en moneda local | `380000` |
| `sustentable` | `boolean` | Indicador de producto sostenible | `true` |
| `especificaciones` | `object` | Atributos y detalles técnicos (dinámicos según el producto: medidas, materiales, acabado, peso, capacidad, etc.) | Ver ejemplo detallado abajo |

### Ejemplo de Objeto Producto
```json
{
  "id": "aparador-uspallata",
  "nombre": "Aparador Uspallata",
  "descripcion": "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
  "imagen": "aparador-uspallata.png",
  "precio": 380000,
  "sustentable": true,
  "especificaciones": {
    "medidas": "180 x 45 x 75cm",
    "materiales": "Nogal macizo FSC®, herrajes de latón",
    "acabado": "Aceite natural ecológico",
    "peso": "68kg",
    "capacidad": "6 compartimentos interiores"
  }
}
```

## Endpoints

### 1. Obtener todos los productos
- **Método / Verbo HTTP:** `GET`
- **Ruta:** `/api/productos`
- **Descripción:** Devuelve la lista completa de todos los productos disponibles.
- **Body esperado:** Ninguno (`N/A`).
- **Respuesta de éxito (200 OK):**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "aparador-uspallata",
        "nombre": "Aparador Uspallata",
        "descripcion": "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
        "imagen": "aparador-uspallata.png",
        "precio": 380000,
        "sustentable": true,
        "especificaciones": {
          "medidas": "180 x 45 x 75cm",
          "materiales": "Nogal macizo FSC®, herrajes de latón",
          "acabado": "Aceite natural ecológico",
          "peso": "68kg",
          "capacidad": "6 compartimentos interiores"
        }
      },
      {
        "id": "biblioteca-recoleta",
        "nombre": "Biblioteca Recoleta",
        "descripcion": "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        "imagen": "biblioteca-recoleta.png",
        "precio": 310000,
        "sustentable": true,
        "especificaciones": {
          "medidas": "100 x 35 x 200cm",
          "materiales": "Estructura de acero, estantes de roble",
          "acabado": "Laca mate ecológica",
          "capacidad": "45kg por estante",
          "modulares": "5 estantes ajustables"
        }
      }
    ]
  }
  ```

### 2. Obtener un producto por ID
- **Método / Verbo HTTP:** `GET`
- **Ruta:** `/api/productos/:id`
- **Descripción:** Busca y devuelve el detalle de un producto específico mediante su identificador (`id`). Si no existe, devuelve estado `404 Not Found`.
- **Parámetros de ruta:**
  - `id` (`string`): Identificador del producto (ejemplo: `aparador-uspallata`).
- **Body esperado:** Ninguno (`N/A`).
- **Respuesta de éxito (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "id": "aparador-uspallata",
      "nombre": "Aparador Uspallata",
      "descripcion": "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
      "imagen": "aparador-uspallata.png",
      "precio": 380000,
      "sustentable": true,
      "especificaciones": {
        "medidas": "180 x 45 x 75cm",
        "materiales": "Nogal macizo FSC®, herrajes de latón",
        "acabado": "Aceite natural ecológico",
        "peso": "68kg",
        "capacidad": "6 compartimentos interiores"
      }
    }
  }
  ```
- **Respuesta de error (404 Not Found):**
  ```json
  {
    "success": false,
    "message": "Producto no encontrado"
  }
  ```