import './EspecificacionesTecnicas.css'
// "tipoDeMadera" -> "Tipo De Madera"
const etiquetaLegible = (clave) =>
    clave.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim();

export const EspecificacionesTecnicas = ({ especificaciones }) => {
    if (!especificaciones || typeof especificaciones !== 'object') return null;

    return (
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
    );
};