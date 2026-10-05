import { ProductList } from '../../../../components/ProductList/ProductList';
import './Featured.css'

export const Featured = () => {
    return (
        <section className="featured">
            <div className="featured__header">
                <h2 className="featured__title">PIEZAS DESTACADAS</h2>
                <p className="featured__subtitle">Selección del taller para transformar tu espacio.</p>
            </div>
            <ProductList limit={3} />
        </section>
    );
};