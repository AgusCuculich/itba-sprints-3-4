import React from 'react';
import './Footer.css'; // Assuming styles are here based on active documents

/**
 * Componente Web Reutilizable: Footer - Hermanos Jota
 * Cumple con los requerimientos de diseño Mid-Century Modern y accesibilidad:
 * 1) Ubicación del taller con horarios de atención.
 * 2) Formulario inline de suscripción a newsletter (input y botón en la misma línea).
 * 3) Lista de canales digitales con ícono/logo SVG a la izquierda y texto a la derecha.
 */
export const Footer = () => {
  return (
    <footer className="footer-principal">
      <div className="contenedor footer-contenido">
        
        {/* 1. Ubicación del Taller y Horarios */}
        <section className="footer-bloque footer-taller" aria-labelledby="footer-taller-titulo">
          <h3 id="footer-taller-titulo" className="footer-titulo">Casa Taller</h3>
          <address className="footer-direccion">
            <p>Av. San Juan 2847</p>
            <p>Barrio de San Cristóbal, CABA</p>
          </address>
          <div className="footer-horarios">
            <h4 className="footer-subtitulo">Horarios de atención</h4>
            <p>Lunes a Viernes: 10:00 - 19:00</p>
            <p>Sábados: 10:00 - 14:00</p>
          </div>
        </section>

        {/* 2. Formulario Inline de Suscripción a Newsletter */}
        <section className="footer-bloque footer-newsletter" aria-labelledby="footer-newsletter-titulo">
          <h3 id="footer-newsletter-titulo" className="footer-titulo">El Taller en tu Correo</h3>
          <p className="footer-texto">Novedades de nuevas piezas, procesos de ebanistería y notas de diseño.</p>
          <form className="formulario-newsletter" id="form-newsletter" noValidate>
            <div className="newsletter-inline">
              <label htmlFor="newsletter-email" className="sr-only"></label>
              <input 
                type="email" 
                id="newsletter-email" 
                name="email" 
                className="newsletter-input" 
                placeholder="Tu correo electrónico..."
              />
              <button type="submit" className="btn-secundario">Suscribirme</button>
            </div>
          </form>
        </section>

        {/* 3. Canales Digitales con logo a la izquierda y usuario/canal a la derecha */}
        <section className="footer-bloque footer-canales" aria-labelledby="footer-canales-titulo">
          <h3 id="footer-canales-titulo" className="footer-titulo">Canales Digitales</h3>
          <ul className="lista-canales">
            <li className="item-canal">
              <span className="canal-icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </span>
              <span className="canal-texto">www.hermanosjota.com.ar</span>
            </li>

            <li className="item-canal">
              <span className="canal-icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <span className="canal-texto">info@hermanosjota.com.ar</span>
            </li>

            <li className="item-canal">
              <span className="canal-icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </span>
              <span className="canal-texto">ventas@hermanosjota.com.ar</span>
            </li>

            <li className="item-canal">
              <span className="canal-icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </span>
              <span className="canal-texto">@hermanosjota_ba</span>
            </li>

            <li className="item-canal">
              <span className="canal-icono" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                </svg>
              </span>
              <span className="canal-texto">+54 11 4567-8900</span>
            </li>
          </ul>
        </section>

      </div>

      {/* Barra inferior de copyright y herencia */}
      <div className="footer-creditos">
        <p className="footer-creditos-texto">&copy; {new Date().getFullYear()} Hermanos Jota</p>
      </div>
    </footer>
  );
};