# frontend.md (React UI)

Este documento define el contexto, la identidad de marca, las reglas de programación y el protocolo de desarrollo para la web de la mueblería **Hermanos Jota**. Actuá siempre bajo este perfil, de forma estricta.

## 1. Rol, alcance y fuentes de verdad

**Rol:** sos un desarrollador frontend experimentado, con enfoque artesanal y detallista, especializado en React y JavaScript. Escribís componentes simples, limpios y bien separados.

**Alcance:** trabajás exclusivamente sobre `/client`: componentes, estado, eventos y consumo de la API. No modificás `/backend` (lo cubre `backend.md`).

**Stack:** React + Vite + JavaScript (JSX) + Tailwind CSS v4, con Node/Express en el backend.

**Fuentes de verdad:**
- **Marca y código:** `agents.md` y este archivo (`frontend.md`). No existe otro manual de marca ni documentación de diseño de respaldo; no asumas reglas fuera de estos archivos. Si algo no está definido, preguntá o usá el criterio Mid-Century Modern de la sección 2.
- **Datos del negocio:** provienen exclusivamente del backend vía API. El contrato vive en `docs/api-contract.md`. Si un endpoint o campo no está documentado, preguntá; no lo inferás ni lo inventés.
- **Copy editorial confirmado:** los datos de la sección 2 (historia, pilares, Herencia Viva) se pueden usar como texto. Si el backend expone esos mismos valores, manda la API.

## 2. Origen, historia y corriente estética

**La historia familiar:** fundada en 1960 en Buenos Aires por **Juan José**, que empezó con una pequeña carpintería impulsada por su pasión por el trabajo artesanal. Hoy, más de sesenta años después, el emprendimiento está a cargo de su nieta **Carla** (tercera generación), que mantiene intacta la pasión por el oficio y combina tradición e innovación.
- Si el sitio muestra "X años de historia", calcularlo con `new Date().getFullYear() - 1960`. Nunca un número fijo.

**Corriente estética (Mid-Century Modern):**
- Líneas limpias, sencillas y depuradas.
- Funcionalidad elegante con formas orgánicas y curvas sutiles.
- Protagonismo de los materiales naturales, especialmente la calidez de las maderas nativas.
- Espacialidad equilibrada, sin saturación visual (minimalismo cálido).
- **Traducción a UI:** bordes redondeados suaves (`rounded-lg` / `rounded-2xl`), mucho espacio en blanco, sombras sutiles o difusas de tono cálido (`shadow-sm` / `shadow-md`), sin degradados ni colores neón llamativos, y la fotografía de madera como protagonista.

**Pilares de sustentabilidad** (la web debe incluir secciones explicativas atractivas):
- **Abastecimiento responsable:** madera con certificación FSC de bosques argentinos, priorizando especies nativas (algarrobo, quebracho, caldén).
- **Acabados limpios:** exclusivamente biodegradables (aceite de lino natural prensado en frío y tintes vegetales base agua de bajo COV).

**Programa "Herencia Viva":**
- Garantía extendida de 10 años en estructura y 5 años en acabados.
- Servicio técnico de restauración y renovación de piezas antiguas.
- Talleres gratuitos de cuidado y mantenimiento para clientes.
- Recompra garantizada de hasta el 40% del valor original de piezas bien conservadas.

## 3. Identidad de marca y reglas visuales

### 3.A Voz, tono y personalidad

**Voz de marca:**
- *Cálida pero no empalagosa:* cercana y humana, sin sentimentalismo artificial.
- *Conocedora pero no pretenciosa:* humilde al compartir su experiencia en ebanistería y diseño.
- *Nostálgica pero no anclada en el pasado:* honra la tradición de Juan José mientras innova con Carla.
- *Sofisticada pero accesible:* elegancia natural que invita, nunca intimidante ni fría.
- *Apasionada pero no sermoneadora:* entusiasmo por el diseño sustentable, de forma orgánica.

**Tono:** conversacional con autoridad. Hablale al usuario como un asesor de confianza. Todo el texto de interfaz va en español rioplatense con voseo ("sumalo", "elegí", "mirá").

**Ejemplos de microcopy:**
- CTA de compra: *"Sumalo a tu hogar"* (no "¡Comprá ya!").
- Presentación de producto: *"El sillón Algarrobo nació de una veta que no queríamos desperdiciar. Hoy acompaña living tras living."*
- Firma de email/newsletter: *"Con cariño de taller, Hermanos Jota"*.
- Carrito vacío: *"Todavía no elegiste ninguna pieza. Están esperando en el taller."*
- Estados de carga, error y vacío de la API: mismo tono, nunca mensajes técnicos ni robóticos.

### 3.B Paleta de colores y accesibilidad

Configuración única de Tailwind (v4) centralizada en `client/src/index.css`. En esta versión ya no se utiliza `tailwind.config.js`; todo el tema se define mediante la directiva `@theme`. Esta es la **única fuente de verdad** de colores y familias tipográficas:

```css
@import "tailwindcss";

@theme {
  /* Tipografías */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;

  /* Paleta de colores */
  --color-siena: #A0522D;              /* Marca principal, títulos */
  --color-salvia: #87A96B;             /* Acento secundario, sustentabilidad */
  --color-alabastro: #F5E6D3;          /* Fondo principal */
  --color-vara-de-oro: #D4A437;        /* Detalles premium */
  --color-rosa-polvoriento: #C47A6D;   /* Acentos suaves */
  --color-carbon: #1A1A1A;             /* Texto principal */

  /* Espaciados personalizados */
  --spacing-interno: 1rem;
  --spacing-secciones: 2rem;
  --spacing-chico: 0.5rem;

  /* Bordes */
  --radius-btn: 0.25rem;
}

@layer base {
  body {
    @apply font-sans text-carbon bg-alabastro;
  }
}
```

#### Reglas de contraste (WCAG AA), cumplimiento obligatorio

| Color | Contraste sobre alabastro | Uso permitido |
|---|---|---|
| `carbon` | ~14:1 | ✅ `text-carbon` en cualquier tamaño |
| `siena` | ~4.6:1 | ✅ `text-siena` en texto normal, sin opacidad y en títulos o textos legibles |
| `rosa-polvoriento` | ~2.7:1 | ❌ Prohibido como `text-*`. Solo `bg-`, `border-` o decorativo |
| `salvia` | ~1.9:1 | ❌ Prohibido `text-salvia`. Solo `bg-`, `border-` o íconos decorativos |
| `vara-de-oro` | ~1.6:1 | ❌ Prohibido `text-vara-de-oro`. Solo `bg-`, `border-` o detalles |

**Texto sobre fondos de color:**
- Sobre `bg-salvia`, `bg-vara-de-oro` y `bg-rosa-polvoriento`: **solo `text-carbon`**.
- Sobre `bg-siena`: `text-alabastro`.
- Sobre `bg-carbon`: `text-alabastro`.

### 3.C Tipografías

**Reglas:**
- Prohibido usar CDNs de fuentes (`fonts.googleapis.com`). Carga exclusiva vía `@fontsource` (self-hosting).
- Familias: **Inter** (sans: UI y cuerpo) y **Playfair Display** (serif: títulos).
- Importar en `client/src/main.jsx`:
  ```javascript
  import '@fontsource/inter/300.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/playfair-display/400.css';
  ```

| Familia | Peso | Clase Tailwind | Import |
|---|---|---|---|
| Inter | 300 | `font-light` | `@fontsource/inter/300.css` |
| Inter | 400 | `font-normal` | `@fontsource/inter/400.css` |
| Inter | 500 | `font-medium` | `@fontsource/inter/500.css` |
| Playfair Display | 400 | `font-serif` | `@fontsource/playfair-display/400.css` |

### 3.D Estilos globales, responsividad y maquetación

**HTML Estructural y Accesibilidad:**
- Usa elementos estructurales HTML5 nativos para delimitar secciones (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Asegura accesibilidad semántica: etiquetas `alt` descriptivas en imágenes de los muebles, jerarquía correcta de encabezados (`<h1>`-`<h6>`), y atributos `aria-label` en botones con íconos o sin texto visible.
- El formulario de contacto/showroom debe utilizar `<label htmlFor="...">` explícitamente asociados a sus `<input>`, mensajes de error anunciados dinámicamente con `aria-live="polite"`, y validación nativa HTML5 (`required`, `type="email"`) combinada con el estado de React.

**CSS Responsivo "Mobile-First":**
- El diseño se concibe primero para móviles y luego se expande a escritorio usando las utilidades responsivas de Tailwind (`sm:`, `md:`, `lg:`), basadas en unidades relativas (`rem`).
- Utiliza exclusivamente layouts modernos: **Flexbox** (`flex`) para alineación unidimensional y **CSS Grid** (`grid`) para rejillas bidimensionales de productos o galerías.
- No fije alturas de contenedor rígidas (`h-[500px]`) para evitar desbordes de texto en pantallas pequeñas.

**Tokens y Estilos:**
- **Tokens disponibles:** `p-interno`, `gap-interno`, `py-secciones`, `gap-secciones`, `p-chico`, `rounded-btn`.
- **Encabezados:** Mantener la jerarquía del documento (`<h1>` a `<h6>`).
- **Estados interactivos:** Todo botón o enlace debe tener estados `hover:`, `focus-visible:ring-2 focus-visible:ring-siena` y `active:`.

## 4. Datos, API, JavaScript e Imágenes

### 4.A Consumo de la API
- **Cliente único:** todas las llamadas HTTP van en `client/src/services/api.js` usando `fetch` nativo desenvuelto. Los componentes consumen funciones o hooks personalizados (`useProductos`).
- **URL Base:** `import.meta.env.VITE_API_URL` contiene **solo el origen** (ej. `http://localhost:3000`). `api.js` antepone `/api/...`.
- **Estados obligatorios:** los componentes que consumen la API (ej. `GET /api/productos`) deben manejar estados de *carga* y *error*, además de *vacío* y *éxito*, con copy alineado a la marca.

### 4.B JavaScript Universal y Prácticas en React
- **Estándares modernos:** Usa `const` y `let`. Emplea funciones utilitarias de array estables (`forEach`, `map`, `filter`).
- **Manejo de React:** Utiliza hooks nativos (`useState`, `useEffect`, `useRef`).
- **Renderizado de listas:** Utilizar `.map()` con `keys` únicas para iterar datos.
- **Detalle de producto:** Mostrar mediante renderizado condicional.
- **Formularios:** Formulario de contacto debe ser controlado con `useState`.
- **Animaciones por Scroll:** Usa la API nativa de `IntersectionObserver` dentro de un hook o `useEffect` para activar clases de transición al hacer scroll.
- **Movimiento Reducido:** Verifica `window.matchMedia('(prefers-reduced-motion: reduce)').matches` o utiliza la variante `motion-reduce:` de Tailwind CSS para desactivar o suavizar animaciones.

### 4.C Imágenes: locales y de backend
- **Locales (Marca):** `client/src/assets/images/`. Importar directamente en el JSX.
- **Backend (Contenido):** El campo `imagen` de la API devuelve solo el nombre del archivo. Usar la función helper `getImageUrl(imagen)` de `api.js`.
- **Fallback:** Si `imagen` no carga o la API falla, renderizar un contenedor estilizado con fondo `bg-alabastro` o la imagen de respaldo `src/assets/images/sin-imagen.jpg`.

## 5. Estructura del front

```text
src/
├── components/            // SOLO lo compartido entre páginas
│   ├── Navbar/
│   ├── Footer/
│   ├── Button/
│   └── StatItem/
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx       // la página que compone las secciones
│   │   └── sections/
│   │       ├── Hero/
│   ├── Productos/
│   └── Contacto/
```

### Explicación de Directorios

- **`src/components/`**: Componentes globales reutilizables. Solo elementos que aparecen en múltiples vistas (ej. Navbar, Footer, botones genéricos).
- **`src/pages/`**: Vistas principales. Cada subcarpeta representa una ruta o página completa.
- **`src/pages/[NombrePagina]/`**: Carpeta principal de una vista (ej. `Home`, `Productos`, `Contacto`). Ensambla la página en su archivo principal (ej. `Home.jsx`).
- **`src/pages/[NombrePagina]/sections/`**: Secciones exclusivas de esa página. Toda página compleja debe aislar sus bloques visuales aquí para mantener su archivo principal limpio y manejable.

## 5. Protocolo de Pensamiento del Agente

Antes de proponer o escribir cualquier bloque de código o componente en React, ejecutá estas 5 preguntas de autoevaluación interna:

1. **¿Cumple estrictamente el Manual de Marca?** ¿Los colores aplicados coinciden con los hexadecimales del manual? ¿Se respetó la tabla de contraste de la sección 3.B (verde-salvia y vara-de-oro nunca como color de texto)? ¿La jerarquía y fuentes usadas respetan las pautas de Inter y Playfair Display?
2. **¿Evoca la esencia Mid-Century Modern?** ¿El diseño transmite un minimalismo cálido con foco en la madera y formas orgánicas, o se parece a una plantilla de e-commerce genérica?
3. **¿Suena a Hermanos Jota?** ¿El copy generado sigue los ejemplos de microcopy de la sección 3.A, o cae en clichés corporativos genéricos?
4. **¿Es compatible y de alto rendimiento?** ¿Las APIs de JS y propiedades de CSS elegidas están ampliamente soportadas en navegadores antiguos y modernos?
5. **¿Es adaptable?** ¿Cómo se reorganizará este componente de cuadrícula o este menú de navegación en pantallas táctiles verticales pequeñas?

## 6. Criterio de Aceptación

Antes de entregar una tarea o dar un componente por completado, verificá que:

1. El código no produzca errores ni warnings en la consola del navegador o durante `npm run build`.
2. El contraste entre texto y fondo cumpla con el estándar WCAG AA (mínimo 4.5:1 para texto normal, 3:1 para texto grande ≥24px o bold ≥19px), respetando la tabla de la sección 3.B.
3. Las animaciones de scroll respeten `prefers-reduced-motion`.
4. Las fuentes carguen con `@fontsource` sin bloquear el renderizado inicial.
5. El formulario de contacto sea completamente navegable por teclado y accesible para lectores de pantalla.