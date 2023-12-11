import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Bienvenida from '../components/Bienvenida'
import Archivos from '../components/Archivos'
import EstatusSolicitud from '../components/EstatusSolicitud'

function TramitesHome() {
  const [activeButton, setActiveButton] = useState('bienvenida'); // Default to the Bienvenida component

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <main className='bg-[#E1E1E2] h-screen w-screen overflow-hidden'>
      <Navbar onButtonClick={handleButtonClick}/>

      {activeButton === 'bienvenida' && <Bienvenida />}
      {activeButton === 'archivos' && <Archivos />}
      {activeButton === 'estatusSolicitud' && <EstatusSolicitud />}

    </main>

  )
}

export default TramitesHome