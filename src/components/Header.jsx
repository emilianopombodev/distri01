import React from 'react';
import logo from "../img/logo.jpg"; // Asegúrate de importar la imagen que deseas utilizar

export const Header = ({ setActiveLink, activeLink }) => {
  const handleSetActiveLink = (link) => {
    setActiveLink(link); // Llama a la función pasada desde App
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="mr-2" /> {/* Aquí agregamos la imagen como logo */}
        <ul className="flex">
          <li className="mr-6">
            <a href="#" className={`text-black hover:text-gray-300 ${activeLink === 'index' && 'font-bold'}`} onClick={() => handleSetActiveLink('index')}>
              Inicio
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className={`text-black hover:text-gray-300 ${activeLink === 'about' && 'font-bold'}`} onClick={() => handleSetActiveLink('about')}>
              Acerca
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className={`text-black hover:text-gray-300 ${activeLink === 'products' && 'font-bold'}`} onClick={() => handleSetActiveLink('products')}>
              Productos
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className={`text-black hover:text-gray-300 ${activeLink === 'contact' && 'font-bold'}`} onClick={() => handleSetActiveLink('contact')}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
