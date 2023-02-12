import React, { useEffect } from 'react';
import { getJobDetail } from '../../../service/api';

export default function JobDetail() {
    // const url = window.location.href;
    // const id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(id);

    useEffect(() => {
        const initial = async () => {
            let token = localStorage.getItem('token');
            let Id = localStorage.getItem('jobId');
            console.log(token);
             const jobDetail = await getJobDetail(token, Id);
             console.log(jobDetail);
        }
        initial();
    },[]);
  return (
    <div></div>
  )
}
