// import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)//
<<<<<<< HEAD
  //hi
=======
>>>>>>> 259a6ef (Commit on April 27, 2025)

  return (
    <>
        {/* <!--NavBar Start--> */}
    <nav className="flex justify-between p-4 md:mx-15 lg:mx-30 items-center">
        <div id="logo" className="">
            <img className="w-32 h-auto"  src="/logo.svg" alt="logo" />
        </div>
        <div className="">
            <ul className="text-black justify-between md:flex hidden ">
                <li className="mx-[20px] font-medium text-xl font-poppins cursor-pointer">Home</li>
                <li className="mx-[20px] font-medium font-poppins text-xl cursor-pointer font-">Service</li>
                <li className="mx-[20px] font-medium font-poppins text-xl cursor-pointer">Work</li>
                <li className="mx-[20px] font-medium font-poppins text-xl cursor-pointer">Design</li>
                <li className="mx-[20px] font-medium font-poppins text-xl cursor-pointer">Contact</li>
            </ul>
        </div>
        <div className="md:flex hidden">
            <div><a href="https://www.facebook.com/alvee.55"><img className="w-8 mx-[8px]" src="/fb-icon.svg"
                        alt="Social-icon"/></a></div>
            <div><a href="https://github.com/alvee3120"><img className="w-8 mx-[8px]" src="./github-icon.svg"
                        alt="Social-icon"/></a></div>
            <div><a href="https://www.linkedin.com/in/md-fazlah-karim-alvee-aab19427a/"><img className="w-8 mx-[8px]"
                        src="./linkedin.svg" alt="Social-icon"/></a></div>
        </div>
        <div className="md:hidden">
            <a href="#"><img className="w-8 h-auto" src="/hamburger.svg" alt=""/></a>
        </div>
    </nav>
    {/* <!--NavBar END-->

    <!--Hero Section Start--> */}

    <div id="container" className=" flex  md:flex-row flex-col-reverse mx-4 md:mx-15 lg:mx-30 relative z-10">

        <div id="info" className="md:w-1/2  w-full grid place-content-center">
            <h4 className="text-orange-custom font-bold text-[20px] md:text-[24px] lg:text-[26px]  font-poppins">Hi I'm</h4>
            <h1 className="text-navy-custom font-bold text-[70px] mt-[-10px]  md:text-[90px] lg:text-[100px] font-poppins">Alvee</h1>
            <h3 className="text-navy-custom font-bold text-[24px]  md:text-[24px] lg:text-[30px] font-poppins">Web Developer and UI Designer</h3>
            <p className="text-navy-custom lg:text-[18px] md:text-[16px]  text-[16px] text-justify font-poppins mt-[10px]">Experienced web developer proficient in
                front-end technologie, creating visually stunning and functional websites. Passionate about crafting
                seamless user experiences and staying up-to-date with the latest industry trends.</p>
            <div id="buttons" className="mt-8 mb-6 lg:mb-4 flex justify-between md:justify-start">
                <a className="mr-15" href="#"><button
                        className="border-1 bg-orange-custom text-white font-poppins font-extralight px-6 py-3 rounded-lg hover:border-orange-custom hover:bg-white hover:text-orange-custom">Download
                        CV</button></a>
                <a href="#"><button
                        className="border-1 border-orange-custom text-orange-custom py-3 px-6 rounded-lg hover:bg-orange-custom hover:text-white">Contact
                        Me</button></a>
            </div>
        </div>
        <div id="img" className="md:w-1/2 w-full flex items-center justify-center">
            <img className=" w-120" src="./Hero.png" alt=""/>
        </div>

    </div>

{/* 
    <!--Experience Components Start--> */}


    <div className="shadow-2xl flex-wrap  mb-[-70px] py-4 px-4 md:mx-15 lg:mx-30 flex justify-between  rounded-2xl md:rounded-[68px]  bg-white relative z-1000 ">

        <div id="icon-card1" className="w-full lg:w-1/3 flex justify-start lg:pl-0 pl-8">
            <div className="">
                <img className="lg:w-36 w-24 p-4" src="./exp.svg" alt="" />
            </div>
            <div className="grid place-content-center">
                <h4 className="font-poppins text-navy-custom lg:text-[30px] md:text-[24px] text-[24px] font-bold">2 year working</h4>
                <p className="font-poppins text-orange-custom md:text-[18px] text-[16px]">Experience</p>
            </div>
        </div>
        <div id="icon-card2" className="w-full lg:w-1/3 flex justify-start lg:pl-0 pl-8">
            <div className="">
                <img className="lg:w-36 w-24 p-4" src="./project.svg" alt=""/>
            </div>
            <div className="grid place-content-center">
                <h4 className="font-poppins text-navy-custom lg:text-[30px] md:text-[24px] text-[24px] font-bold">124+ Project</h4>
                <p className="font-poppins text-orange-custom md:text-[18px] text-[16px] ">Completed</p>
            </div>
        </div>
        <div id="icon-card3" className="w-full lg:w-1/3 flex justify-start lg:pl-0 pl-8">
            <div className="">
                <img className="lg:w-36 w-24 p-4" src="./support.svg" alt=""/>
            </div>
            <div className="grid place-content-center">
                <h4 className="font-poppins text-navy-custom lg:text-[30px] md:text-[24px] text-[24px] font-bold">Online 24/7</h4>
                <p className="font-poppins text-orange-custom md:text-[18px] text-[16px] ">Support</p>
            </div>
        </div>

    </div>
{/* <!--Experience Components END-->

    <!--Hero Section END-->

    <!--Service Section Start--> */}

     <div className="h-200 bg-white relative z-00  pt-24 ">


        <div>
            <h3>Services</h3>
            <h2>I provide wide range of digital services</h2>
            <div>
                <button>left icon</button>
                <button>Right icon</button>
            </div>
        </div>



    </div>
    {/* <!--Service Section END--> */}
    </>
  )
}

export default App
