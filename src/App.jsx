import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div class="image-container">
        <img className="background" src= "src\assets\background.png"/>
        <div  className="overlay-image"/>
      </div>

    </>
  )
}

export default App