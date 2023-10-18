import React from 'react'

function resultados(){
  let totalFilas = 3;
  let totalColumnas = 3;
  let filas = [];
  let columnas = [];
  for (let i = 0; i < totalFilas; i++) {
    for (let j = 0; j < totalColumnas; j++) {
      columnas.push(<div className='border-neutral-400 border-4 rounded w-1/3 m-6 bg-white
      flex flex-col items-center p-1.5 gap-y-1'>
        <img src="/uaq.jpeg" alt='uaq' height={"100"} width={"100"}/>
            <hr className='border-black border-4 w-1/2'/>
            <label className='text-black text-center font-bold text-xl'>Mexico</label>
            <label className='text-black text-center font-bold text-l'>Autonoma de Queretaro</label>
            <p className='text-black text-m'>3 carreras encontradas</p>
      </div>);
    }
    filas.push(<div className='flex h-1/2'>{columnas}</div>);
    columnas = [];
  }
  return filas;
}

const Resultados_mov = () => {
  return (
    <main className='bg-[#2F4858] h-screen w-screen flex flex-col items-center justify-center text-white font-sans'>
      <h1 className='text-white text-center font-extrabold text-3xl'>Tus Resultados</h1>
      <div className='border-t-[#25639D] border-t-[15px] h-[90%] rounded w-[150vh] bg-white overflow-auto '>
        {resultados()}
      </div>
    </main>
  )
}

export default Resultados_mov