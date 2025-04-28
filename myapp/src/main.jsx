import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'




  // const index = 0;
  // const element = (

  //   <h1 className='heading' tabIndex={index}>
  //     <span className='text'>Hello Alvee!</span> 

  //   </h1>
  // ) 

  // ReactDOM.render(element, document.getElementById('root'));




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
