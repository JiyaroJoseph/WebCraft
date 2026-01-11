import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="image-container">
        <img className="background" src= "src\assets\background.png"/>
        <div  className="overlay-image" src="src\assets\webcraft.png"/>
      </div>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div className="auth-buttons">
          <a href="/login" className="login-btn">Login</a>
          <a href="/signup" className="signup-btn">Sign Up</a>
        </div>
        <a href="javascript:void(0);" className="icon" >
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </>
  )
  
}

export default App