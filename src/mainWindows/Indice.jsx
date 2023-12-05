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
                <img src="/logoViajeros.svg" alt="logo" className='w-[250px] h-[150px]' />

                <NavBotonImagen href="formatomovilidad" color="#5E78C1" height="100px" width="280px"
                    textLine1="Movilidad" textLine2="Personalizada" fontSize="25px"
                    imageSrc="user.svg" imageAlt="usuario"
                />

                <NavBotonImagen href="login" color="#5E78C1" height="100px" width="280px"
                    textLine1="Tramites" textLine2="Movilidad" fontSize="25px"
                    imageSrc="folder.svg" imageAlt="folder"
                />

                <div className='flex gap-x-8'>
                    <NavBoton href="InformacionJuanPa" color="#C74B53" height="80px" width="200px"
                        textLine1="Dept de Mov" textLine2="Informática" fontSize="25px" textAlign="center"
                    />
                    <NavBoton href="InformacionJuanPa" color="#C74B53" height="80px" width="200px"
                        textLine1="Info General" textLine2="Mov UAQ" fontSize="25px" textAlign="center"
                    />
                </div>
            </FondoPrincipal>
        </>
    )
}

export default Indice