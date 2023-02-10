import React from 'react'
import about from 'assets/img/about.png'
import './CSS/about.css'
function About() {
  return (
    <div>
        <div className='about'>
        <img src={about} alt="" />
      </div> 
      <div className='aboutContent'>
    <h1>Campus Engine <span>.</span>
    </h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magni necessitatibus illum animi quod! Beatae facilis sint blanditiis nulla non et quaerat illum, iste adipisci amet nostrum recusandae delectus molestias.</p>
   </div>
    </div>
  )
}

export default About