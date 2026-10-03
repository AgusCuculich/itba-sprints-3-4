import { Hero } from './sections/Hero/Hero'
import { ProductList } from '../../components/ProductList/ProductList'

export const Home = () => {
  return (
    <main>
      <Hero />
      <ProductList limit={3}/>
    </main>
  )
}