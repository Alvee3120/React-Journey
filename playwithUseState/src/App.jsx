// import { useState } from 'react'

import './App.css'

const people = [
  {
    name: "Md Fazlah Karim Alvee",
    age: 24,
    department: "CSE",
    id: "22103120"
  },
  {
    name: "Sumaiya Mahdiya Mahia",
    age: 23,
    department: "CSE",
    id: "22103121"
  },
  {
    name: "Sabbir Hossain Hridoy",
    age: 24,
    department: "CSE",
    id: "22103122"
  },
  {
    name: "Sabbir ullah",
    age: 25,
    department: "CSE",
    id: "22103123"
  },
  {
    name: "Nusrat Jahan",
    age: 22,
    department: "CSE",
    id: "22103124"
  },
  {
    name: "Tanvir Rahman",
    age: 24,
    department: "CSE",
    id: "22103125"
  },
  {
    name: "Mehjabin Chowdhury",
    age: 23,
    department: "CSE",
    id: "22103126"
  },
  {
    name: "Rafiul Islam",
    age: 25,
    department: "CSE",
    id: "22103127"
  },
  {
    name: "Shorna Akter",
    age: 22,
    department: "CSE",
    id: "22103128"
  },
  {
    name: "Fahim Hasan",
    age: 24,
    department: "CSE",
    id: "22103129"
  },
  {
    name: "Md Fazlah Karim Alvee",
    age: 24,
    department: "CSE",
    id: "22103120"
  },
  {
    name: "Sumaiya Mahdiya Mahia",
    age: 23,
    department: "CSE",
    id: "22103121"
  },
  {
    name: "Sabbir Hossain Hridoy",
    age: 24,
    department: "CSE",
    id: "22103122"
  },
  {
    name: "Sabbir ullah",
    age: 25,
    department: "CSE",
    id: "22103123"
  },
  {
    name: "Nusrat Jahan",
    age: 22,
    department: "CSE",
    id: "22103124"
  },
  {
    name: "Tanvir Rahman",
    age: 24,
    department: "CSE",
    id: "22103125"
  },
  {
    name: "Mehjabin Chowdhury",
    age: 23,
    department: "CSE",
    id: "22103126"
  },
  {
    name: "Rafiul Islam",
    age: 25,
    department: "CSE",
    id: "22103127"
  },
  {
    name: "Shorna Akter",
    age: 22,
    department: "CSE",
    id: "22103128"
  },
  {
    name: "Fahim Hasan",
    age: 24,
    department: "CSE",
    id: "22103129"
  },
  {
    name: "naeem Hasan",
    age: 24,
    department: "CSE",
    id: "22103129"
  }
];

function App() {

  return (
    <>
    <div className='flex te flex-wrap items-center justify-content h-screen '>


    {people.map( (p) =>{ return <div className=' border  bg-blue-200 w-80 h-60 p-10 m-2 grid place-items-center rounded-2xl'>

        <h2>Name: {p.name}</h2>
        <h4>Age: {p.age}</h4>
        <h4>Department: {p.department}</h4>
        <h4>ID:{p.id}</h4>
        

      </div>}
)}
      
    </div> 
    
    </>
  )
  
}

export default App
