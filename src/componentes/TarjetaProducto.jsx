import React from 'react';
import { Link } from 'react-router-dom';

const TarjetaProducto = ({ producto }) => {
  return (
    <div className="tarjeta-producto">
      <img 
        src={producto.thumbnail} 
        alt={producto.title} 
        className="imagen-producto"
      />
      <div className="info-producto">
        <h3 className="titulo-producto">{producto.title}</h3>
        <p className="precio-producto">${producto.price}</p>
        <p className="descripcion-producto">{producto.description?.substring(0, 100)}...</p>
        <Link to={`/producto/${producto.id}`} className="boton-ver-detalle">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default TarjetaProducto;
