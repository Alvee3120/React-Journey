import { useState } from "react"

function App() {
   const [color, setColor] = useState('DarkSlateGray')



  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-3xl">
          
            <button onClick={() => setColor('Teal')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'Teal'}}
            >Teal</button>
            <button onClick={() => setColor('LightGreen')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'LightGreen'}}
            >LightGreen</button>
            <button onClick={() => setColor('SlateBlue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'SlateBlue'}}
            >SlateBlue</button>
            <button onClick={() => setColor('Orchid')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'Orchid'}}
            >Orchid</button>
            <button onClick={() => setColor('DarkKhaki')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'DarkKhaki'}}
            >DarkKhaki</button>
            <button onClick={() => setColor('Tomato')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'Tomato'}}
            >Tomato</button>
            <button onClick={() => setColor('Coral')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'Coral'}}
            >Coral</button>
            <button onClick={() => setColor('Orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'Orange'}}
            >Orange</button>
            
            <button onClick={() => setColor('Peru')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'Peru'}}
            >Peru</button>
            
            <button onClick={() => setColor('RoyalBlue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'RoyalBlue'}}
            >RoyalBlue</button>
            
            <button onClick={() => setColor('SkyBlue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor:'SkyBlue'}}
            >SkyBlue</button>
            
          
          </div>

        </div>

      </div>
    </>
  )
}

export default App
 