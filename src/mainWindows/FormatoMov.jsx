import React from 'react';
import { useNavigate } from 'react-router';
import FondoPrincipal from '../components/FondoPrincipal';

// Componente principal
const FormatoMov = () => {
  const navigate = useNavigate();

  // Maneja el evento de clic en el botón de búsqueda
  const handleButtonClick = () => {
    const selectedPais = document.getElementById('pais').value;
    navigate(`/resultados_mov?pais=${selectedPais}`);
  };

  return (
    <FondoPrincipal>
      <p className='text-6xl font-bold mt-8'>Formato Movilidad</p>
      <form action="" className='h-2/3 w-full flex flex-col items-center justify-center gap-y-6 text-6xl'>
        <div className='flex items-center justify-center w-full px-24'>
          <label className='font-bold w-1/2 text-center'>Carrera</label>
          <label className='font-bold w-1/2 text-center'>Semestre</label>
        </div>
        <div className='flex items-center justify-center w-full gap-x-48'>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center text-lg'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">Admin en TI</option>
            <option value="2">Lic en Informática</option>
            <option value="3">Ing en Computación</option>
            <option value="4">Ing en Software</option>
            <option value="5">Ing en Telecom</option>
          </select>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center text-lg'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <div className='flex items-center justify-center w-full px-24'>
          <label className='font-bold w-1/2 text-center'>Modo</label>
          <label className='font-bold w-1/2 text-center'>País</label>
        </div>

        <div className='flex items-center gap-x-48'>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center text-lg'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">Presencial</option>
            <option value="2">Virtual</option>
          </select>
          <select name="pais" id="pais" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center text-lg'
            style={{ width: '180px', height: '45px' }}>
            <option value="Alemania">Alemania</option>
            <option value="Argentina">Argentina</option>
            <option value="Australia">Australia</option>
            <option value="Bélgica">Bélgica</option>
            <option value="Brasil">Brasil</option>
            <option value="Colombia">Colombia</option>
            <option value="Chile">Chile</option>
            <option value="Ecuador">Ecuador</option>
            <option value="España">España</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Francia">Francia</option>
            <option value="Italia">Italia</option>
            <option value="Letonia">Letonia</option>
            <option value="México">Perú</option>
            <option value="Portugal">Portugal</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Suiza">Suiza</option>
          </select>
        </div>
        
        <input
          onClick={handleButtonClick}
          className='flex items-center justify-center rounded-lg font-bold shadow-lg cursor-pointer bg-[#5E78C1] w-72 h-31 text-5xl'
          type="button"
          value='Buscar'
        />
      </form>
    </FondoPrincipal>
  );
};

export default FormatoMov;
