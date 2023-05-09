import React from 'react'
import service from 'assets/img/service.png'
import './CSS/services.css'
function Services() {
  return (
<div style={{position:"relative"}} id='services'>
        <div className='service'>
        <img src={service} alt="" />
      </div> 
      <div className='serviceContent'>
    <h1>Why do we <br/> use it<span>?</span>
    </h1>
    <p>Empowers students to create job profiles, search, and apply for jobs and internships; instant job matching that takes their career to the next level.</p>
   </div>
   <div className="serviceSet">
   <div className='servicePoint'>
    <div className='line'></div>
    <div className='dataPoint'>Effective outreach</div>
   </div>
   <div className='servicePoint'>
    <div className='line'></div>
    <div className='dataPoint'>Rich data analytics</div>
   </div>
   <div className='servicePoint'>
    <div className='line'></div>
    <div className='dataPoint'>Perfect skill mapping</div>
   </div>
   <div className='servicePoint'>
    <div className='line'></div>
    <div className='dataPoint'>Systematic recruitment</div>
   </div>
   <div className='servicePoint'>
    <div className='line'></div>
    <div className='dataPoint'>Prompt alerts and notifications</div>
   </div>
   </div>

    </div>
  )
}

export default Services