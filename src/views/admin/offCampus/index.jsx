import React, { useEffect, useState } from 'react'
import {  applyJob,getAllOffCampusJobs} from '../../../service/api'
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Image, Text, Heading, Stack, Divider, ButtonGroup, Flex } from '@chakra-ui/react';
import 'assets/css/quiz.css'
import cardImg from 'assets/img/dashboards/Debit.png';



export default function OnCampus() {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  useEffect(() => {

    const initial = async () => {
      let token = localStorage.getItem('token');
      setToken(token);
      const jobs = await getAllOffCampusJobs(token);
     
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
      console.log(jobs);
      if(jobs && jobs.status ===200){

        setJobs(jobs.data.data);
      }
    }
    initial();
  }, []);
  return (
    <div style={{marginTop:"10%"}}>
      {jobs.length > 0 && jobs.map((job) => {

        return (
          <div className="question" style={{overflow:'hidden',position:"relative"}}>
          <div style={{clipPath:"circle(60%)",position:"absolute",right:"-30%",top:"-5%",zIndex:"0"}}>
          <img src={cardImg} alt="" />
      </div>
              <Text fontSize="2rem" fontWeight="bold" style={{zIndex:"1"}} >{job.Company}</Text>
              <Text fontSize="1rem" fontWeight="bold" style={{zIndex:"1"}} > {job.Title}</Text>
              <Text fontSize="15px" fontWeight="bold" style={{zIndex:"1"}} >{job.place}</Text>
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

