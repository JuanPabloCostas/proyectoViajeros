import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import NavBotonImagen from '../components/NavBotonImagen'
import NavBoton from '../components/NavBoton'
import BotonNav from '../components/BotonNav'


const Indice = () => {
    return (
        <>
            <main className='bg-[#2F4858] h-screen w-screen flex items-center justify-center text-white font-sans'>
                <div className='bg-[#25639D] h-[90%] w-[100vh] flex flex-col items-center rounded-2xl shadow-lg gap-y-5'>
                    <img src="/logoViajeros.svg" alt="logo" className='w-[250px] h-[150px]' />

                    <NavBotonImagen href="formatomovilidad" color="#5E78C1" height="100px" width="300px"
                        textLine1="Movilidad" textLine2="Personalizada" fontSize="25px"
                        imageSrc="user.svg" imageAlt="usuario"
                    />

                    <NavBotonImagen href="InformacionJuanPa" color="#5E78C1" height="100px" width="300px"
                        textLine1="Tramites" textLine2="Movilidad" fontSize="25px"
                        imageSrc="folder.svg" imageAlt="calculadora"
                    />

                    <div className='flex gap-x-8'>
                        <NavBoton href="InformacionJuanPa" color="#C74B53" height="80px" width="200px"
                            textLine1="Dept de Mov" textLine2="Informática" fontSize="25px" textAlign="center"
                        />
                        <NavBoton href="InformacionJuanPa" color="#C74B53" height="80px" width="200px"
                            textLine1="Info General" textLine2="Mov UAQ" fontSize="25px" textAlign="center"
                        />
                    </div>
                </div>

            </main>
        </>
    )
}

export default Indice