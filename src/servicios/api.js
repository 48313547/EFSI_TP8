// Servicio para consumir la API de DummyJSON
const URL_BASE = 'https://dummyjson.com';

export const obtenerCategorias = async () => {
  try {
    const respuesta = await fetch(`${URL_BASE}/products/categories`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
};

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(`${URL_BASE}/products`);
    const datos = await respuesta.json();
    return datos.products || [];
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};

export const obtenerProductosPorCategoria = async (categoria) => {
  try {
    const respuesta = await fetch(`${URL_BASE}/products/category/${categoria}`);
    const datos = await respuesta.json();
    return datos.products || [];
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    return [];
  }
};

export const obtenerProductoPorId = async (id) => {
  try {
    const respuesta = await fetch(`${URL_BASE}/products/${id}`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error al obtener producto:', error);
    return null;
  }
};
