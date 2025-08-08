import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <>
    <div className='w-full flex justify-center'>

        <div className='bg-amber-600 px-60 py-6 text-center outline-none text-3xl text-white'>User:{userid}</div>
    </div>
     
    </>
   
  )
}

export default User