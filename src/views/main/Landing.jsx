import React from 'react'
import About from './About'
import Navbar from './components/Navbar'
import Home from './Home'
import Services from './Services'

function Landing() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    </div>
  )
}

export default Landing