import './StatItem.css';

export const StatItem = ({ valor, texto }) => {
    return (
        <div className="stat-item">
            <span className="stat-number">{valor}</span>
            <span className="stat-label">{texto}</span>
        </div>
    )
}