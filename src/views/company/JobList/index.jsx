import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button,Image,Text,Heading,Stack,Divider,ButtonGroup ,Flex } from '@chakra-ui/react';
import 'assets/css/quiz.css'
import { listCompanyJob } from '../../../service/api';
import { Link } from 'react-router-dom';
export default function PostedJobs() {
    const [user, setUser] = useState({});
    const [token, settoken] = useState("");
    const [jobs, setJobs] = useState({});

    useEffect(() => {
        const initial = async () => {
            const user = localStorage.getItem("user");
            setUser(JSON.parse(user));
            const token = localStorage.getItem("token");
            settoken(token);



            const jobs = await listCompanyJob(token);
            setJobs(jobs.data.data);
            console.log(jobs);

        }
        initial();
    }, []);
    return (
        <div>{jobs.length > 0 ?
            jobs.map((job) => {
                return (
                    <div>
                        <div className="question">
                            <Text fontSize="20px" fontWeight="bold" >{job.jobTitle}</Text>
                            <Text fontSize="15px" fontWeight="bold" >{job.jobDescription}</Text>
                            <Text fontSize="15px" fontWeight="bold" >{job.jobLocation}</Text>
                            <Flex justify="space-between">
                            <Text fontSize="15px" fontWeight="bold" mx="10px">{job.jobSalary}</Text>
                            <Text fontSize="15px" fontWeight="bold" mx="10px">{job.branchEligible.map((item)=>{return <Text>{item}</Text>})}</Text>
                            <Text fontSize="15px" fontWeight="bold" >{job.jobExperience}</Text>
                            </Flex>
                            <Divider />
                            <Link to="/company/jobDetails">
                            <Button colorScheme='blue' mr="0" borderRadius='5px' onClick={()=>{localStorage.setItem("jobId",job._id)}}>View Details</Button></Link>

                            </div>
                    </div>
                )
            }) : <div>No Jobs Posted</div>
            }
           </div>
    )
}
