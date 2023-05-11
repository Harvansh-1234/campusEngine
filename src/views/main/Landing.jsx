import React from 'react'
import About from './About'
import Navbar from './components/Navbar'
import Home from './Home'
import Services from './Services'
import TnpList from './TnpList'

function Landing() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <TnpList/>
    </div>
  )
}

export default Landing