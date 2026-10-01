import React from 'react';

export default function Navbar({ currentView, onViewChange, cartCount, onOpenCart }) {
  return (
    <header className="main-header">
      <div className="header-container">
        <button 
          onClick={() => onViewChange('catalog')} 
          className="logo" 
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          aria-label="Inicio - Mueblería Hermanos Jota"
        >
          <div className="logo-circle">
            <img src="assets/img/ui/logo.svg" alt="Logo Mueblería Hermanos Jota" />
          </div>
          <span className="logo-text">HERMANOS JOTA</span>
        </button>

        <nav className="main-nav" aria-label="Navegación principal">
          <ul className="nav-list" style={{ display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center', margin: 0 }}>
            <li className="nav-item">
              <button 
                onClick={() => onViewChange('catalog')} 
                className={`nav-link ${currentView === 'catalog' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
              >
                Inicio / Productos
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => alert('Sección de Contacto (Próximamente)')} 
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
              >
                Contacto
              </button>
            </li>
          </ul>

          <button className="btn-cart" onClick={onOpenCart} aria-label="Abrir carrito" style={{ position: 'relative', marginLeft: '15px' }}>
            <svg className="cart-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-badge" id="cart-badge">{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
