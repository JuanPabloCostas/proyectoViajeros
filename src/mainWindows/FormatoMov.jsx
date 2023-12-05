import React from 'react'
import { useNavigate } from 'react-router'
import FondoPrincipal from '../components/FondoPrincipal'

const FormatoMov = () => {
  const navigate = useNavigate()
  return (
    <FondoPrincipal>
      <form action="" className='h-full w-full flex flex-col items-center rounded-2xl shadow-lg gap-y-6'>
        <h1 className='text-5xl font-bold mt-8'>Formato Movilidad</h1>
        <div className='flex items-center justify-center gap-x-32'>
          <label className='text-4xl font-bold'>Carrera</label>
          <label className='text-4xl font-bold'>Semestre</label>
        </div>
        <div className='flex items-center gap-x-20'>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">Ing de Software</option>
          </select>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">1</option>
          </select>
        </div>

        <div className='flex items-center justify-center gap-[180px]'>
          <label className='text-4xl font-bold'>Modo</label>
          <label className='text-4xl font-bold mr-5'>País</label>
        </div>

        <div className='flex items-center gap-x-20'>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">Presencial</option>
          </select>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center'
            style={{ width: '180px', height: '45px' }}>
            <option value="1">1</option>
          </select>
        </div>

        <input onClick={() => navigate("/resultados_mov")} className='flex items-center justify-left rounded-lg font-bold 
          shadow-lg cursor-pointer bg-[#5E78C1] w-72 h-32 text-6xl' type="submit" value='Buscar' />

      </form>
    </FondoPrincipal>

  )
}

export default FormatoMov