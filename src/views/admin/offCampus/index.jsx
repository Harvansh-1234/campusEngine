import React, { useEffect, useState } from 'react'
import { getAllEligibleJobs ,applyJob} from '../../../service/api'

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
      const jobs = await getAllEligibleJobs(token);
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
      console.log(jobs);
      if(jobs&& jobs.status ===200){

        setJobs(jobs.data.data);
      }
    }
    initial();
  }, []);
  return (
    <div style={{marginTop:"10%"}}>
      {jobs && jobs.map((job) => {

        return (
          <div className="question" style={{overflow:'hidden',position:"relative"}}>
          <div style={{clipPath:"circle(60%)",position:"absolute",right:"-30%",top:"-5%",zIndex:"0"}}>
          <img src={cardImg} alt="" />
      </div>
              <Text fontSize="2rem" fontWeight="bold" style={{zIndex:"1"}} >{job.jobTitle}</Text>
              <Text fontSize="1rem" fontWeight="bold" style={{zIndex:"1"}} >Experience required : {job.jobExperience}</Text>
              <Text fontSize="15px" fontWeight="bold" style={{zIndex:"1"}} >{job.jobDescription}</Text>
              <Text fontSize="1.5rem" fontWeight="bold" style={{zIndex:"1",position:"absolute",right:"5%",top:"10%",color:"white"}} >{job.jobLocation}</Text>
              <Text fontSize="1.1rem" fontWeight="bold" mt="10px"  style={{zIndex:"1"}} >Eligible Branch {job.branchEligible.map((item)=>{return <Text>-{item}</Text>})}</Text>
              <Text fontSize="1.5rem" fontWeight="bold" style={{zIndex:"1",position:"absolute",left:"87%",top:"50%",color:"white"}} >{job.jobSalary}LPA</Text>
              
              <Button  mr="0" borderRadius='5px' style={{position:"relative",float:"right"}} onClick={async()=>{
              const apply = await applyJob(token,{jobId:job._id ,applicationStatus:"applied",studentId: user._id});
              console.log(apply);

              }} >Apply</Button>

              </div>)
      })}
    </div>
  )
}

