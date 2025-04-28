import { useState } from 'react'

import './App.css'

function App() {
  const [content, setContent] = useState("")


const clickNum = (value) =>{

  if(content === 'Error'){
    setContent(value)
  }else{
  setContent(content+value)
  console.log("clicked num");
  }
}
const clickOperators = (op) =>{

  setContent(content+op)
  console.log("clicked op");
  
}
const clickEqual = () =>{

  try {
    const result = eval(content);
    setContent(result.toString());
  } catch (e) {
    setContent("Error")
  }
  
  
  
}
const clickClear = () =>{

  setContent('')
  console.log("clicked clear");
  
}


  return (
    <>
      <h1 className="text-3xl font-bold m-8">Welcome to my Calculator App</h1>

<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-80">
    
    {/* Calculator Screen */}
    <div className="bg-white min-h-16 mb-6 flex items-start justify-end px-4 py-2 rounded text-2xl font-mono text-black break-words whitespace-pre-wrap overflow-hidden">
  {content}
</div>

    {/* Calculator Buttons */}
    <div className="grid grid-cols-4 gap-4">
      <button onClick={() => clickNum('7')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">7</button>
      <button onClick={() => clickNum('8')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">8</button>
      <button onClick={() => clickNum('9')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">9</button>
      <button onClick={() => clickOperators('/')} className="bg-orange-400 w-16 h-16 rounded-md text-xl text-white">/</button>

      <button onClick={() => clickNum('4')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">4</button>
      <button onClick={() => clickNum('5')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">5</button>
      <button onClick={() => clickNum('6')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">6</button>
      <button onClick={() => clickOperators('*')}className="bg-orange-400 w-16 h-16 rounded-md text-xl text-white">*</button>

      <button onClick={() => clickNum('1')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">1</button>
      <button onClick={() => clickNum('2')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">2</button>
      <button onClick={() => clickNum('3')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">3</button>
      <button onClick={() => clickOperators('-')} className="bg-orange-400 w-16 h-16 rounded-md text-xl text-white">-</button>

      <button onClick={() => clickNum('0')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">0</button>
      <button onClick={() => clickNum('.')} className="bg-gray-200 w-16 h-16 rounded-md text-xl">.</button>
      <button  onClick={clickEqual}className="bg-green-400 w-16 h-16 rounded-md text-xl text-white">=</button>
      <button onClick={() => clickOperators('+')} className="bg-orange-400 w-16 h-16 rounded-md text-xl text-white">+</button>

      <button onClick={clickClear} className="bg-red-400 w-full h-12 rounded-md text-xl text-white col-span-4 mt-4">C</button>
      
    </div>

  </div>
</div>





     
    </>
  )
}

export default App
