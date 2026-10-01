import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { productos } from '../datos-productos.js';
import './ProductList.css'

export const ProductList = ({ limit }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Simulamos una carga asincrónica para mantener la lógica de tu código original
        const cargarDatosAsync = async () => {
            try {
                // Simula el delay de una llamada a API
                await new Promise(resolve => setTimeout(resolve, 1000));
                setListaProductos(productos);
                setCargando(false);
            } catch (err) {
                setError(true);
                setCargando(false);
            }
        };

        cargarDatosAsync();
    }, []);

    return (
        <section className="featured">
            <div className="featured__header">
                <h2 className="featured__title">PIEZAS DESTACADAS</h2>
                <p className="featured__subtitle">Selección del taller para transformar tu espacio.</p>
            </div>

            <section id="contenedor-productos" className="seccion-productos contenedor" aria-live="polite">
                {cargando && <p className="mensaje-carga">Las piezas están saliendo del taller...</p>}
                
                {error && (
                    <p className="mensaje-vacio">
                        Tuvimos un inconveniente al abrir el taller virtual. Por favor, recargá la página.
                    </p>
                )}

                {!cargando && !error && listaProductos.length === 0 && (
                    <p className="mensaje-vacio">
                        Todavía no elegiste ninguna pieza. Están esperando en el taller.
                    </p>
                )}

                {!cargando && !error && listaProductos.length > 0 && (
                    <div className="grilla-productos"> {/* Puedes ajustar la clase contenedora si usás grid/flex */}
                        {(limit ? listaProductos.slice(0, limit) : listaProductos).map((producto) => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                )}
            </section>
        </section>
    );
};