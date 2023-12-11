import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Bienvenida from '../components/Bienvenida'
import Archivos from '../components/Archivos'
import EstatusSolicitud from '../components/EstatusSolicitud'

function TramitesHome({usuario}) {
  const [activeButton, setActiveButton] = useState('bienvenida'); // Default to the Bienvenida component

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <main className='bg-[#E1E1E2] h-screen w-screen overflow-hidden'>
      <Navbar onButtonClick={handleButtonClick}/>

      {activeButton === 'bienvenida' && <Bienvenida usuario={usuario.usuario}/>}
      {activeButton === 'archivos' && <Archivos expediente={usuario.expediente}/>}
      {activeButton === 'estatusSolicitud' && <EstatusSolicitud expediente={usuario.expediente} />}

    </main>

  )
}

export default TramitesHome