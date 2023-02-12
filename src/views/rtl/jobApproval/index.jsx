import React, { useState, useEffect } from 'react';
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button,Text } from '@chakra-ui/react';
import 'assets/css/quiz.css'
import { listCompanyJob } from '../../../service/api';
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



            const jobs = await listCompanyJob(token);
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
                            <Link to="/company/jobDetails" style={{position:"relative",float:"right"}}>
                            <Button  mr="0" borderRadius='5px' onClick={()=>{localStorage.setItem("jobId",job._id)}} >View Details</Button></Link>

                            </div>
                    </div>
                )
            }) : <div>No Jobs Posted</div>
            }
           </div>
    )
}
