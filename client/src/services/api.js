const API_URL = 'http://localhost:3000/api/productos';

export const fetchProducts = async ({ signal } = {}) => {
    const response = await fetch(API_URL, { signal });

    if (!response.ok) {
        throw new Error(`Error ${response.status} al obtener productos`);
    }

    const json = await response.json();
    return json.data;
};

export const fetchProductById = async (id, { signal } = {}) => {
    const response = await fetch(`${API_URL}/${id}`, { signal });

    if (!response.ok) {
        throw new Error(`Error ${response.status} al obtener el producto`);
    }

    const json = await response.json();
    return json.data;
};