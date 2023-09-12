import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import NavBoton from '../components/NavBoton' 

const Indice = () => {
    return (
        <>
            <main className='bg-[#2F4858] h-screen w-screen flex items-center justify-center'>
                <div className='bg-[#25639D] h-[90%] w-[100vh] flex flex-col items-center rounded-2xl shadow-lg'>
                    <img src="/logoViajeros.svg" alt="logo" className='w-[250px] h-[150px]'/>

                    <button className='bg-[#5E78C1] h-12 w-100  rounded-full'>
                        UAQ
                    </button>
                <NavBoton href = "InformacionJesus" color = "#5E78C1" height="12" width="100" text="UAQ"/>
                    
                </div>

            </main>
        </>
    )
}

export default Indice