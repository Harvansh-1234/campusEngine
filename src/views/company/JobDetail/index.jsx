import React, { useEffect,useState } from 'react';
import { getJobDetail } from '../../../service/api';

export default function JobDetail() {
    // const url = window.location.href;
    // const id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(id);
const [data, setData] = useState();
    useEffect(() => {
        const initial = async () => {
            let token = localStorage.getItem('token');
            let Id = localStorage.getItem('jobId');
            console.log(token);
             const jobDetail = await getJobDetail(token, Id);
             console.log(jobDetail.data.data[0]);
           setData(jobDetail.data.data[0]);
        }
        initial();
    },[]);
  return (
    <div>
  
    {data ?<div>
      <h1>{data.jobDescription}</h1>
      <h1>{data.jobExperience}</h1>
      <h1>{data.jobLocation}</h1>
      <h1>{data.jobPostedOn}</h1>
      <h1>{data.jobSalary}</h1>
      
     {data.jobSkillsArray.map((item) => {
                return (
                    <div>
                        <h1>{item}</h1>
                    </div>
                )
            }) }

      <h1>{data.jobStatus}</h1>
      <h1>{data.jobTitle}</h1>
      <h1>{data.jobType}</h1>
      <h1>{data.jobVacancies}</h1>
    </div>:null}
    </div>
  )
}
