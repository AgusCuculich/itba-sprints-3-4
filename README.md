# Hermanos Jota — Mueblería de Diseño y Carpintería Artesanal

Proyecto desarrollado para la diplomatura / curso de desarrollo web de **ITBA** (Sprints 3 y 4). Aplicación web fullstack compuesta por una API REST en Node.js/Express y una Single Page Application (SPA) interactiva desarrollada con React, Vite y Tailwind CSS.

---

## 👥 Integrantes del Equipo

- **Agustina Cuculich**
- **Rodrigo Antelo**
- **Delfina Moschella**
- **Nancy Elliff**

---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Requisitos Previos](#-requisitos-previos)
4. [Instrucciones de Instalación y Ejecución](#-instrucciones-de-instalación-y-ejecución)
   - [Paso 1: Clonar el repositorio](#paso-1-clonar-el-repositorio)
   - [Paso 2: Servidor Backend](#paso-2-servidor-backend)
   - [Paso 3: Servidor Frontend (Cliente)](#paso-3-servidor-frontend-cliente)
5. [Arquitectura y Decisiones Técnicas](#-arquitectura-y-decisiones-técnicas)
   - [Backend](#backend-nodejs--express)
   - [Frontend](#frontend-react--vite--tailwind-css-v4)
   - [Contrato de API y Comunicación](#contrato-de-api-y-comunicación)
   - [Identidad Visual y Accesibilidad](#identidad-visual-y-accesibilidad)
6. [Resumen de Endpoints de la API](#-resumen-de-endpoints-de-la-api)

---

## 📖 Descripción del Proyecto

**Hermanos Jota** es una mueblería y taller de carpintería artesanal fundada en 1960 en Buenos Aires bajo los principios de la corriente estética **Mid-Century Modern** y la sustentabilidad. 

En esta etapa del proyecto (Sprints 3 y 4):
- Se construyó una **API REST** para servir el catálogo de productos con sus especificaciones técnicas y archivos multimedia.
- Se implementó una **interfaz en React** dinámica que consume la API REST, permitiendo visualizar el catálogo con diseño adaptable y explorar el taller mediante una vista interactiva de contacto con validaciones de formularios y accesibilidad integrada.

---

## 📂 Estructura del Proyecto

El repositorio adopta un esquema desacoplado cliente-servidor:

```
itba-sprints-3-4/
├── backend/                  # Servidor API REST (Node.js + Express)
│   ├── data/                 # Fuente de datos en memoria (products.js)
│   ├── middleware/           # Middlewares personalizados (logger, etc.)
│   ├── public/               # Archivos estáticos servidos (imágenes de productos)
│   │   └── images/
│   ├── routes/               # Enrutamiento modular (productRoutes.js)
│   ├── package.json
│   └── server.js             # Entrada principal del servidor Express
│
├── client/                   # Aplicación cliente SPA (React + Vite)
│   ├── src/
│   │   ├── components/       # Componentes reutilizables (Navbar, Footer, Layout, ProductCard, etc.)
│   │   ├── pages/            # Páginas o vistas principales (Home, Contacto)
│   │   ├── services/         # Servicios de consumo HTTP / API (api.js)
│   │   ├── index.css         # Configuración del tema y estilos globales (Tailwind v4)
│   │   └── main.jsx          # Punto de entrada y configuración de React Router
│   ├── package.json
│   └── vite.config.js
│
├── docs/                     # Documentación de arquitectura
│   └── api-contract.md       # Contrato de datos y especificación de endpoints
├── agents.md                 # Lineamientos generales y principios del proyecto
├── backend.md                # Especificaciones de desarrollo backend
├── frontend.md               # Manual de marca, diseño y desarrollo frontend
└── README.md                 # Documento principal del repositorio
```

---

## ⚙️ Requisitos Previos

Para ejecutar la aplicación en un entorno local, asegurate de tener instalado:
- **Node.js**: versión 18.0.0 o superior (recomendado Node 20 LTS o superior).
- **npm**: versión 9.0.0 o superior (incluido automáticamente con Node.js).
- **Git**: para clonar y gestionar el repositorio.

---

## 🚀 Instrucciones de Instalación y Ejecución

Se recomienda abrir dos pestañas de terminal independientes: una para el **backend** y otra para el **frontend**.

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/AgusCuculich/itba-sprints-3-4.git
cd itba-sprints-3-4
```

---

### Paso 2: Servidor Backend

El servidor backend gestiona la API REST y sirve las imágenes estáticas de los productos.

1. Navegá al directorio del backend:
   ```bash
   cd backend
   ```

2. Instalá las dependencias necesarias:
   ```bash
   npm install
   ```

3. Iniciá el servidor en modo producción/estándar:
   ```bash
   npm start
   ```

> ℹ️ El servidor backend se ejecutará en **`http://localhost:3000`**.  
> Podés verificar el correcto funcionamiento ingresando en tu navegador o cliente HTTP a:  
> `http://localhost:3000/api/productos`

---

### Paso 3: Servidor Frontend (Cliente)

El frontend está desarrollado con Vite y React, optimizado para recarga rápida en desarrollo (HMR).

1. En una nueva terminal, navegá a la carpeta del cliente desde la raíz del proyecto:
   ```bash
   cd client
   ```

2. Instalá las dependencias del frontend:
   ```bash
   npm install
   ```

3. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrí tu navegador e ingresá a la URL provista por Vite:
   ```
   http://localhost:5173
   ```

---

## 🏗️ Arquitectura y Decisiones Técnicas

### Backend (Node.js + Express)

- **Express Modular (`express.Router`):** Las rutas de productos se modularizaron en `routes/productRoutes.js`, separando la definición de endpoints del archivo de arranque `server.js`.
- **Persistencia en memoria:** Siguiendo los requerimientos del sprint sin sobredimensionar la infraestructura inicial, los datos de los productos se almacenan de manera estructurada en `data/products.js`, utilizando identificadores únicos legibles (`slugs`).
- **Servicio de archivos estáticos:** Las fotografías de los muebles se sirven públicamente a través del middleware `express.static('public')`, permitiendo que el cliente las consuma bajo la ruta `/images/<nombre-archivo>`.
- **CORS Habilitado:** Se integró el middleware `cors` para posibilitar el consumo seguro de la API desde el puerto de desarrollo de Vite (`localhost:5173`) hacia el backend (`localhost:3000`).
- **Pipeline de Middlewares ordenado:**
  1. Habilitación de CORS.
  2. Servicio de estáticos (`public`).
  3. Parser JSON (`express.json()`).
  4. Logging centralizado en consola (`middleware/logger.js`) registrando método, ruta y timestamp.
  5. Montaje de rutas de negocio (`/api/productos`).
  6. Manejador de rutas no encontradas (`404 Not Found`).
  7. Manejador centralizado de errores (`500 Internal Server Error`), evitando fugas de información sensible o stack traces al cliente.

### Frontend (React + Vite + Tailwind CSS v4)

- **Vite como Bundler:** Ofrece compilación ultrarrápida, soporte nativo de módulos ES (ESM) y optimización en desarrollo.
- **React 19 & Componentes Funcionales:** Se utilizó la última versión de React, aplicando hooks estándar (`useState`, `useEffect`, etc.) y promoviendo componentes pequeños, reutilizables y con una única responsabilidad.
- **Ruteo Declarativo con React Router (v8):** Implementación de `createBrowserRouter` y `RouterProvider`. Se utilizó un componente `Layout` compartido con `<Outlet />` para que el encabezado (`NavBar`) y el pie de página (`Footer`) persistan de forma uniforme entre páginas (`/` y `/contacto`).
- **Capa de Servicios Aislada:** La lógica de llamadas a la red se encapsuló en `src/services/api.js`, abstrayendo a los componentes de la implementación de `fetch` y permitiendo el paso de señales (`AbortController` / `signal`) para cancelaciones limpias.
- **Formularios Controlados y Accesibles:** En la vista de Contacto se implementó un formulario controlado con validaciones en tiempo real y al envío, proporcionando mensajes de alerta con soporte semántico (`role="alert"`, `aria-live="polite"`, `aria-invalid`).

### Contrato de API y Comunicación

- Se definió un documento vivo de especificación en `docs/api-contract.md`. Ambas capas (frontend y backend) se apegan a este contrato estándar:
  - Respuestas JSON uniformes con formato `{ success: boolean, data: ... }` o `{ success: false, message: ... }`.
  - Códigos de estado HTTP semánticos (`200`, `404`, `500`).

### Identidad Visual y Accesibilidad

- **Tailwind CSS v4 con `@theme`:** Se prescindió del tradicional `tailwind.config.js` y se configuró todo el sistema de diseño en `src/index.css` mediante `@theme`, definiendo tokens para la paleta de colores Mid-Century Modern:
  - `siena` (`#A0522D`): Acentos principales, títulos y botones.
  - `salvia` (`#87A96B`): Acentos secundarios y atributos de sustentabilidad.
  - `alabastro` (`#F5E6D3`): Tono cálido de fondo principal.
  - `vara-de-oro` (`#D4A437`): Detalles y elementos destacados.
  - `rosa-polvoriento` (`#C47A6D`): Acentos suaves y contenedores de advertencia/error.
  - `carbon` (`#1A1A1A`): Color principal de textos con contraste óptimo.
- **Tipografía Editorial:** Integración mediante `@fontsource` de **Playfair Display** (títulos con impronta clásica y artesanal) e **Inter** (cuerpo de texto moderno y de alta legibilidad).
- **Accesibilidad (WCAG AA):** Cumplimiento de contrastes mínimos de color y diseño responsivo adaptado para dispositivos móviles, tablets y computadoras de escritorio.

---

## 🔌 Resumen de Endpoints de la API

| Método | Endpoint | Descripción | Respuesta Exitosa |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/productos` | Obtiene el listado completo de productos del catálogo | `200 OK` + array de productos |
| `GET` | `/api/productos/:id` | Obtiene el detalle de un producto por su `id` (slug) | `200 OK` + objeto producto (`404` si no existe) |

Para ver el formato exacto de payload y ejemplos completos de respuesta, consultá el archivo [docs/api-contract.md](docs/api-contract.md).
