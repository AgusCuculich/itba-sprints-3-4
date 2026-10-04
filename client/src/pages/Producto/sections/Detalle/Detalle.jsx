import { useEffect, useState } from 'react';
import { Boton } from '../../../../components/Boton/Boton.jsx';
import { ControlCantidad } from './ControlCantidad.jsx';
import { EspecificacionesTecnicas } from './EspecificacionesTecnicas.jsx';
import './Detalle.css';

const IMAGE_URL = 'http://localhost:3000/images/';

export const Detalle = ({ producto, cantidad, setCantidad, agregarAlCarrito }) => {
    const [agregado, setAgregado] = useState(false);
    const { nombre, imagen, precio, descripcion, especificaciones, sustentable } = producto;
    const materialAlt = especificaciones?.materiales || especificaciones?.estructura || 'diseño exclusivo';

    // El mensaje de confirmación se apaga solo a los 2 segundos
    useEffect(() => {
        if (!agregado) return;
        const timer = setTimeout(() => setAgregado(false), 2000);
        return () => clearTimeout(timer);
    }, [agregado]);

    const handleAgregar = () => {
        const id = producto.id ?? producto._id;
        // Al carrito solo van los campos que usa el panel
        agregarAlCarrito({ id, nombre, precio, imagen }, cantidad);
        setAgregado(true);
    };

    return (
        <section className="contenedor-detalle">
            <div className="columna-imagen-detalle">
                <div className="envoltura-imagen-grande">
                    <img
                        src={`${IMAGE_URL}${imagen}`}
                        alt={`${nombre} - ${materialAlt}`}
                        className="imagen-detalle-grande"
                    />
                    {sustentable && (
                        <span className="etiqueta-sustentable">Certificación FSC / Eco</span>
                    )}
                </div>
            </div>

            <div className="columna-info-detalle">
                <div className="bloque-encabezado-producto">
                    <h1 className="titulo-producto-detalle">{nombre}</h1>
                    {precio ? (
                        <>
                            <div className="precio-producto-detalle">$ {precio.toLocaleString('es-AR')}</div>
                            <p className="cuotas-texto">
                                3 cuotas sin interés de $ {Math.round(precio / 3).toLocaleString('es-AR')}
                            </p>
                        </>
                    ) : (
                        <p className="cuotas-texto">Consultá el precio con el taller.</p>
                    )}

                    <div className="bloque-acciones-compra">
                        <ControlCantidad cantidad={cantidad} onChange={setCantidad} />
                        <Boton className="btn-compra-detalle" onClick={handleAgregar}>
                            {agregado ? '¡Agregado al carrito!' : 'Sumalo a tu hogar'}
                        </Boton>
                    </div>
                </div>

                <div className="bloque-contenido-adicional">
                    {descripcion && <p>{descripcion}</p>}
                    <EspecificacionesTecnicas especificaciones={especificaciones} />
                </div>
            </div>
        </section>
    );
};