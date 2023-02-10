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
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magni necessitatibus illum animi quod! Beatae facilis sint blanditiis nulla non et quaerat illum, iste adipisci amet nostrum recusandae delectus molestias.</p>
   </div>
    </div>
  )
}

export default Home