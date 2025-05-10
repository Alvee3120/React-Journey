import { useState } from "react";

import "./App.css";
import "./index.css";

function App() {
  const [city, setCity] = useState("Dhaka");

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=488d77946862e07dfc7c67eb256cad48`
  ).then(setCity())

  return (
    <>
      <div id="main" className="grid place-content-center h-screen bg-[url('/public/bg.avif')] bg-contain bg-center">
        <div className="md:w-[50vw] w-[80vw] rounded-2xl h-[80vh] bg-[#f2f2f2] relative">
          <div className=" text-4xl  font-bold mx-auto mt-4 w-fit" >
            <h2 className="">Weather App</h2>

          </div>
          <div id="searchbar" className="  border px-4 mt-14 w-full overflow-hidden">

            <form>
              <input
                placeholder="Enter your city ..."
                className="border w-[80%] "
                type="text"
              ></input>
              <button className="w-[20%]   f">Search</button>
            </form>

          </div>
        </div>
      </div >
    </>
  );
}

export default App;
