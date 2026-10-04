import { Boton } from '../../../../components/Boton/Boton'
import { HeroStats } from './HeroStats'
import './HeroContent.css'
const HeroActions = () => (
  <div className="hero__actions">
    <Boton to="/productos">Explorar Catálogo</Boton>
    <Boton to="/contacto" variante="secundario">Conocer el Taller</Boton>
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