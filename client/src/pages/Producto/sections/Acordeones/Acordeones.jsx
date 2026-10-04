import './Acordeones.css'

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

export const Acordeones = () => (
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