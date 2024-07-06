import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component'
import NavBar from './components/navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const item = "E o mais próximo é no Eldorado, bem pertinho."
  const handleCount = ()=>{
    setCount(count+1)
  }

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
