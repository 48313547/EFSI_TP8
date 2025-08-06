import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerProductoPorId } from '../servicios/api';

const ProductoDetalle = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarProducto = async () => {
      setCargando(true);
      const datos = await obtenerProductoPorId(idProducto);
      setProducto(datos);
      setCargando(false);
    };
    
    cargarProducto();
  }, [idProducto]);

  if (cargando) {
    return <div className="cargando">Cargando producto...</div>;
  }

  if (!producto) {
    return <div className="error">Producto no encontrado</div>;
  }

  return (
    <div className="pagina-detalle-producto">
      <Link to="/productos" className="boton-volver">
        ← Volver a Productos
      </Link>
      
      <div className="contenedor-detalle">
        <div className="imagen-principal">
          <img 
            src={producto.thumbnail} 
            alt={producto.title} 
            className="imagen-producto-grande"
          />
        </div>
        
        <div className="info-producto-detalle">
          <h1>{producto.title}</h1>
          <p className="precio-detalle">${producto.price}</p>
          <p className="categoria">Categoría: {producto.category}</p>
          
          <div className="descripcion">
            <h3>Descripción</h3>
            <p>{producto.description}</p>
          </div>
          
          <div className="detalles-adicionales">
            <h3>Detalles</h3>
            <p><strong>Marca:</strong> {producto.brand || 'No especificada'}</p>
            <p><strong>Stock:</strong> {producto.stock} unidades</p>
            <p><strong>Rating:</strong> {producto.rating} ⭐</p>
          </div>
          
          <button className="boton-comprar">Agregar al Carrito</button>
        </div>
        
        <div className="galeria-imagenes">
          <h3>Galería de Imágenes</h3>
          <div className="miniaturas">
            {producto.images?.map((imagen, index) => (
              <img 
                key={index} 
                src={imagen} 
                alt={`${producto.title} ${index + 1}`}
                className="miniatura"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
