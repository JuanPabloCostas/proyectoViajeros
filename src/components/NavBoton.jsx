import React from 'react'

const NavBoton = (props) => {
  return (
    <button 
        onClick={() => window.location.href=props.href}
        className={`bg-[${props.color}] h-${props.height} width-${props.width}  rounded-full`}>
            {props.text}
    </button>
  )
}

export default NavBoton