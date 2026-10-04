import { Link } from 'react-router';
import './Breadcrumb.css'

export const Breadcrumb = ({ nombre, desdeInicio = false }) => (
    <nav className="migas-de-pan" aria-label="Ruta de navegación">
        <ul className="lista-migas">
            <li><Link to="/" className="miga-link">Inicio</Link></li>
            <li className="miga-separador" aria-hidden="true">/</li>
            {!desdeInicio && (
                <>
                    <li><Link to="/productos" className="miga-link">Catálogo</Link></li>
                    <li className="miga-separador" aria-hidden="true">/</li>
                </>
            )}
            <li className="miga-actual" aria-current="page">{nombre}</li>
        </ul>
    </nav>
);