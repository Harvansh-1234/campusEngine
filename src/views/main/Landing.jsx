import React from 'react'
import About from './About'
import Navbar from './components/Navbar'
import Home from './Home'

function Landing() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    </div>
  )
}

export default Landing