import { useState } from 'react';
import { ProductList } from '../../components/ProductList/ProductList';
import './Productos.css';

export const Productos = () => {
    // Estado para controlar lo que el usuario escribe en el input
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    return (
        <main>
            <section className="productos-header">
                <h1 className="productos-title">
                    Nuestro Catálogo
                </h1>
                <p className="productos-description">
                    Explorá todas nuestras piezas. Elaboradas con maderas nativas y una atención artesanal al detalle.
                </p>

                {/* Contenedor de la barra de búsqueda */}
                <div className="productos-search-container">
                    <label htmlFor="buscador" className="productos-search-label">
                        Buscá la pieza ideal para tu hogar
                    </label>
                    <input
                        type="text"
                        id="buscador"
                        placeholder="Ej. Sillón Algarrobo, Petiribí..."
                        value={terminoBusqueda}
                        onChange={(e) => setTerminoBusqueda(e.target.value)}
                        className="productos-search-input"
                    />
                </div>
            </section>

            {/* Le pasamos lo que el usuario escribe a la lista de productos */}
            <ProductList terminoBusqueda={terminoBusqueda} />
        </main>
    );
};