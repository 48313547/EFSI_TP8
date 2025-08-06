import React from 'react';

const PiePagina = () => {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-pie">
        <div className="seccion-pie">
          <h3>TiendaTech</h3>
          <p>Tu tienda de tecnología confiable</p>
        </div>
        
        <div className="seccion-pie">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/quienes-somos">Quienes Somos</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="seccion-pie">
          <h4>Contacto</h4>
          <p>Email: info@tiendatech.com</p>
          <p>Teléfono: +54 11 1234-5678</p>
        </div>
        
        <div className="seccion-pie">
          <p>&copy; 2024 TiendaTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;
