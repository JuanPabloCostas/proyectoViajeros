import React from 'react'

function Bienvenida({usuario}) {
  return (
    <div className='flex flex-col items-center h-full w-full text-center justify-center text-4xl'>
        <p>Bienvenido(a) {usuario}</p>
        <img src="/logoAvion.svg" alt="logo" className='h-1/2 w-1/4' />
    </div>
  )
}

export default Bienvenida