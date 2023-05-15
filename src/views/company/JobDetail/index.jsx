import React, { useEffect, useState } from 'react';
import { getJobDetail } from '../../../service/api';
import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { listJobApplicants } from "../../../service/api";
import cardImg from 'assets/img/dashboards/Debit.png'
export default function JobDetail() {
  // const url = window.location.href;
  // const id = url.substring(url.lastIndexOf('/') + 1);
  // console.log(id);   const [students, setStudents] = React.useState([]);

  const [students, setStudents] = useState([]);
  const [eli, seteli] = useState([]);
  const [nonEli, setnonEli] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    const initial = async () => {
      let token = localStorage.getItem('token');
      let Id = localStorage.getItem('jobId');
      console.log(token);
      const jobDetail = await getJobDetail(token, Id);
      console.log(jobDetail.data.data[0]);
      setData(jobDetail.data.data[0]);
      const getStudents = await listJobApplicants(token, { jobId: jobDetail.data.data[0]._id });
      getStudents.data.data.map((item) => {
       item.skills.filter(element => jobDetail.data.data[0].jobSkillsArray.includes(element.name) ? seteli(eli => [...eli, element]) : setnonEli(nonEli => [...nonEli, element]));
      });
      console.log(eli);
      console.log(nonEli);

     
      setStudents(getStudents.data.data);

    }
    initial();
  }, []);
  return (
    <div>

      <div style={{ height: "100px" }}></div>

      {data ?
        <div
          className="question"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div
            style={{
              clipPath: "circle(60%)",
              position: "absolute",
              right: "-42%",
              top: "-45%",
              zIndex: "0",
            }}
          >
            <img src={cardImg} alt="" />
          </div>
          <Text fontSize="2rem" fontWeight="bold" style={{ zIndex: "1" }}>
            {data.jobTitle} ({data.jobStatus})
          </Text>
          <Text fontSize="1rem" fontWeight="bold" style={{ zIndex: "1" }}>
            Experience required : {data.jobExperience}
          </Text>
          <Text fontSize="15px" fontWeight="bold" style={{ zIndex: "1" }}>
            {data.jobDescription}
          </Text>
          <Text
            fontSize="1.5rem"
            fontWeight="bold"
            style={{
              zIndex: "1",
              position: "absolute",
              right: "5%",
              top: "10%",
              color: "white",
            }}
          >
            {data.jobLocation}
          </Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text
              fontSize="1.1rem"
              fontWeight="bold"
              mt="10px"
              style={{ zIndex: "1" }}
            >
              Eligible Branch{" "}
              {data.branchEligible.map((item) => {
                return <Text>-{item}</Text>;
              })}
            </Text>
            <Text
              fontSize="1.1rem"
              fontWeight="bold"
              mt="10px"
              style={{ zIndex: "1" }}
            >
              Batch Branch{" "}
              {data.batchEligible.map((item) => {
                return <Text>-{item}</Text>;
              })}
            </Text>
            <Text
              fontSize="1.1rem"
              fontWeight="bold"
              mt="10px"
              style={{ zIndex: "1" }}
            >
              Skills Required{" "}
              {data.jobSkillsArray.map((item) => {
                return <Text>-{item}</Text>;
              })}
            </Text>
          </div>

          <Text
            fontSize="1.5rem"
            fontWeight="bold"
            style={{
              zIndex: "1",
              position: "absolute",
              left: "87%",
              top: "49%",
              color: "black",
            }}
          >
            {data.jobSalary}LPA
          </Text>
          <Text
            fontSize="1.2rem"
            fontWeight="bold"
            style={{
              zIndex: "1",
              position: "absolute",
              top: "50%",
              color: "black",
            }}
          >
            {data.jobType}
          </Text>
          <div style={{ marginTop: "70px" }}>
            <TableContainer>
              <Table variant='simple'>
                <TableCaption>Students</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>email</Th>
                    <Th>Contact</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {students && students.map((student) => {

                    return (
                      <Tr>
                        <Td>{student.firstName + " " + student.lastName}</Td>
                        <Td>{student.email}</Td>
                        <Td>{student.contactNo}</Td>
                      </Tr>
                    )
                  }
                  )}

                </Tbody>

              </Table>
            </TableContainer>
          </div>
        </div>
        :
        null}



    </div>
  )
}
