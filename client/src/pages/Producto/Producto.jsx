import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { fetchProductById } from '../../services/api.js';
import { Boton } from '../../components/Boton/Boton.jsx';
import './Producto.css';
const IMAGE_URL = "http://localhost:3000/images/";

const MAX_CANTIDAD = 10;

// "tipoDeMadera" -> "Tipo De Madera"
const etiquetaLegible = (clave) =>
    clave.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim();

const PRINCIPIOS = [
    ['Madera certificada FSC', 'Proveniente de bosques responsables argentinos.'],
    ['Prioridad a maderas nativas', 'Algarrobo, quebracho y caldén seleccionados.'],
    ['Bajo impacto ambiental', 'Solo acabados y adhesivos de bajo COV (Compuestos Orgánicos Volátiles).'],
    ['Producción local', 'Proveedores locales dentro del Gran Buenos Aires.'],
    ['Economía circular', '30% mínimo de materiales recuperados o reciclados.'],
    ['Cero plásticos de un solo uso', 'En toda nuestra cadena de valor y empaque.'],
];

const ACABADOS = [
    ['Aceite de lino', '100% natural prensado en frío', 'Muebles de uso diario'],
    ['Cera de abejas', 'Origen local certificado', 'Terminación premium'],
    ['Tintes vegetales', 'Base agua, pigmentos naturales', 'Cuando se requiere color'],
];

const HERENCIA_VIVA = [
    ['Garantía extendida', '10 años en estructura y 5 años en acabados.'],
    ['Servicio de restauración', 'Recuperamos y renovamos piezas antiguas.'],
    ['Taller de cuidados', 'Capacitación gratuita para clientes.'],
    ['Recompra garantizada', 'Hasta 40% del valor en piezas bien cuidadas.'],
    ['Certificado de trazabilidad', 'Origen de cada material utilizado.'],
];

const ListaConTitulos = ({ items }) => (
    <ul className="acordeon-lista">
        {items.map(([titulo, texto]) => (
            <li key={titulo}><strong>{titulo}:</strong> {texto}</li>
        ))}
    </ul>
);

const Acordeones = () => (
    <section className="seccion-acordeones" aria-label="Información de sustentabilidad y garantía">
        <details className="acordeon-item" name="acordeon-info">
            <summary className="acordeon-header">
                <h2>Sustentabilidad y Materiales</h2>
                <span className="acordeon-icono" aria-hidden="true"></span>
            </summary>
            <div className="acordeon-contenido">
                <p className="acordeon-intro">
                    Nuestro compromiso con el medio ambiente y las futuras generaciones guía cada decisión en nuestro proceso creativo y productivo.
                </p>

                <h3 className="acordeon-subtitulo">Principios de Abastecimiento</h3>
                <ListaConTitulos items={PRINCIPIOS} />

                <h3 className="acordeon-subtitulo">Acabados Naturales</h3>
                <div className="tabla-acabados-wrapper">
                    <table className="tabla-acordeon">
                        <thead>
                            <tr>
                                <th>Tipo de Acabado</th>
                                <th>Composición</th>
                                <th>Aplicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ACABADOS.map(([tipo, composicion, aplicacion]) => (
                                <tr key={tipo}>
                                    <td>{tipo}</td>
                                    <td>{composicion}</td>
                                    <td>{aplicacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </details>

        <details className="acordeon-item" name="acordeon-info">
            <summary className="acordeon-header">
                <h2>Programa Herencia Viva</h2>
                <span className="acordeon-icono" aria-hidden="true"></span>
            </summary>
            <div className="acordeon-contenido">
                <p className="acordeon-intro">
                    Diseñamos piezas para que trasciendan generaciones con nuestro compromiso integral de longevidad y preservación del oficio.
                </p>
                <ListaConTitulos items={HERENCIA_VIVA} />
            </div>
        </details>
    </section>
);

export const Producto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const controller = new AbortController();
        setCargando(true);
        setError(false);

        fetchProductById(id, { signal: controller.signal })
            .then(setProducto)
            .catch((err) => {
                if (err.name !== 'AbortError') setError(true);
            })
            .finally(() => {
                if (!controller.signal.aborted) setCargando(false);
            });

        return () => controller.abort();
    }, [id]);

    useEffect(() => {
        if (!producto) return;
        const tituloAnterior = document.title;
        document.title = `${producto.nombre} - Hermanos Jota`;
        return () => { document.title = tituloAnterior; };
    }, [producto]);

    if (cargando) {
        return (
            <main className="main-detalle-producto">
                <section className="contenedor-detalle">
                    <p className="mensaje-carga" role="status">Cargando detalles de la pieza...</p>
                </section>
            </main>
        );
    }

    if (error || !producto) {
        return (
            <main className="main-detalle-producto">
                <section className="contenedor-detalle">
                    <div className="mensaje-estado-detalle" role="alert">
                        <h2>No encontramos la pieza seleccionada</h2>
                        <p className="detalle-producto">
                            Podés explorar todas las piezas disponibles en nuestro catálogo.
                        </p>
                        <Boton to="/productos">Volver al Catálogo</Boton>
                    </div>
                </section>
            </main>
        );
    }

    const { nombre, imagen, precio, descripcion, especificaciones, sustentable } = producto;
    const materialAlt = especificaciones?.materiales || especificaciones?.estructura || 'diseño exclusivo';

    return (
        <main className="main-detalle-producto">
            <nav className="migas-de-pan" aria-label="Ruta de navegación">
                <ul className="lista-migas">
                    <li><Link to="/" className="miga-link">Inicio</Link></li>
                    <li className="miga-separador" aria-hidden="true">/</li>
                    <li><Link to="/productos" className="miga-link">Catálogo</Link></li>
                    <li className="miga-separador" aria-hidden="true">/</li>
                    <li className="miga-actual" aria-current="page">{nombre}</li>
                </ul>
            </nav>

            <section className="contenedor-detalle">
                <div className="columna-imagen-detalle">
                    <div className="envoltura-imagen-grande">
                        <img
                            src={`${IMAGE_URL}${imagen}`}
                            alt={`${nombre} - ${materialAlt}`}
                            className="imagen-detalle-grande"
                        />
                        {sustentable && (
                            <span className="badge-sustentabilidad">Certificación FSC / Eco</span>
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
                            <div className="control-cantidad">
                                <button
                                    type="button"
                                    className="btn-cantidad"
                                    onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                                    aria-label="Disminuir cantidad"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="input-cantidad"
                                    value={cantidad}
                                    min="1"
                                    max={MAX_CANTIDAD}
                                    readOnly
                                    aria-label="Cantidad"
                                />
                                <button
                                    type="button"
                                    className="btn-cantidad"
                                    onClick={() => setCantidad((c) => Math.min(MAX_CANTIDAD, c + 1))}
                                    aria-label="Aumentar cantidad"
                                >
                                    +
                                </button>
                            </div>

                            {/* TODO: conectar con el carrito */}
                            <Boton className="btn-compra-detalle">Sumalo a tu hogar</Boton>
                        </div>
                    </div>

                    <div className="bloque-contenido-adicional">
                        {descripcion && <p className="descripcion-producto-detalle">{descripcion}</p>}

                        {especificaciones && typeof especificaciones === 'object' && (
                            <section className="seccion-especificaciones" aria-labelledby="titulo-especificaciones">
                                <h2 id="titulo-especificaciones">Especificaciones Técnicas</h2>
                                <dl className="lista-especificaciones">
                                    {Object.entries(especificaciones).map(([clave, valor]) => (
                                        <div className="item-especificacion" key={clave}>
                                            <dt className="label-especificacion">{etiquetaLegible(clave)}:</dt>
                                            <dd className="valor-especificacion">{valor}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        )}
                    </div>
                </div>
            </section>

            <Acordeones />
        </main>
    );
};