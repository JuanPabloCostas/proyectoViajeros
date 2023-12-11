import React from 'react'
import Universidades from './universidades.json'

function resultados(pais) {//Esta función obtiene las universidades del país seleccionado y las agrupa en grupos de 3
  const paisUniversidades = Universidades.Universidades.filter(
    (universidad) => universidad.pais === pais
  );

  const groupedUniversidades = [];
  for (let i = 0; i < paisUniversidades.length; i += 3) {
    groupedUniversidades.push(paisUniversidades.slice(i, i + 3));
  }

  return groupedUniversidades.map((group, index) => (
    <div key={index} className='flex h-1/3'>
      {group.map((universidad) => (
        <div
          key={universidad.nombre}
          className='border-neutral-400 border-4 rounded w-1/3 m-6 bg-white flex flex-col items-center p-1.5 gap-y-1'
        >
          <label className='text-black text-center font-bold text-2xl'>{pais}</label>
          <hr className='border-black border-4 w-1/2' />
          <label className='text-black text-center font-bold text-l'>{universidad.nombre}</label>
          <ul className='text-black text-m list-disc pl-4'>
            {universidad.carreras.map((carrera, index) => (
              <li key={index}>{carrera}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ));
}

const Resultados_mov = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const pais = searchParams.get('pais');

  return (
    <main className='bg-[#2F4858] h-screen w-screen flex flex-col items-center justify-center text-white font-sans'>
      <h1 className='text-white text-center font-extrabold text-3xl'>Tus Resultados</h1>
      <div className='border-t-[#25639D] border-t-[15px] h-[90%] rounded w-[150vh] bg-white overflow-auto '>
        {resultados(pais)}
      </div>
    </main>
  )
}

export default Resultados_mov