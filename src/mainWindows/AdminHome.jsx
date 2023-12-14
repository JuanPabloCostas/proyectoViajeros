import React, { useState } from 'react';
import Bienvenida from '../components/Bienvenida';
import Navbar from '../components/NavbarAdmin';
import { RegistrarAlumno } from '../components/RegistrarAlumno';
import { ChecarSolicitudes } from '../components/ChecarSolicitudes';

// Definición del componente MainHome
export const MainHome = ({ usuario }) => {
  const [activeButton, setActiveButton] = useState('bienvenida'); // Estado para controlar el botón activo

  // Función para manejar el clic en los botones
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <main className='bg-[#E1E1E2] h-screen w-screen overflow-hidden'>
      <Navbar onButtonClick={handleButtonClick} />
      <a href="/login" className='text-2xl font-bold text-blue-500 p-4'
      >{"<- Regresar a login"}</a>

      {/* Renderizado condicional de los componentes */}
      {activeButton === 'bienvenida' && <Bienvenida usuario={usuario.usuario} />}
      {activeButton === 'Registrar Alumno' && <RegistrarAlumno usuario={usuario.usuario} />}
      {activeButton === 'Checar Solicitudes' && <ChecarSolicitudes usuario={usuario.usuario} />}
    </main>
  );
};
