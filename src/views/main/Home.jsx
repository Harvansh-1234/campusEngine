import React from 'react'
import './CSS/home.css'
import home from 'assets/img/home.png'
function Home() {
  return (
    <div>
       <div className='home'>
        <img src={home} alt="" />
      </div> 
      <div className='homeContent'>
    <h1>Campus Engine <span>.</span>
    </h1>
    <p>An all-encompassing campus placement management system that handles everything from student profiles, training, and placements to luring additional corporations to your institution and signing them up.</p>
   </div>
    </div>
  )
}

export default Home