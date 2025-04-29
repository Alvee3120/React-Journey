import React from 'react'

function Card({name,position,company='Test',age, imgPath}) {
    return ( 

        <>

<div className="flex flex-col mb-10 gap-2 p-8 sm:flex-row sm:items-center bg-white rounded-xl sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 bg-white-500" src={imgPath} alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-xl font-semibold text-black">{name}</p>
      <p className="font-medium text-gray-500">{position}</p>
      <p className="font-medium text-gray-500">{company}</p>
      <p className="font-medium text-gray-500">Age: {age}</p>
    </div>
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
      Contact
    </button>
  </div>
</div>
        </> 
     );
}

export default Card;