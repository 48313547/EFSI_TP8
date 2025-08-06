import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraNavegacion from '../componentes/BarraNavegacion';
import PiePagina from '../componentes/PiePagina';

const LayoutPrincipal = () => {
  return (
    <div className="layout-principal">
      <header>
        <BarraNavegacion />
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>
        <PiePagina />
      </footer>
    </div>
  );
};

export default LayoutPrincipal;
