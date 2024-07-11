import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component'
import NavBar from './components/navbar/NavBar'

function App() {
  
  return (
    <>
      <Component/>
      <p>{item}</p>
      <button onClick={handleCount}> Clique se você quer ir </button>
      <p>{"Vezes que você quis ir: " + count}</p>
     
    </>
  )
}

export default App
