import './ControlCantidad.css'

const MAX_CANTIDAD = 10;

export const ControlCantidad = ({ cantidad, onChange }) => (
    <div className="control-cantidad">
        <button
            type="button"
            className="btn-cantidad"
            onClick={() => onChange(Math.max(1, cantidad - 1))}
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
            onClick={() => onChange(Math.min(MAX_CANTIDAD, cantidad + 1))}
            aria-label="Aumentar cantidad"
        >
            +
        </button>
    </div>
);