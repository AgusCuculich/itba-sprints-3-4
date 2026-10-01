import React from 'react';

export default function ProductCard({ product, onViewDetail }) {
  const { id, title, category, price, tagline, image } = product;

  return (
    <article className="product-card" data-id={id} data-category={category}>
      <div className="product-image-container">
        <img
          src={image}
          alt={`${title} - Mueblería Hermanos Jota`}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <span className="product-category">{category}</span>
        <span className="producto-tagline">{tagline}</span>
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price.toLocaleString('es-AR')}</p>
        <button
          onClick={() => onViewDetail(id)}
          className="product-link"
          aria-label={`Ver detalle de ${title}`}
        >
          Ver Detalle
        </button>
      </div>
    </article>
  );
}