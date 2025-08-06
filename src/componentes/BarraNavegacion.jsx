import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerCategorias } from '../servicios/api';

const BarraNavegacion = () => {
  const [categorias, setCategorias] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const cargarCategorias = async () => {
      const datos = await obtenerCategorias();
      setCategorias(datos);
    };
    cargarCategorias();
  }, []);

  return (
    <nav className="barra-navegacion">
      <div className="contenedor-logo">
        <Link to="/" className="logo">
          <h2>TiendaTech</h2>
        </Link>
      </div>

      <ul className="menu-principal">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        
        <li className="menu-productos">
          <span>Productos ▼</span>
          <ul className="submenu-productos">
            <li><Link to="/productos">Ver Todos</Link></li>
            {categorias.map(categoria => (
              <li key={categoria}>
                <Link to={`/productos/categoria/${categoria}`}>
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default BarraNavegacion;
