import React from 'react'
import about from 'assets/img/about.png'
import './CSS/about.css'
function About() {
  return (
    <div style={{position:"relative"}} id='about'>
        <div className='about'>
        <img src={about} alt="" />
      </div> 
      <div className='aboutContent'>
    <h1>Student <span>.</span>
    </h1>
    <p>Empowers students to create job profiles, search, and apply for jobs and internships; instant job matching that takes their career to the next level.</p>
   </div>
   <div className='aboutContent1'>
    <h1>Companies <span>.</span>
    </h1>
    <p>Create multiple job postings and get instant access to the entire students' database to match them based on skills, GPA, and certificates for the best hiring experience.</p>
   </div>
   <div className='aboutContent2'>
    <h1>TNP<span>.</span>
    </h1>
    <p>Attract several companies and manage them from a centralized place; capture data and reports related to students and employers in a single click, securely.</p>
   </div>
    </div>
  )
}

export default About