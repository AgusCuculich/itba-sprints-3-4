import { Link, NavLink } from 'react-router'
import './NavBar.css'

// Links de navegación definidos como datos: agregar una página nueva
// es sumar una línea acá, en vez de copiar un bloque <li> entero.
const LINKS = [
  { href: '/', texto: 'Home' },
  { href: '/productos', texto: 'Catálogo' },
  { href: '/contacto', texto: 'Contacto' },
]

// NavBar solo muestra la navegación y el botón del carrito con su contador.
// El panel del carrito es otro componente (PanelCarrito) que maneja el Layout.
export const NavBar = ({ contador, onAbrirCarrito }) => {
  return (
    <header className="header-principal">
      <div className="header-contenido">
        <Link to="/" className="logo-link">
          <img className="img-logo" src="http://localhost:3000/images/logo.svg" alt="Hermanos Jota" />
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

        {/* Botón del carrito: avisa al padre que hay que abrir el panel */}
        <button
          type="button"
          className="contenedor-carrito"
          aria-label="Carrito de compras"
          onClick={onAbrirCarrito}
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
          {contador > 0 && (
            <span className="badge-carrito" id="contador-carrito">
              {contador}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}