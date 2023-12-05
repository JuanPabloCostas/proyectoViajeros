// FondoPrincipal.js
import React from 'react'

const FondoPrincipal = ({ children }) => {
    return (
        <>
            <main className='bg-[#2F4858] h-screen w-screen flex items-center justify-center text-white font-sans'>
                <div className='bg-[#25639D] h-[90%] w-[100vh] flex flex-col items-center rounded-2xl shadow-lg gap-y-5'>
                    {children}
                </div>
            </main>
        </>
    )
}

export default FondoPrincipal
