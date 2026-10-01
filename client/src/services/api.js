/**
 * Servicio API para Mueblería Hermanos Jota
 * Gestiona peticiones HTTP al backend de Express y resolución de URLs de imágenes.
 */

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/+$/, '');

/**
 * Obtiene la URL absoluta para una imagen de producto.
 * @param {string} imagePath - Nombre del archivo de imagen o ruta relativa.
 * @returns {string} URL completa de la imagen.
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return '/placeholder-furniture.svg';
  }

  // Si ya es una URL absoluta (http/https), se retorna directamente
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  // Si la ruta ya incluye el prefijo de carpeta
  if (imagePath.startsWith('/images/')) {
    return `${API_BASE_URL}${imagePath}`;
  }

  if (imagePath.startsWith('/')) {
    return `${API_BASE_URL}${imagePath}`;
  }

  // Por defecto, las imágenes estáticas del backend se sirven bajo /images/
  return `${API_BASE_URL}/images/${imagePath}`;
};

/**
 * Formatea un monto numérico a formato de moneda argentina (ARS).
 * @param {number} amount - Precio numérico.
 * @returns {string} Precio formateado (ej. "$ 380.000").
 */
export const formatPrice = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '$ 0';
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Obtiene el catálogo completo de productos desde /api/productos
 * @returns {Promise<Array>} Lista de productos
 */
export const getProductos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/productos`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor (${response.status}): ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'No se pudieron obtener los productos');
    }

    return result.data || [];
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

/**
 * Obtiene el detalle de un producto específico por su ID (slug).
 * @param {string} id - Identificador único del producto (ej: 'aparador-uspallata')
 * @returns {Promise<Object>} Datos del producto
 */
export const getProductoById = async (id) => {
  if (!id) {
    throw new Error('Se requiere un identificador de producto válido.');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/productos/${encodeURIComponent(id)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.status === 404) {
      throw new Error('La pieza que buscás no existe o ya no se encuentra disponible.');
    }

    if (!response.ok) {
      throw new Error(`Error al consultar el producto (${response.status}): ${response.statusText}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Error al cargar el detalle del producto');
    }

    return result.data;
  } catch (error) {
    console.error(`Error al obtener el producto con id "${id}":`, error);
    throw error;
  }
};

// Aliases en inglés para flexibilidad de importación
export const getProducts = getProductos;
export const getProductById = getProductoById;
export const API_URL = API_BASE_URL;
