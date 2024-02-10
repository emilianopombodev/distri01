// Header.js
import React from 'react';

export const Header = ({ setActiveLink, activeLink }) => {
  const handleSetActiveLink = (link) => {
    setActiveLink(link); // Llama a la función pasada desde App
  };

  return (
    <div className="bg-gray-800 py-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Nombre de tu Sitio</div>
        <p className="text-white">Enlace activo: {activeLink}</p>
        <ul className="flex">
          <li className="mr-6">
            <a href="#" className={`text-white hover:text-gray-300 ${activeLink === 'index' && 'font-bold'}`} onClick={() => handleSetActiveLink('inicio')}>
              Inicio
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className={`text-white hover:text-gray-300 ${activeLink === 'about' && 'font-bold'}`} onClick={() => handleSetActiveLink('acerca')}>
              Acerca
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className={`text-white hover:text-gray-300 ${activeLink === 'servicios' && 'font-bold'}`} onClick={() => handleSetActiveLink('servicios')}>
              Servicios
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className={`text-white hover:text-gray-300 ${activeLink === 'contact' && 'font-bold'}`} onClick={() => handleSetActiveLink('contacto')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;