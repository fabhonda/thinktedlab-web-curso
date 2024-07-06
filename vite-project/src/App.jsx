import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component'

function App() {
  const [count, setCount] = useState(0)
  const item = "E o mais próximo é no Eldorado, bem pertinho."

  return (
    <>
      <Component/>
      <p>{item}</p>
    </>
  )
}

export default App
