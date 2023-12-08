import React from 'react'

const NavBotonImagen = (props) => {
  return (
    <button 
        onClick={() => window.location.href=props.href}
        style={{ backgroundColor: props.color, columnGap: props.gap}}
        className='flex items-center  rounded-lg font-bold shadow-lg h-1/5 w-2/4 text-4xl p-4 justify-center'>
            <img src={props.imageSrc} alt={props.imageAlt}
             className='w-1/4 h-[90px]'/>
            <div className='w-3/4' >
                <p  >{props.textLine1}</p>
                <p>{props.textLine2}</p>
            </div>
    </button>
  )
}

export default NavBotonImagen
