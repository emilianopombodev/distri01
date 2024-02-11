import React from 'react';

const Index = () => {
  return (
    <div>
      <section className="features bg-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra empresa</h1>
          <p className="text-lg text-gray-700 mb-8">Somos una empresa especializada en la distribución de consumibles de soldadura y otros elementos industriales.</p>
          <a href="/productos" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Ver Productos
          </a>
        </div>
      </section>

      <section className="features bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Amplia variedad de productos</h3>
              <p className="text-gray-700">Ofrecemos una amplia gama de consumibles de soldadura, herramientas industriales y más.</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Calidad garantizada</h3>
              <p className="text-gray-700">Nos comprometemos a proporcionar productos de alta calidad que cumplan con las normas y estándares industriales.</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Envíos rápidos y seguros</h3>
              <p className="text-gray-700">Realizamos envíos rápidos y seguros para garantizar que recibas tus productos a tiempo y en perfectas condiciones.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Index;
