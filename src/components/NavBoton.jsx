import React from 'react'
import { useNavigate } from 'react-router'

const NavBoton = (props) => {
  const navigate = useNavigate()

  return (
    <button 
        onClick={() => navigate("/"+props.href)}
        style={{ backgroundColor: props.color, height: props.height, width: props.width, fontSize: props.fontSize, textAlign: props.textAlign}}
        className='flex items-center justify-center rounded-lg font-bold shadow-lg gap-x-8 w-1/3 h-3/4'>
            <div className='justify-center'>
                <p>{props.textLine1}</p>
                <p>{props.textLine2}</p>
            </div>
    </button>
  )
}

export default NavBoton
