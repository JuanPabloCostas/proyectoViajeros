import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-[#2F4858] h-screen w-screen flex items-center justify-center'>
        <div className='bg-[#25639D] h-[90%] w-[100vh] flex flex-col items-center rounded-2xl shadow-lg'>
          <h1 className='text-5xl text-blue-400'>Hola Mundo</h1>

          <button className='rounded-full bg-slate-400 hover:bg-sky-700 shadow-lg' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <div className='bg-[#5E78C1] h-[10px] width-[20px]'>

          </div>
        </div>

      </main>
    </>
  )
}

export default App
