import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto' }} className="bg-gray-200 py-3">
      <section className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">¿Interesado en nuestros productos?</h2>
        <p className="text-lg text-gray-700 mb-8">¡Contáctanos hoy mismo para obtener más información!</p>
        <a href="/contacto" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Contacto
        </a>
      </section>
    </footer>
  );
};

export default Footer;
