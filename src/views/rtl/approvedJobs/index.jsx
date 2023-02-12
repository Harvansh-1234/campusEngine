import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button,Image,Text,Heading,Stack,Divider,ButtonGroup ,Flex } from '@chakra-ui/react';
import 'assets/css/quiz.css'
import { getAllJobs,updateJob } from '../../../service/api';
import { Link } from 'react-router-dom';
import cardImg from 'assets/img/dashboards/Debit.png';
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



            const jobs = await getAllJobs(token,{approvalStatus:"approved"});
             setJobs(jobs.data.data);
            console.log(jobs);

        }
        initial();
    }, []);
    return (
        <div>
        <div style={{ height: "100px" }}></div>{jobs.length > 0 ?
            jobs.map((job) => {
                return (
                    <div>

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

                            {/* <div style={{position:"absolute",right:"2%",bottom:"5%",zIndex:"1"}}>
                            <Button  mr="0" borderRadius='5px' mx="5px" onClick={async()=>{
                                const approve = await updateJob(token,{approvalStatus:"approved",jobId:job._id});
                                if(approve.status === 200){
                                    window.location.reload();
                                }

                            } }>Approve</Button>
                            <Button  mr="0" borderRadius='5px' mx="10px"   onClick={async()=>{
                                const reject = await updateJob(token,{approvalStatus:"rejected",jobId:job._id});
                                if(reject.status === 200){
                                    window.location.reload();
                                }
                            } }>Reject</Button>
                            </div> */}

                            </div>
                    </div>
                )
            }) : <div>No Jobs Posted</div>
            }
           </div>
    )
}
