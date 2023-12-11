import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import FondoPrincipal from '../components/FondoPrincipal'
import axios from 'axios'

const FormatoMov = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    modo: '1',
    pais: '1'
  });

  const [paises, setPaises] = useState({});

  // fetch paises from route http://127.0.0.1:3000/paises/paisesnombre
  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:3000/paises/paisesnombre')
        setPaises(res.data)
        // row example: {id: 1, nombre: "Afganistán"}
      } catch (error) {
        console.log(error)
      }
    }
    fetchPaises()
  }
    , [])




  return (
    <FondoPrincipal>
      <p className='text-6xl font-bold mt-8'>Formato Movilidad</p>
      <form action="" className='h-2/3 w-full flex flex-col items-center justify-center gap-y-6 text-6xl'>
        <div className='flex items-center justify-center w-full px-24'>
          <label className='font-bold w-1/2 text-center'>Carrera</label>
          <label className='font-bold w-1/2 text-center'>Semestre</label>
        </div>
        <div className='flex items-center justify-center w-full gap-x-28'>
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

        <div className='flex items-center gap-x-28'>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center text-lg'
            style={{ width: '180px', height: '45px' }}
            onChange={(e) => {
              setdata({
                ...data,
                modo: e.target.value
              })
            }
            }>
            <option value="1">Presencial</option>
            <option value="2">Virtual</option>
          </select>
          <select name="" id="" className='flex items-center justify-center rounded-lg font-bold w-30 shadow-inner
            text-black text-center text-lg'
            style={{ width: '180px', height: '45px' }}
            onChange={(e) => {
              setdata({
                ...data,
                pais: e.target.value
              })
            }
            }
            >
            {Object.keys(paises).map((key) => {
              return <option key={key} value={paises[key].id}>{paises[key].nombre}</option>
            })}
          </select>
        </div>

        <input onClick={() => navigate("/resultados_mov")} className='flex items-center justify-center rounded-lg font-bold 
          shadow-lg cursor-pointer bg-[#5E78C1] w-72 h-31 text-5xl' type="submit" value='Buscar' />

      </form>
    </FondoPrincipal>

  )
}

export default FormatoMov