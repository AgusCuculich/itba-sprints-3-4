import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { fetchProducts } from '../../services/api';
import './ProductList.css'

export const ProductList = ({ limit, terminoBusqueda = '' }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const cargarDatosAsync = async () => {
            try {
                const respuesta = await fetchProducts({ signal: controller.signal });
                setListaProductos(respuesta);
                setCargando(false);
            } catch (err) {
                if (err.name === 'AbortError') return;
                setError(true);
                setCargando(false);
            }
        };

        cargarDatosAsync();

        return () => controller.abort();
    }, []);

    const productosFiltrados = listaProductos.filter((prod) => 
        prod.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );

    const productosVisibles = limit ? productosFiltrados.slice(0, limit) : productosFiltrados;

    return (
        <section className="featured">
            <div className="featured__header">
                <h2 className="featured__title">PIEZAS DESTACADAS</h2>
                <p className="featured__subtitle">Selección del taller para transformar tu espacio.</p>
            </div>

            <div id="contenedor-productos" className="seccion-productos contenedor" aria-live="polite">
                {cargando && <p className="mensaje-carga">Las piezas están saliendo del taller...</p>}

                {error && (
                    <p className="mensaje-vacio" role="alert">
                        Tuvimos un inconveniente al abrir el taller virtual. Por favor, recargá la página.
                    </p>
                )}

                {!cargando && !error && productosVisibles.length === 0 && (
                    <p className="mensaje-vacio">
                        Por ahora no hay piezas disponibles en el taller.
                    </p>
                )}

                {!cargando && !error && productosVisibles.length > 0 && (
                    <div className="grilla-productos">
                        {productosVisibles.map((producto) => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};