import { Boton } from '../Boton/Boton';
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
                <Boton 
                    to={`/producto/${producto.id}`}
                    aria-label={`Conocer más detalles sobre ${producto.nombre}`}
                >
                    Conocer más detalles
                </Boton>
            </div>
        </article>
    );
};