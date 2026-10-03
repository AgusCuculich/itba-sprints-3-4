import { Link } from 'react-router'
import { HeroStats } from './HeroStats'
import './HeroContent.css'
const HeroActions = () => (
  <div className="hero__actions">
    <Link to="/productos" className="btn-primario">Explorar Catálogo</Link>
    <Link to="/contacto" className="btn-secundario">Conocer el Taller</Link>
  </div>
)

export const HeroContent = () => (
  <div className="hero__content">
    <span className="hero__tagline">Mobiliario de Autor & Diseño Contemporáneo</span>
    <h1 id="hero-title" className="hero__title">
      Diseño con alma,<br />maderas con historia
    </h1>
    <p className="hero__subtitle">
      Creamos piezas exclusivas fabricadas artesanalmente con maderas macizas
      recuperadas y acabados nobles. Dale vida y personalidad única a cada
      rincón de tu hogar.
    </p>
    <HeroActions />
    <HeroStats />
  </div>
)