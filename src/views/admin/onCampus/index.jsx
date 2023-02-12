import React, { useEffect, useState } from 'react'
import { getAllEligibleJobs } from '../../../service/api'

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Image, Text, Heading, Stack, Divider, ButtonGroup, Flex } from '@chakra-ui/react';
import 'assets/css/quiz.css'


export default function OnCampus() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {

    const initial = async () => {
      let token = localStorage.getItem('token');
      const jobs = await getAllEligibleJobs(token);
      console.log(jobs);
      if(jobs&& jobs.status ===200){

        setJobs(jobs.data.data);
      }
    }
    initial();
  }, []);
  return (
    <div>
      {jobs && jobs.map((job) => {

        return (
          <div className="question">
            <Text fontSize="20px" fontWeight="bold" >{job.jobTitle}</Text>
            <Text fontSize="15px" fontWeight="bold" >{job.jobDescription}</Text>
            <Text fontSize="15px" fontWeight="bold" >{job.jobLocation}</Text>
            <Flex justify="space-between">
              <Text fontSize="15px" fontWeight="bold" mx="10px">{job.jobSalary}</Text>
              <Text fontSize="15px" fontWeight="bold" mx="10px">{job.branchEligible.map((item) => { return <Text>{item}</Text> })}</Text>
              <Text fontSize="15px" fontWeight="bold" >{job.jobExperience}</Text>
            </Flex>
            <Divider />

            <Button colorScheme='blue' mr="0" borderRadius='5px' onClick={() => { localStorage.setItem("jobId", job._id) }}>View Details</Button>

          </div>)
      })}
    </div>
  )
}
