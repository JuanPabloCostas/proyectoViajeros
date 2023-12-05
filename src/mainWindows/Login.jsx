// Login.js
import React from 'react'
import { useState } from 'react'
import FondoPrincipal from '../components/FondoPrincipal'
import { useNavigate } from 'react-router'

const Login = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleChange = event => {//Regexp para que solo se puedan ingresar números
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  return (
    <FondoPrincipal>
      <form className='h-full w-full flex flex-col items-center rounded-2xl gap-y-4 m-4 text-center' action="" method="post">
        <h1 className='text-5xl font-bold mt-8'>Inicio de Sesión</h1>
        <label className='text-4xl'>Expediente</label>
        <input type="text"  value={value}
        onChange={handleChange}  className=' w-80 h-16 rounded-lg text-black text-center shadow-inner'/>
        <label className='text-4xl'>Contraseña</label>
        <input type="password" className=' w-80 h-16 rounded-lg text-black text-center shadow-inner'/>
        <input onClick={() => navigate("/resultados_mov")} className='flex items-center justify-left rounded-lg font-bold 
          shadow-lg cursor-pointer bg-[#5E78C1] w-60 h-16 text-4xl' type="submit" value='Entrar' />
      </form>
    </FondoPrincipal>
  )
}

export default Login
