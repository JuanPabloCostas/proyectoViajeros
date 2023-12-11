import React from 'react';

function Navbar({ onButtonClick }) {
    return (
        <nav className='bg-[#25639D] h-24 w-screen flex items-center justify-between px-4'>
            <div className='text-4xl font-bold text-white'>
                <p className='text-white'>Internacionalización</p>
                <p>y Enlace Global UAQ</p>
            </div>
            <div className='flex items-center justify-center gap-x-4 text-white'>
                <button className='text-4xl font-bold' onClick={() => onButtonClick('archivos')}>
                    Archivos
                </button>
                <div className='w-1 h-16 border-l border-dotted border-white'></div>
                <button className='text-4xl font-bold' onClick={() => onButtonClick('estatusSolicitud')}>
                    Estatus Solicitud
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
