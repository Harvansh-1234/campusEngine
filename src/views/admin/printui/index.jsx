import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'assets/css/resume.css';
import { useEffect, useState, useRef } from 'react';
import { getResume } from '../../../service/api'
import { Select, Flex } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import {

    AiOutlineDelete,

} from "react-icons/ai";
import { compareAsc, format } from 'date-fns'

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
import { updateResume } from '../../../service/api';
// import WorkExperience from './workExp';
import { useReactToPrint } from "react-to-print";
// import Select from 'react-select'
function UserProfile() {
    const [user, setUser] = useState({});
    const [token, settoken] = useState("");
    const [resume, setResume] = useState({});
    const [college, setCollege] = useState("");
    const [branch, setBranch] = useState("");
    // const options = [
    //     { value: 'cpp', label: 'C++' },
    //     { value: 'java', label: 'Java' },
    //     { value: 'python', label: 'Python' }
    // ]
    // const componentRef = useRef();
    // const openPdf = useReactToPrint({
    //     content: () => componentRef.current,
    //     documentTitle: "Evaluation Report"
    // })
    const [page, setPage] = useState(1);
    const [edu, setEdu] = useState([]);
    const [eduinitialValues, setEduInitialValues] = useState({
        school: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        grade: ""
    });
    const [showEduForm, setShowEduForm] = useState(false);
    const [work, setWork] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        const initial = async () => {
            let token = localStorage.getItem('token');
            settoken(token);
            // console.log(token);
            const userData = await getResume(token);
            // console.log(userData);
            if (userData.status === 200);
            setResume(userData.data.data[0]);
            setCollege(userData.data.data[0].college !== undefined ? userData.data.data[0].college : "");
            setBranch(userData.data.data[0].branch !== undefined ? userData.data.data[0].branch : "");
            setEdu(userData.data.data[0] ? userData.data.data[0].education : "");
            console.log(userData);
            setWork(userData.data.data[0].work_experience);
            console.log(userData);

        }
        initial();


    }, [])
    return (
        <div className='userDetail' style={{marginTop:"10px", width: "100%" }} >

            <Formik
                initialValues={{
                    firstName: resume.name ? resume.name.first : '',
                    lastName: resume.name ? resume.name.last : '',
                    email: resume.contact ? resume.contact.email : '',
                    contactNo: resume.contact ? resume.contact.phone : '',

                    branch: resume.branch !== '' ? resume.branch : '',
                    year: resume.year !== '' ? resume.year : '',
                    college: resume.college !== '' ? resume.college : '',
                    degree: resume.degree !== '' ? resume.degree : '',

                    admission_year: resume.admission_year !== '' ? resume.admission_year : '',

                }}
                onSubmit={async (values) => {

                    // await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form style={{ margin: "0 25px", padding: "25px" }}>
                    <div style={{margin:'auto' }}>
                        <div className='headField'>
                            <div className='field' >
                                <label htmlFor="firstName">First Name</label>
                                <Field id="firstName" name="firstName" placeholder="" value={resume.name ? resume.name.first : ""} disabled />
                            </div>
                            <div className='field'>
                                <label htmlFor="lastName">Last Name</label>
                                <Field id="lastName" name="lastName" placeholder="" value={resume.name ? resume.name.last : ""} disabled />
                            </div>
                        </div>
                        <div className='headField'>
                            <div className='fieldFull'>
                                <label htmlFor="email">Email</label>

                                <Field
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    type="email"
                                    value={resume.contact ? resume.contact.email : ''}
                                    disabled
                                />
                            </div>

                        </div>
                        <div className='headField'>

                            <div className='fieldFull'>
                                <label htmlFor="contact_no">Contact No</label>
                                <Field
                                    id="contact"
                                    name="contactNo"
                                    placeholder=""
                                    type="contactNo"
                                    value={resume.contact ? resume.contact.phone : ''}
                                    disabled
                                />

                            </div>
                        </div>
                        <div className='headField'>

                            <div className='fieldFull'>
                                <label htmlFor="contact_no">College</label>

                                <Field
                                    id="contact"
                                    name="contactNo"
                                    placeholder=""
                                    type="contactNo"
                                    value={college}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='headField'>
                            <div className='field' >
                                <label htmlFor="degree">Degree</label>
                                <Field id="degree" name="degree" placeholder={resume.degree ? resume.degree : ''} />
                            </div>
                            <div className='field'>
                                <label htmlFor="branch">Branch</label>
                                {/* <Field id="branch" name="branch" placeholder="" value={user.lastName} /> */}
                                <Field
                                    id="branch"
                                    name="branch"
                                    placeholder="branch"
                                    type=""
                                    value={branch}
                                    disabled
                                />                        </div>
                        </div>
                        <div className='headField'>
                            <div className='field' >
                                <label htmlFor="year">Admission Year</label>
                                <Field id="year" name="year" placeholder={resume.year ? resume.year : ''} />
                            </div>
                            <div className='field'>
                                <label htmlFor="year">Passing Year</label>
                                <Field id="year" name="year" placeholder={resume.year ? parseInt(resume.year)+4 : ''} />
                            </div>
                        </div>
                    </div>



                    <div style={{ padding: "30px" }}><p style={{ fontSize: '30px', fontWeight: 'bolder' }}>Education</p>
                        <div className="" style={{ padding: "30px" }}>
                            {resume !== null &&
                                resume !== undefined &&
                                edu.map((item, index) => {
                                    return (
                                        <div style={{ position: "relative" }}>
                                            <div className="question">
                                                <Text fontSize="xl" fontWeight="bold" >{item.school}</Text>
                                                <Text fontSize="md" fontWeight="bold" >{item.degree}</Text>
                                                <Text fontSize="md" fontWeight="bold" >{item.field_of_study}</Text>
                                                <Text fontSize="md" fontWeight="bold" >{item.start_date}</Text>
                                                <Text fontSize="md" fontWeight="bold" >{item.end_date}</Text>
                                                <Text fontSize="md" fontWeight="bold" >{item.grade}</Text>
                                            </div>

                                        </div>

                                    );
                                })}


                        </div>
                    </div>

                    <div style={{ padding: "30px" }}><p style={{ fontSize: '30px', fontWeight: 'bolder' }}>Work Experience</p>
                        <div className="" style={{ padding: "30px" }}>
                            {resume !== null &&
                                resume !== undefined &&
                                work.map((item, index) => {
                                    return (
                                        <div>
                                            <div className="question">
                                                <Text fontSize="25px" fontWeight="bold" >{item.company}</Text>
                                                <Text fontSize="20px" fontWeight="bold" >{item.position}</Text>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
                                                    <Text fontSize="15px" fontWeight="bold" >Start Date : {format(new Date(item.startDate), 'yyyy-dd-mm')}</Text>
                                                    <Text fontSize="15px" fontWeight="bold" >End Date : {format(new Date(item.endDate), 'yyyy-dd-mm')}</Text>
                                                </div>
                                                <Text fontSize="12px"  >{item.description}</Text>
                                                {/* <AiOutlineDelete
                                                    className="text-red-600 cursor-pointer"
                                                    onClick={async () => {
                                                        setWork(
                                                            work.filter((item, i) => i !== index)
                                                        );
                                                        let res = JSON.parse(await localStorage.getItem("resume"));
                                                        res.work_experience = work.filter(
                                                            (item, i) => i !== index
                                                        );
                                                        setResume(res);
                                                        localStorage.setItem("resume", JSON.stringify(res));
                                                    }}
                                                /> */}
                                            </div>
                                        </div>

                                    );
                                })}


                        </div>
                    </div>
                </Form>
            </Formik>
        </div>)

}
export default UserProfile;