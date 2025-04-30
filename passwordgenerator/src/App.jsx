 import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  

  const [password, setPassword] = useState("")
  const [length, setlength] = useState(8)
  const [charAllowed, setcharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)

  const passwordRef = useRef(null)


    const passwordGenerator = useCallback (() => {

        let pass = ''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numAllowed){
          str += "0123456789"
        }
        if(charAllowed){
          str += "!@#$%^&*()_+{}[]|:;<>?/"
        }

    
        for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random() * (str.length)+1)
          
          pass += str.charAt(char) ;

        }
        setPassword(pass)

    },[length, numAllowed, charAllowed, setPassword]
  )


  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed,passwordGenerator])

  const copyPass = useCallback(() => {

    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
  <div className="w-1/2 bg-white p-6 rounded shadow text-center">
    
    <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
    
    {/* Input and Button Container */}
    <div className="flex items-center justify-center space-x-2 mb-6">
      <input
        type="text"
        placeholder="Password"
        className="w-4/5 p-3 border border-gray-300 rounded-l"
        readOnly
        value={password}
        ref={passwordRef}
      />
      <button 
      onClick={copyPass}
      className="w-1/5 bg-blue-600 text-white p-3 rounded-r hover:bg-blue-700">
        Copy
      </button>
    </div>

    {/* Range Slider */}
    <div className="w-full mb-6">
      <label htmlFor="range" className="block mb-2 text-gray-700 font-semibold">
        Select Value: {length}
      </label>
      <input
        id="range"
        type="range"
        value={length}
        min={6}
        max={128}
        className="w-full accent-blue-600 cursor-pointer"
        onChange={(e)=> setlength(e.target.value)}
      />
    </div>

    {/* Checkboxes */}
    <div className="flex items-center justify-center space-x-6">
      <label className="flex items-center space-x-2">
        <input 
        type="checkbox"
        className="accent-blue-600"
        id = 'numberInput'
        defaultChecked = {numAllowed}
        onChange={()=>{setNumAllowed((prev) => !prev);
        }}
         />
        <span>Number</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
        type="checkbox" 
        className="accent-blue-600"
        id= 'charInput'
        defaultChecked = {charAllowed}
        onChange ={ () => { setcharAllowed((prev) => !prev) }}

         />
        <span>Character</span>
      </label>
    </div>

  </div>
</div>

      
    </>
  )
}

export default App
