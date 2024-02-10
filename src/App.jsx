// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Index from './components/Index';


function App() {
  const [activeLink, setActiveLink] = useState('inicio');
  let componenteRenderizado;

  // Función para actualizar el valor de activeLink
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  // Definir qué componente renderizar según activeLink
  switch (activeLink) {
    case 'index':
      componenteRenderizado= <Index/>;
      break;
    case 'about':
      componenteRenderizado = <About />;
      break;
    case 'contact':
      componenteRenderizado = <Contact />;
      break;
    default:
      componenteRenderizado = null;
  }

  return (
    <div>
      <Header setActiveLink={handleSetActiveLink} activeLink={activeLink} />
      {/* Renderizar el componente correspondiente */}
      <div>
        {componenteRenderizado}
      </div>
      <div>Valor de activeLink en App: {activeLink}</div>
    </div>
  );
}

export default App;
