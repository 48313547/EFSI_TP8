import React from 'react';

const Contacto = () => {
  return (
    <div className="pagina-contacto">
      <h1>Contacto</h1>
      <section className="contenido-contacto">
        <h2>Información de Contacto</h2>
        <p>¿Tienes alguna pregunta o necesitas ayuda? No dudes en contactarnos.</p>

        <div className="info-contacto">
          <h3>Datos de Contacto</h3>
          <ul>
            <li><strong>Email:</strong> info@tiendatech.com</li>
            <li><strong>Teléfono:</strong> +54 11 1234-5678</li>
            <li><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</li>
          </ul>
        </div>

        <div className="formulario-contacto">
          <h3>Formulario de Contacto</h3>
          <form>
            <div className="campo-formulario">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="campo-formulario">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="campo-formulario">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit" className="boton-enviar">Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
