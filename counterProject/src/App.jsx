 import { useState } from 'react'

import './App.css'





function App() {
  

 let [counter, setCounter] = useState(1)

const addValue = () => {

  setCounter(counter+1);
  console.log("Added");
  
}
const decreaseValue = () => {

  if(counter > 0){
     setCounter(counter-1);
  }
 
  console.log("Decreased");
  
}



  
  return (
    <>
  <h1 className="text-3xl font-bold underline">Welcome to my Counter Project</h1>  
  <br />

  <h2 className='text-3xl font-bold'> Counter : {counter}</h2>

   <button onClick={addValue} id="btn-addcounter"className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Counter {counter}</button>
   <button onClick={decreaseValue} id="btn-decreasecounter"className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Decrease Counter {counter}</button>

   <p className='text-2xl font-bold'>Footer: {counter}</p>

    </>
  )
}

export default App
