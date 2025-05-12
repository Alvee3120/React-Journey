import {  useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [displaycity, setDisplayCity] = useState('Dhaka')
  const [country, setCountry] = useState('BD')
  const [temp, setTemp] = useState('')
  const [showResult, setShowResult] = useState(true)
  const [feelslike, setFeelslike] = useState('')


  const handleSubmit = (e) => {
     e.preventDefault();
    
          
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=488d77946862e07dfc7c67eb256cad48`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        
        console.log(data.name);
        setTemp(Math.round(data.main.temp - 273.15))
        setCountry(data.sys.country)
        console.log(temp);
        setShowResult(true)
        setDisplayCity(data.name)
        setFeelslike(data.main.feels_like)
      })
    }

    

  return (
    <>
      <div
        id="main"
        className=" text-2xl relative grid place-content-center h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-blend-normal"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0 "></div>

        {/* Main Card */}
        <div className=" md:w-[50vw] w-[80vw]  rounded-2xl h-[80vh] shadow-2xl bg-[#f2f2f2] relative z-10">
          
          <div className="  text-4xl font-bold mx-auto mt-4 w-fit">
            <h2>Weather App</h2>
          </div>

          {/* Search Bar */}
          <div id="searchbar" className=" px-4 mt-14 w-full  overflow-hidden">
            <form onSubmit={handleSubmit}>
              <input
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                placeholder="Enter your city ..."
                className="border border-[#382866] w-[80%] p-2 text-xl rounded "
              />
              <button className="w-[20%] text-xl border rounded bg-[#382866] text-white py-2">Search</button>
            </form>
          </div>

          {/* result section */}

         {showResult && (<div id='result' className='mt-6'>
            <h2 className=' text-center text-5xl font-bold text-[#382866]'>{temp}°C</h2>
            <h2 className='mt-3 text-center text-3xl font-bold text-[#382866]'>{displaycity}, {country}</h2>
            <p className='mt-3 text-center text-xl  '>11 May, 2025 | 9.03PM</p>
            <div id='subresult'>
              <div id='item1'>
                <p>Feels Like: </p>
              </div>
            <div id='item2'></div>
            </div>
            
          </div>)} 
        </div>
      </div >

    </>
  )
}

export default App
