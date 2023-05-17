import React from 'react'
import { Formik, Field, Form } from 'formik';
 import '../../../assets/css/resume.css';
import { useEffect, useState } from 'react';
import { getUserInfo, getResume } from '../../../service/api'
// import { Select } from '@chakra-ui/react'
import { FiInfo } from "react-icons/fi";
import { BsCalendar, BsLinkedin } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";
import { Button } from '@chakra-ui/react'
import {

    AiOutlineDelete,

} from "react-icons/ai";
// import 'assets/css/quiz.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure


} from '@chakra-ui/react'
import { createJob } from '../../../service/api';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';



function CreateJob() {
    const [user, setUser] = useState({});
    const [token, settoken] = useState("");
    const animatedComponents = makeAnimated();
    const [branch, setBranch] = useState([]);
    const [batch, setBatch] = useState([]);
    const [skills, setSkills] = useState([]);

    const options = [
        { value: 'CSE', label: 'CSE' },
        { value: 'IT', label: 'IT' },
        { value: 'EC', label: 'EC' }
    ]
    const Batchoptions = [
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' }
    ]
    const skillsOption = [
        { value: 'MERN', label: 'MERN' },
        { value: 'React', label: 'React' },
        { value: 'C++', label: 'C++' }
    ]

    useEffect(() => {
        const initial = async () => {

            const user = localStorage.getItem("user");
            setUser(JSON.parse(user));
        }
        initial();


    }, [])
    return (
        <div className='userDetail' style={{ marginTop: "70px", width: "80%" }}>

            <Formik
                initialValues={{

                    jobTitle: '',
                    jobDescription: '',
                    jobLocation: '',
                    jobType: '',
                    jobSkillsArray: [],
                    branchEligible: [],
                    batchEligible: [],
                    jobSalary: '',
                    jobExperience: '',

                    jobVacancies: '',
                    jobDeadline: '',
                    
                    jobPostedOn: new Date(),
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    console.log(batch);

                    const tempBatch = [];
                    batch.map((item) => tempBatch.push(item.value));
                    const tempBranch = [];
                    branch.map((item) => tempBranch.push(item.value));
                    const tempSkills = [];
                    skills.map((item) => tempSkills.push(item.value));


                    const token = localStorage.getItem("token");
                    const data = await createJob(token, { ...values,jobStatus:"open", branchEligible: tempBranch, batchEligible: tempBatch, jobCreator: user._id ,jobSkillsArray:tempSkills});
                    console.log(data);
                    if (data.data.status === 200) {
                        // alert("Job Created Successfully");
                        window.location.reload();
                    }
                    else {
                        alert("Error");
                    }
                }}
            >
                <Form style={{ margin: "25px", padding: "25px" }}>
                    <div className='headField'>
                        <div className='fieldFull' >
                            <label htmlFor="jobTitle">Job Title</label>
                            <Field id="jobTitle" name="jobTitle" placeholder="" />
                        </div>

                    </div>
                    <div className='headField'>
                        <div className='fieldFull' >
                            <label htmlFor="jobDescription">Job Description</label>
                            <Field id="jobDescription" name="jobDescription" placeholder="" />
                        </div>

                    </div>
                    <div className='headField'>
                        <div className='fieldFull' >
                            <label htmlFor="jobType">Job Type</label>
                            <Field id="jobType" name="jobType" placeholder="" />
                        </div>

                    </div>
                    <div className='headField'>
                        <div className='fieldFull' >
                            <label htmlFor="jobLocation">Job Location</label>
                            <Field id="jobLocation" name="jobLocation" placeholder="" />
                        </div>

                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="jobExperience">Job Experience</label>
                            <Field id="jobExperience" name="jobExperience" placeholder="" />
                        </div>
                        <div className='field' >
                            <label htmlFor="jobSalary">Job Salary</label>
                            <Field id="jobSalary" name="jobSalary" placeholder="" />
                        </div>

                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="jobVacancies">Job Vacancy</label>
                            <Field id="jobVacancies" name="jobVacancies" placeholder="" />
                        </div>
                        <div className='field' >
                            <label htmlFor="jobDeadline">Job Deadline</label>
                            <Field id="jobDeadline" name="jobDeadline" placeholder="" />
                        </div>

                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="branchEligible">Eligible Branch</label>
                            <Select
                                onChange={(e) => {
                                    setBranch(e);
                                }}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                // defaultValue={[colourOptions[4], colourOptions[5]]}
                                isMulti
                                options={options}
                            />
                        </div>


                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="batchEligible">Eligible Batch</label>
                            <Select
                                onChange={(e) => {
                                    setBatch(e);
                                }}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                // defaultValue={[colourOptions[4], colourOptions[5]]}
                                isMulti
                                options={Batchoptions}
                            />
                        </div>


                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="batchEligible">Skills Required</label>
                            <Select
                                onChange={(e) => {
                                    setSkills(e);
                                }}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                // defaultValue={[colourOptions[4], colourOptions[5]]}
                                isMulti
                                options={skillsOption}
                            />
                        </div>


                    </div>






                    <Button colorScheme='blue' mx='45%' borderRadius='5px' type="submit">Submit</Button>
                </Form>
            </Formik>
        </div>)
}
export default CreateJob;