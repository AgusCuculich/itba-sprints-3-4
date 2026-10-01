import React, { useState } from 'react';
import { productosData } from './data/products';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

export default function App() {
  // Estado para controlar qué vista se muestra ("catalog" o "detail")
  const [currentView, setCurrentView] = useState('catalog');
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Función callback para ir al detalle (Sube la acción del hijo al padre)
  const handleViewDetail = (id) => {
    setSelectedProductId(id);
    setCurrentView('detail');
  };

  // Función para volver al catálogo principal
  const handleBackToCatalog = () => {
    setCurrentView('catalog');
    setSelectedProductId(null);
  };

  // Buscar el producto seleccionado para pasarlo al detalle
  const productToDetail = productosData.find(p => p.id === selectedProductId);

  const handleAddToCart = (product, quantity) => {
    alert(`¡Se añadió ${quantity} unidad(es) de "${product.title}" al carrito!`);
  };

  return (
    <div className="App">
      {/* Renderizado condicional por estado (Sustituto de React Router) */}
      {currentView === 'catalog' && (
        <ProductList
          products={productosData}
          onViewDetail={handleViewDetail}
        />
      )}

      {currentView === 'detail' && (
        <ProductDetail
          product={productToDetail}
          onBack={handleBackToCatalog}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}