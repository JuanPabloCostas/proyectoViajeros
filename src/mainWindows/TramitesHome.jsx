import React from 'react'
import Navbar from '../components/Navbar'

function TramitesHome() {
  return (
    <main className='bg-[#E1E1E2] h-screen w-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-col items-center h-full w-full text-center justify-center text-4xl'>
        <p>Bienvenido Jesús Alberto</p>
        <img src="/logoAvion.svg" alt="logo" className='h-1/2 w-1/4' />
        </div>
      
    </main>
    
  )
}

export default TramitesHome