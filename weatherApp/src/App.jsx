import { useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [displaycity, setDisplayCity] = useState('Dhaka')
  const [country, setCountry] = useState('BD')
  const [temp, setTemp] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [feelslike, setFeelslike] = useState('')
  const [mintemp, setMintemp] = useState('')
  const [maxtemp, setMaxtemp] = useState('')
  const [pressure, setPressure] = useState('')
  const [windspeed, setWindspeed] = useState('')
  const [icon, seticon] = useState('')
  const [main, setMain] = useState('')
  const [humidity, setHumidity] = useState('')
   const [cod, setCod] = useState('')
  //  const [found ,setfound] = useState(false) 


  const handleSubmit = (e) => {
    e.preventDefault();


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=488d77946862e07dfc7c67eb256cad48`)
      .then((response) => {
        return response.json();
      }).then((data) => {

       
        console.log(data);
        // setCod(data.cod)
        console.log(data.name);
        setTemp(Math.round(data.main.temp - 273.15))
        setFeelslike(Math.round(data.main.feels_like - 273.15))
        setMintemp(Math.round(data.main.temp_max - 273.15))
        setMaxtemp(Math.round(data.main.temp_max - 273.15))
        setCountry(data.sys.country)
        setShowResult(true)
        setDisplayCity(data.name)
        seticon(data.weather[0].icon)
        setPressure(data.main.pressure)
        setWindspeed(data.wind.speed)
        setMain(data.weather[0].description)
        setHumidity(data.main.humidity)


      })
  }



  return (
    <>
      <div
        id="main"
        className="  text-2xl relative grid place-content-center h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-blend-normal"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0 "></div>

        {/* Main Card */}
        <div className=" md:w-[60vw] w-[80vw]  rounded-2xl h-[80vh] shadow-2xl bg-[#382866] relative z-10">

          <div className="  text-4xl font-bold mx-auto mt-4 w-fit text-white">
            <h2>Weather App</h2>
          </div>

          {/* Search Bar */}
          <div id="searchbar" className=" px-4 mt-14 w-full  overflow-hidden">
            <form onSubmit={handleSubmit}>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city ..."
                className="border border-white focus:border-white outline-none text-white w-[80%] p-2 text-xl rounded "
              />
              <button className="w-[20%] text-xl border rounded bg-white text-[#382866] py-2">Search</button>
            </form>
          </div>

          {/* result section */}
          
         
            {showResult && (<div id='result' className='mt-6'>
            <h2 className='mt-3 text-center text-3xl font-normal text-white'>{displaycity}, {country}</h2>
            <div className='flex flex-wrap items-center justify-center text-center'>
              <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="icon" className='w-20' />
              <h2 className=' text-center text-6xl font-bold text-white'>{temp}°C</h2>
            </div>

            <h2 className='mt-3 text-center text-3xl font-normal text-white'>{main}</h2>



            <div id="subresult" className="flex flex-col md:flex-row  gap-16 justify-between m-12 text-white mt-6">
              <div id="item1" className="flex flex-col gap-2 md:text-2xl text-[20px]">
                <p>Feels Like: {feelslike}°C</p>
                <p>Minimum Temperature: {mintemp}°C</p>
                <p>Maximum Temperature: {maxtemp}°C</p>
              </div>
              <div id="item2" className="flex flex-col gap-2 md:text-2xl text-[20px]">
                <p>Pressure: {pressure} hPa</p>
                <p>Wind Speed: {windspeed} m/s</p>
                <p>Humidity: {humidity}%</p>
              </div>
            </div>



          </div>)}
         

          
        </div>
      </div >

    </>
  )
}

export default App
