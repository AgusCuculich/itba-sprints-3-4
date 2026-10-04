import { Link } from 'react-router';
import './Boton.css'

export const Boton = ({
    to,
    variante = 'primario',
    className = '',
    children,
    ...resto
}) => {
    const clases = `btn-${variante} ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={clases} {...resto}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={clases} {...resto}>
            {children}
        </button>
    );
};