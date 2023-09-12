import React from 'react'

const NavBotonImagen = (props) => {
  return (
    <button 
        onClick={() => window.location.href=props.href}
        style={{ backgroundColor: props.color, height: props.height, width: props.width, fontSize: props.fontSize, textAlign: props.textAlign}}
        className='flex items-center justify-left rounded-lg font-bold shadow-lg gap-x-8'>
            <img src={props.imageSrc} alt={props.imageAlt} className='w-[60px] h-[90px] ml-2'/>
            <div className='justify-center'>
                <p>{props.textLine1}</p>
                <p>{props.textLine2}</p>
            </div>
    </button>
  )
}

export default NavBotonImagen
