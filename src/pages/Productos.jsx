import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductos, obtenerProductosPorCategoria } from '../servicios/api';
import TarjetaProducto from '../componentes/TarjetaProducto';

const Productos = () => {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [titulo, setTitulo] = useState('Todos los Productos');

  useEffect(() => {
    const cargarProductos = async () => {
      setCargando(true);
      let datos = [];
      
      if (idCategoria) {
        datos = await obtenerProductosPorCategoria(idCategoria);
        setTitulo(`Productos de ${idCategoria}`);
      } else {
        const respuesta = await obtenerProductos();
        datos = respuesta;
      }
      
      setProductos(datos);
      setCargando(false);
    };
    
    cargarProductos();
  }, [idCategoria]);

  if (cargando) {
    return <div className="cargando">Cargando productos...</div>;
  }

  return (
    <div className="pagina-productos">
      <h1>{titulo}</h1>
      <p>Total de productos: {productos.length}</p>
      
      <div className="grid-productos">
        {productos.map(producto => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
