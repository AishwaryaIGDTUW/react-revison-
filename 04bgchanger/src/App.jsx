import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2  rounded-xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "red"}}>
            RED
          </button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "green"}}>
            GREEN
          </button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "blue"}}>
            BLUE
          </button>
          <button onClick={()=>setColor("grey")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "grey"}}>
            GRAY
          </button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "yellow"}}>
            YELLOW
          </button>
          <button onClick={()=>setColor("lavender")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "lavender"}}>
            LAVENDER
          </button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 shadow-xl rounded-full text-white' style={{backgroundColor: "black"}}>
            BLACK
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
