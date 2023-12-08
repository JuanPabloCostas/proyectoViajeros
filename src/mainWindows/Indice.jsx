import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import FondoPrincipal from '../components/FondoPrincipal'
import NavBotonImagen from '../components/NavBotonImagen'
import NavBoton from '../components/NavBoton'
import BotonNav from '../components/BotonNav'


const Indice = () => {
    return (
        <>
            <FondoPrincipal>
                <img src="/logoViajeros.svg" alt="logo" className='h-1/4' />

                <NavBotonImagen href="formatomovilidad" color="#5E78C1" textLine1="Movilidad" textLine2="Personalizada"  
                imageSrc="user.svg" imageAlt="usuario" gap='10px'
                />

                <NavBotonImagen href="login" color="#5E78C1" textLine1="Tramites" textLine2="Movilidad" 
                imageSrc="folder.svg" imageAlt="folder" gap='10px'
                />

                <div className='flex gap-x-8 h-1/4 w-full p-4 justify-center'>
                    <NavBoton href="InformacionJuanPa" color="#C74B53"
                        textLine1="Dept de Mov" textLine2="Informática" fontSize="25px" textAlign="center"
                    />
                    <NavBoton href="InformacionJuanPa" color="#C74B53" 
                        textLine1="Info General" textLine2="Mov UAQ" fontSize="25px" textAlign="center"
                    />
                </div>
            </FondoPrincipal>
        </>
    )
}

export default Indice