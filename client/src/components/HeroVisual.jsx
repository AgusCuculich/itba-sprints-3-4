import { HeroCard } from './HeroCard'
import { HERO_CARDS, SPARKLES_COUNT } from './hero.data'
import './HeroVisual.css'

const HeroSparkles = () => (
  <div aria-hidden="true">
    {Array.from({ length: SPARKLES_COUNT }, (_, i) => (
      <span key={i} className={`floating-sparkle floating-sparkle--${i + 1}`}>
        ✦
      </span>
    ))}
  </div>
)

export const HeroVisual = () => (
  <div className="hero__visual">
    {HERO_CARDS.map(({ position, src, alt }, i) => (
      <HeroCard key={position} position={position} src={src} alt={alt} priority={i === 0} />
    ))}
    <HeroSparkles />
  </div>
)