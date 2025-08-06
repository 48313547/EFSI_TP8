import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../servicios/api';
import TarjetaProducto from '../componentes/TarjetaProducto';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarProductosInicio = async () => {
      setCargando(true);
      const datos = await obtenerProductos();
      setProductos(datos.slice(0, 8)); // Mostrar primeros 8 productos
      setCargando(false);
    };
    cargarProductosInicio();
  }, []);

  if (cargando) {
    return <div className="cargando">Cargando productos...</div>;
  }

  return (
    <div className="pagina-inicio">
      <section className="hero">
        <h1>Bienvenidos a TiendaTech</h1>
        <p>Tu tienda de tecnología confiable</p>
      </section>

      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="grid-productos">
          {productos.map(producto => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
