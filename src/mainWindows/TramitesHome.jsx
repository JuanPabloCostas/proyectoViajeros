import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Bienvenida from '../components/Bienvenida';
import Archivos from '../components/Archivos';
import EstatusSolicitud from '../components/EstatusSolicitud';

// Define the TramitesHome component
function TramitesHome({ usuario, goLogin }) {
  // Define state for the active button
  const [activeButton, setActiveButton] = useState('bienvenida'); // Default to the Bienvenida component

  // Handle button click event
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Render the TramitesHome component
  return (
    <main className='bg-[#E1E1E2] h-screen w-screen overflow-hidden'>
      <Navbar onButtonClick={handleButtonClick} goLogin={goLogin} />

      <a href="/login" className='text-2xl font-bold text-blue-500 p-4'
      >{"<- Regresar a login"}</a>

      {/* Render different components based on the active button */}
      {activeButton === 'bienvenida' && <Bienvenida usuario={usuario.usuario} />}
      {activeButton === 'archivos' && <Archivos expediente={usuario.expediente} />}
      {activeButton === 'estatusSolicitud' && <EstatusSolicitud expediente={usuario.expediente} />}
    </main>
  );
}

export default TramitesHome;
