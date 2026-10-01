import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onViewDetail }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado de elementos por categoría y barra de búsqueda
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="catalog-main">
      <div className="catalog-container">

        <header className="catalog-header">
          <h1 className="catalog-title">Colección de Muebles</h1>
          <p className="catalog-subtitle">
            El redescubrimiento del diseño artesanal en maderas nativas seleccionadas.
          </p>
        </header>

        {/* Barra de Filtros y Búsqueda */}
        <section className="catalog-toolbar" aria-label="Filtros y búsqueda del catálogo">
          <div className="filter-group" role="group" aria-label="Filtrar por categoría">
            <button type="button" className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>Todos</button>
            <button type="button" className={`filter-btn ${selectedCategory === 'Living' ? 'active' : ''}`} onClick={() => setSelectedCategory('Living')}>Living</button>
            <button type="button" className={`filter-btn ${selectedCategory === 'Comedor' ? 'active' : ''}`} onClick={() => setSelectedCategory('Comedor')}>Comedor</button>
            <button type="button" className={`filter-btn ${selectedCategory === 'Estudio y Oficina' ? 'active' : ''}`} onClick={() => setSelectedCategory('Estudio y Oficina')}>Estudio y Oficina</button>
            <button type="button" className={`filter-btn ${selectedCategory === 'Dormitorio' ? 'active' : ''}`} onClick={() => setSelectedCategory('Dormitorio')}>Dormitorio</button>
          </div>

          <div className="toolbar-actions">
            <div className="search-box">
              <input
                type="search"
                className="catalog-search-input"
                placeholder="Buscar mueble..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar muebles en el catálogo"
              />
            </div>
            <div className="catalog-status">
              <span className="catalog-count">Mostrando <strong>{filteredProducts.length} piezas</strong> exclusivas</span>
            </div>
          </div>
        </section>

        {/* Grilla iterada con .map() y key obligatoria (Exigencia de Cátedra) */}
        <section className="catalog-grid-section" aria-label="Listado de productos">
          <div className="catalog-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetail={onViewDetail}
                />
              ))
            ) : (
              <p className="no-results">No se encontraron piezas que coincidan con tu búsqueda.</p>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}