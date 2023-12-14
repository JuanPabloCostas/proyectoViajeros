// Login.js
import React from 'react'
import { useState } from 'react'
import FondoPrincipal from '../components/FondoPrincipal'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { MainHome } from './AdminHome'
import TramitesHome from './TramitesHome'

// Componente de inicio de sesión
const Login = () => {
  // Estado para almacenar los valores del formulario
  const [value, setValue] = useState({
    expediente: '',
    password: ''
  });

  // Estado para almacenar el usuario
  const [usuario, setusuario] = useState("usuario");

  // Estado para controlar la visualización de los componentes
  const [show, setshow] = useState(0);

  // Funcion para regresar a login
  const goLogin = () => {
    setshow(0);
  }

  // Función para redirigir al componente principal
  const goMain = async() => {
    try {
      // Realizar una solicitud POST a la API para obtener los datos del usuario
      // const res = await axios.post(`https://mauazureapp.azurewebsites.net/login`, value)
      const res = await axios.post('https://mauazureapp.azurewebsites.net/login', value)
      
      // Verificar si se recibio una respuesta exitosa
      if (res.status != 200) {
        return alert('Expediente incorrecto')
      }

      // Almacenar res.token en localStorage
      localStorage.setItem('token', res.data.token)

      // Si el usuario es de tipo alumno
      if (res.data.type != 1) {
        setusuario({
          usuario: res.data.nombre,
          expediente: res.data.expediente,
        })
        setshow(1);
      }

      // Si el usuario es de tipo administrador
      else if (res.data.type == 1) {
        setusuario({
          usuario: res.data.nombre,
          expediente: res.data.expediente,
        })
        setshow(2);
        
      } else {
        alert('Contraseña incorrecta')
      }
    } catch (error) {
      alert('Contraseña incorrecta')
    }
  }

  return (
    <>
      {/* Componente de inicio de sesión */}
      {show == 0 && <FondoPrincipal>
        <p className='text-6xl font-bold mt-10'>Inicio de Sesión</p>
        <form className='h-2/3 w-full flex flex-col items-center justify-center rounded-2xl gap-y-4 m-4 text-center' action="">
          <label className='text-4xl'>Expediente</label>
          <input type="text"  value={value.expediente}
          onChange={(e) => {
            setValue({
              ...value,
              expediente: e.target.value
            })
          }}  className=' w-80 h-16 rounded-lg text-black text-center shadow-inner'/>
          <label className='text-4xl'>Contraseña</label>
          <input type="password" value={value.password} onChange={(e) => {
            setValue({
              ...value,
              password: e.target.value
            })
          }} className=' w-80 h-16 rounded-lg text-black text-center shadow-inner'/>
          <input onClick={goMain} className='flex items-center justify-left text-center rounded-lg font-bold 
            shadow-lg cursor-pointer bg-[#5E78C1] w-60 h-16 text-4xl'  value='Entrar' />
        </form>
      </FondoPrincipal>}
      {/* Componente principal */}
      {show == 1 && <TramitesHome usuario={usuario} goLogin={goLogin}/>}
      {/* Componente de administrador */}
      {show == 2 && <MainHome usuario={usuario} goLogin={goLogin}/>}
    </>
  )
}

export default Login
