import React, { useState } from 'react';

export default function ProductDetail({ product, onBack, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const { title, category, tagline, image, description, specs, price } = product;

  return (
    <main className="product-page-main">
      <div className="product-page-container">

        {/* Migas de pan de navegación interna por estado */}
        <nav className="breadcrumbs" aria-label="Ruta de navegación">
          <button onClick={onBack} className="breadcrumb-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Inicio</button>
          <span className="breadcrumb-separator">/</span>
          <button onClick={onBack} className="breadcrumb-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Productos</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current" aria-current="page">{title}</span>
        </nav>

        <section className="product-detail-section" aria-labelledby="product-title">
          <div className="product-detail-layout">

            <div className="product-media-column">
              <div className="product-main-image-container">
                <img src={image} alt={title} className="product-main-image" id="main-product-image" />
              </div>
            </div>

            <div className="product-info-column">
              <header className="product-header">
                <span className="product-category">{category}</span>
                <span className="producto-tagline">{tagline}</span>
                <h1 id="product-title" className="product-title-detail">{title}</h1>
                <p className="product-price-detail">${price.toLocaleString('es-AR')}</p>
              </header>

              <section className="product-block product-description-block">
                <h2 className="product-block-title">Descripción</h2>
                <p className="product-description-text">{description}</p>
              </section>

              <section className="product-block product-specs-block">
                <h2 className="product-block-title">Detalles y Especificaciones</h2>
                <dl className="product-specs-dl">
                  <div className="spec-row"><dt>Medidas:</dt><dd>{specs.medidas}</dd></div>
                  <div className="spec-row"><dt>Materiales:</dt><dd>{specs.materiales}</dd></div>
                  <div className="spec-row"><dt>Acabado:</dt><dd>{specs.acabado}</dd></div>
                  <div className="spec-row spec-warranty"><dt>Garantía:</dt><dd>{specs.garantia}</dd></div>
                </dl>
              </section>

              <div className="product-actions-block">
                <div className="quantity-selector">
                  <label htmlFor="product-quantity" className="quantity-label">Cantidad:</label>
                  <input
                    type="number"
                    id="product-quantity"
                    className="quantity-input"
                    value={quantity}
                    min="1"
                    max="10"
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <button
                  type="button"
                  className="btn-primary btn-purchase"
                  onClick={() => onAddToCart(product, quantity)}
                >
                  Añadir al Carrito
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}