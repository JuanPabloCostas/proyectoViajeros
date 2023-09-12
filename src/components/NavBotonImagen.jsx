import React from 'react'

const NavBotonImagen = (props) => {
  return (
    <button 
        onClick={() => window.location.href=props.href}
        style={{ backgroundColor: props.color, height: props.height, width: props.width, fontSize: props.fontSize, textAlign: props.textAlign}}
        className='flex items-center justify-left rounded-lg font-black shadow-lg'>
            <img src={props.imageSrc} alt={props.imageAlt} className='w-[90px] h-[110px]'/>
            <div className='justify-left'>
                <p>{props.textLine1}</p>
                <p>{props.textLine2}</p>
            </div>
    </button>
  )
}

export default NavBotonImagen
