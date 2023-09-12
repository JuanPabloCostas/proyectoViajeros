import React from 'react'

const NavBoton = (props) => {
  return (
    <button 
        onClick={() => window.location.href=props.href}
        style={{ backgroundColor: props.color, height: props.height, width: props.width, fontSize: props.fontSize}}
        className='flex items-center justify-center rounded-lg font-black shadow-lg'>
            <div>
                <p>{props.textLine1}</p>
                <p>{props.textLine2}</p>
            </div>
    </button>
  )
}

export default NavBoton