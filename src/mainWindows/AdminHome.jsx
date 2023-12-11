import React, { useState } from 'react'
import Bienvenida from '../components/Bienvenida';
import Navbar from '../components/NavbarAdmin';
import { RegistrarAlumno } from '../components/RegistrarAlumno';
import { ChecarSolicitudes } from '../components/ChecarSolicitudes';

export const MainHome = ({usuario}) => {
  const [activeButton, setActiveButton] = useState('bienvenida'); // Default to the Bienvenida component

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <main className='bg-[#E1E1E2] h-screen w-screen overflow-hidden'>
      <Navbar onButtonClick={handleButtonClick}/>


      {activeButton === 'bienvenida' && <Bienvenida usuario={usuario.usuario}/>}
      {activeButton === 'Registrar Alumno' && <RegistrarAlumno usuario={usuario.usuario}/>}
      {activeButton === 'Checar Solicitudes' && <ChecarSolicitudes usuario={usuario.usuario}/>}
    </main>
  )
}
