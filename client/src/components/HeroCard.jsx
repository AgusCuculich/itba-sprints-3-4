import './HeroCard.css'

export const HeroCard = ({ position, src, alt, priority = false }) => (
  <div className={`hero-card hero-card--${position}`}>
    <img
      src={src}
      alt={alt}
      className="hero-card__img"
      fetchPriority={priority ? 'high' : undefined}
    />
  </div>
)