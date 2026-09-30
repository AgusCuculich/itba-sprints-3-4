import { StatItem } from './StatItem'
import { FOUNDING_YEAR } from './hero.data'
import './HeroStats.css'

export const HeroStats = () => {
  const stats = [
    { valor: String(new Date().getFullYear() - FOUNDING_YEAR), texto: 'Años de Oficio' },
    { valor: 'FSC®', texto: 'Madera Nativa Argentina' },
    { valor: '300+', texto: 'Piezas Creadas' },
  ]

  return (
    <ul className="hero__stats">
      {stats.map(({ valor, texto }) => (
        <li key={texto}>
          <StatItem valor={valor} texto={texto} />
        </li>
      ))}
    </ul>
  )
}