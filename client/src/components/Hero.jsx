import './Hero.css'
import { HeroContent } from './HeroContent'
import { HeroVisual } from './HeroVisual'

export const Hero = () => (
  <section className="hero contenedor" aria-labelledby="hero-title">
    <HeroContent />
    <HeroVisual />
  </section>
)