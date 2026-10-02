import { Link } from 'react-router';
import './ProductCard.css'
const IMAGE_URL = "http://localhost:3000/images/";

export const ProductCard = ({ producto }) => {
    const urlImagen = `${IMAGE_URL}${producto.imagen}`;

    return (
        <article className="tarjeta-producto">
            <div className="contenedor-imagen">
                <img
                    src={urlImagen}
                    alt={producto.nombre}
                    className="imagen-producto"
                    loading="lazy"
                />
                {producto.sustentable && (
                    <span className="etiqueta-sustentable">Eco-friendly</span>
                )}
            </div>
            <div className="info-producto">
                <h2 className="nombre-producto">{producto.nombre}</h2>
                <Link 
                    to={`/producto/${producto.id}`} 
                    className="btn-primario"
                    aria-label={`Conocer más detalles sobre ${producto.nombre}`}
                >
                    Conocer más detalles
                </Link>
            </div>
        </article>
    );
};