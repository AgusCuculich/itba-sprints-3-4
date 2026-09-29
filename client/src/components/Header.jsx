import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import './Header.css'

// Links de navegación definidos como datos: agregar una página nueva
// es sumar una línea acá, en vez de copiar un bloque <li> entero.
const LINKS = [
  { href: '/', texto: 'Home' },
  { href: '/productos', texto: 'Catálogo' },
  { href: '/contacto', texto: 'Contacto' },
]

// Lee el carrito de localStorage. Si no existe o el JSON está roto, devuelve [].
// Antes esta lógica estaba duplicada (en el useState y en el useEffect).
const leerCarrito = () => {
  try {
    return JSON.parse(localStorage.getItem('carrito')) || []
  } catch {
    return []
  }
}

export const Header = () => {
  // Controla si el panel lateral (drawer) del carrito está abierto
  const [panelAbierto, setPanelAbierto] = useState(false)

  // Pasamos la función (sin ejecutarla) para que React la llame solo en el primer render
  const [carrito, setCarrito] = useState(leerCarrito)

  // Mantiene el estado sincronizado con localStorage:
  // - 'carritoActualizado': evento propio, avisa cambios hechos en esta misma pestaña
  //   (otras partes de la app, como el catálogo, lo disparan al agregar productos)
  // - 'storage': evento nativo, avisa cambios hechos desde OTRA pestaña
  useEffect(() => {
    const sincronizar = () => setCarrito(leerCarrito())

    window.addEventListener('carritoActualizado', sincronizar)
    window.addEventListener('storage', sincronizar)

    // Limpieza al desmontar el componente, para no dejar listeners colgados
    return () => {
      window.removeEventListener('carritoActualizado', sincronizar)
      window.removeEventListener('storage', sincronizar)
    }
  }, [])

  // Guarda en localStorage y avisa. No hace falta llamar a setCarrito acá:
  // el evento disparado abajo ejecuta `sincronizar`, que actualiza el estado.
  // Así localStorage es la única fuente de verdad.
  const guardarCarrito = (nuevoCarrito) => {
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
    window.dispatchEvent(new Event('carritoActualizado'))
  }

  // Suma o resta unidades a un producto; si queda en 0 o menos, se elimina
  const modificarCantidad = (id, cambio) => {
    guardarCarrito(
      carrito
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + cambio } : item))
        .filter((item) => item.cantidad > 0)
    )
  }

  // Quita el producto completo sin importar la cantidad
  const eliminarDelCarrito = (id) => {
    guardarCarrito(carrito.filter((item) => item.id !== id))
  }

  // Totales calculados en cada render a partir del carrito (no hace falta guardarlos en estado)
  const totalItems = carrito.reduce((acc, item) => acc + (item.cantidad || 0), 0)
  const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio || 0) * (item.cantidad || 0), 0)

  return (
    <>
      <header className="header-principal">
        <div className="header-contenido">
          <Link to="/" className="logo-link">
            <img className="img-logo" src="./assets/images/logo.svg" alt="Hermanos Jota" />
          </Link>

          <nav className="navegacion-principal">
            <ul className="lista-nav">
              {/* NavLink detecta solo si la ruta coincide (isActive); "end" evita que "/" quede activo en todas las páginas */}
              {LINKS.map(({ href, texto }) => (
                <li key={href}>
                  <NavLink to={href} end className={({ isActive }) => `link-nav ${isActive ? 'activo' : ''}`}>
                    {texto}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón del carrito: abre el panel lateral */}
          <button
            type="button"
            className="contenedor-carrito"
            aria-label="Carrito de compras"
            onClick={() => setPanelAbierto(true)}
          >
            {/* Ícono de carrito (SVG inline para poder colorearlo con currentColor) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>

            {/* El contador solo se muestra si hay productos */}
            {totalItems > 0 && (
              <span className="badge-carrito" id="contador-carrito">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Fondo oscuro detrás del panel: al hacer click, lo cierra */}
      <div
        className={`overlay-carrito ${panelAbierto ? 'abierto' : ''}`}
        onClick={() => setPanelAbierto(false)}
        aria-hidden="true"
      />

      {/* Panel lateral del carrito; la clase "abierto" dispara la animación por CSS */}
      <aside className={`panel-carrito ${panelAbierto ? 'abierto' : ''}`} aria-hidden={!panelAbierto}>
        <div className="header-panel">
          <h2>Tu selección</h2>
          <button
            type="button"
            className="btn-cerrar"
            aria-label="Cerrar carrito"
            onClick={() => setPanelAbierto(false)}
          >
            ×
          </button>
        </div>

        <div className="contenido-carrito">
          {carrito.length === 0 ? (
            // Estado vacío
            <p className="mensaje-vacio-carrito">
              Todavía no elegiste ninguna pieza. Están esperando en el taller.
            </p>
          ) : (
            // Un bloque por cada producto del carrito
            carrito.map((item) => (
              <div key={item.id} className="item-carrito">
                {/* Acepta URL completa o nombre de archivo local; si falla la carga, se oculta */}
                <img
                  src={item.imagen?.startsWith('http') ? item.imagen : `/assets/images/${item.imagen || 'sin-imagen.jpg'}`}
                  alt={item.nombre}
                  className="item-imagen"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />

                <div className="item-detalles">
                  <h3 className="item-nombre">{item.nombre}</h3>
                  <p className="item-precio">${item.precio} c/u</p>

                  <div className="item-controles">
                    <div className="controles-cantidad">
                      <button
                        type="button"
                        className="btn-cantidad"
                        onClick={() => modificarCantidad(item.id, -1)}
                        aria-label="Restar una unidad"
                      >
                        -
                      </button>
                      <span className="cantidad-valor">{item.cantidad}</span>
                      <button
                        type="button"
                        className="btn-cantidad"
                        onClick={() => modificarCantidad(item.id, 1)}
                        aria-label="Sumar una unidad"
                      >
                        +
                      </button>
                    </div>

                    <button type="button" className="btn-eliminar" onClick={() => eliminarDelCarrito(item.id)}>
                      Quitar todo
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pie del panel: total y botón de compra (deshabilitado si el carrito está vacío) */}
        <div className="footer-panel">
          <div className="total-carrito">
            <span>Total:</span>
            <span>${totalPrecio}</span>
          </div>
          {/* El estilo del estado deshabilitado va en el CSS: .btn-primario:disabled { opacity: .6; cursor: not-allowed } */}
          <button type="button" className="btn-primario btn-bloque" disabled={carrito.length === 0}>
            Iniciar compra
          </button>
        </div>
      </aside>
    </>
  )
}