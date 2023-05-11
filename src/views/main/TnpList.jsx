import React from 'react'
import data from "./data.js"
import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import cardImg from 'assets/img/dashboards/Debit.png';

function TnpList() {
  return (
    <div style={{marginTop:"100px"}}>
   
    <h1>TNP<span>.</span>
    </h1>
    
      {data.length > 0 && data.map((job) => {

return (
  <div className="question" style={{overflow:'hidden',position:"relative"}}>
  <div style={{clipPath:"circle(60%)",position:"absolute",right:"-30%",top:"-5%",zIndex:"0"}}>
  <img src={cardImg} alt="" />
</div>
      <Text fontSize="2rem" fontWeight="bold" style={{zIndex:"1"}} >{data.tnp}</Text>
      <Text fontSize="1rem" fontWeight="bold" style={{zIndex:"1"}} > {data.discription}</Text>
      <Text fontSize="15px" fontWeight="bold" style={{zIndex:"1"}} >{data.rating}</Text>
      <Text fontSize="1.5rem" fontWeight="bold" style={{zIndex:"1",position:"absolute",right:"5%",top:"10%",color:"white"}} >{job.Location}</Text>
      
      <Text fontSize="1rem" fontWeight="bold" style={{zIndex:"1",position:"absolute",left:"3%",top:"60%",color:"#333"}} >{job.Date}</Text>
      
     <Link href={job.Link} ><Button  mr="0" borderRadius='5px' style={{position:"relative",float:"right"}}  onClick={()=>{
        window.location.href = job.Link;
     }}>Apply</Button></Link>

      </div>)
})}

    </div>
  )
}

export default TnpList
