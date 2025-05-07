

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resData, setResData] = useState('')
  const [userinput, setUserinput] =useState('')

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(userinput);}

  useEffect(() => {
    const fetchedData = async() =>{
   
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userinput}`);
  // console.log(response); 
  const data = await response.json();
  console.log(data[0]);
  setResData(data[0])
  // console.log();
  
  
      


  
 }

  
  fetchedData();
},[userinput]);
  
  return (
    <>
    
      <div
        id="main"
        className="h-screen grid place-items-center bg-slate-950  "
      >
        <div className="border w-120 h-60  bg-white rounded-2xl">
          <div className=" m-4">
            <h3 className=" text-center text-3xl font-bold text-blue-950 m-3 ">
              
              My Dictionary
            </h3>
            <input
              placeholder="Search a word here..."
              value={userinput}
              onChange={(e)=> setUserinput(e.target.value)}
              className="p-3 border w-[100%] py-3 rounded-xl mb-2"
            ></input>
            <button 
              type="submit"
              onClick={handleSubmit}
              className="w-[100%] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              Search
            </button>
            <h4 className="mt-4">Result : {resData.meanings[0].partOfSpeech}</h4>
            {/* <audio src={resData.phonetic[0].audio[0]}></audio> */}
            {/* <p>Word: {data[0].word}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
