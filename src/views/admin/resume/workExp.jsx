import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'assets/css/resume.css';
import { useEffect, useState } from 'react';
import { getUserInfo, getResume } from '../../../service/api'
import { Select } from '@chakra-ui/react'
import { FiInfo } from "react-icons/fi";
import { BsCalendar, BsLinkedin } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";
import { Button } from '@chakra-ui/react'
import {

    AiOutlineDelete,

} from "react-icons/ai";
import 'assets/css/quiz.css'
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

function WorkExperience() {
    const [user, setUser] = useState({});
    const [token, settoken] = useState("");
    const [resume, setResume] = useState({});

    const options = [
        { value: 'cpp', label: 'C++' },
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' }
    ]
    const [page, setPage] = useState(1);
    const [work, setWork] = useState([]);
    const [showWorkForm, setShowWorkForm] = useState(false);

    const [workinitialValues, setWorkInitialValues] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    });
    const [showEduForm, setShowEduForm] = useState(false);
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
            setWork(userData.data.data[0].work_experience);
            console.log(userData);

        }
        initial();


    }, []);

    return (
        <div className='userDetail' style={{ marginTop: "70px", width: "80%" }}>
            <div style={{ padding: "30px" }}><p>Work Experience</p>
                <div className="" style={{ padding: "30px" }}>
                    {resume !== null &&
                        resume !== undefined &&
                        work.map((item, index) => {
                            return (
                                <div>
                                    <div className="question">
                                        <Text fontSize="20px" fontWeight="bold" >{item.company}</Text>
                                        <Text fontSize="20px" fontWeight="bold" >{item.position}</Text>
                                        <Text fontSize="20px" fontWeight="bold" >{item.startDate}</Text>
                                        <Text fontSize="20px" fontWeight="bold" >{item.endDate}</Text>
                                        <Text fontSize="20px" fontWeight="bold" >{item.description}</Text>
                                    </div>
                                </div>

                            );
                        })}
                    <div style={{ display: "flex", margin: "auto" }}>
                        <Button
                            colorScheme='blue'
                            borderRadius='5px'
                            mx="15px"
                            onClick={async () => {
                                onOpen();

                                await setWorkInitialValues({
                                    company: null,
                                    position: null,

                                    startDate: null,
                                    endDate: null,

                                    description: null,
                                });
                                await setShowWorkForm(true);
                            }}
                        >
                            Add Work Experience
                        </Button>

                        {/* <Button colorScheme='blue' borderRadius='5px' mx="15px"
                            >Submit</Button> */}




                    </div>

                </div>
                <div>

                    {showWorkForm && (
                        <Modal isOpen={isOpen} onClose={onClose} >
                            <ModalOverlay />
                            <ModalContent w='100%' style={{ width: "100%" }}>
                                <ModalHeader>Work Experience</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody mx='auto' >
                                    {/* <Lorem count={2} /> */}

                                    <Formik
                                        initialValues={workinitialValues}
                                        onSubmit={async (values) => {

                                            setWork([...work, values])

                                        }}
                                        validate={(values) => {
                                            if (showWorkForm === false) return {};
                                            const errors = {};
                                            if (!values.company || values.company === " ") {
                                                errors.company = "Required";
                                            }
                                            if (
                                                values.position === null ||
                                                values.position.trim() === ""
                                            ) {
                                                errors.position = "Required !";
                                            }
                                            if (
                                                values.description === null ||
                                                values.description.trim() === ""
                                            ) {
                                                errors.description = "Required !";
                                            }
                                            if (values.startDate === null) {
                                                errors.startDate = "Required !";
                                            }
                                            if (values.endDate === null) {
                                                errors.endDate = "Required !";
                                            }

                                            if (values.startDate > new Date()) {
                                                errors.startDate =
                                                    "Start date cannot be greater than today's date";
                                            }


                                        }}
                                    >
                                        {({ values }) => {
                                            return (
                                                <Form className="">
                                                    <div className='headField'>
                                                        <div className='field' >
                                                            <label htmlFor="company">Company</label>
                                                            <Field id="company" name="company" placeholder="" />
                                                        </div>
                                                        <div className='field'>
                                                            <label htmlFor="position">Position</label>
                                                            <Field id="position" name="position" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className='headField'>
                                                        <div className='field' >
                                                            <label htmlFor="startDate">Start Date</label>
                                                            <Field id="startDate" name="startDate" placeholder="" />
                                                        </div>
                                                        <div className='field'>
                                                            <label htmlFor="endDate">End Date</label>
                                                            <Field id="endDate" name="endDate" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className='headField'>
                                                        <div className='field' >
                                                            <label htmlFor="description">Description</label>
                                                            <Field id="description" name="description" placeholder="" />
                                                        </div>

                                                    </div>
                                                    <Button colorScheme='blue' mr={3} type="submit">
                                                        Add
                                                    </Button>

                                                </Form>)
                                        }}
                                    </Formik>



                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    )}
                    {/* <Button colorScheme='blue' mx='45%' borderRadius='5px' onClick={async () => {
                        const curr = localStorage.getItem('pageNo');
                        let no = parseInt(curr);

                        setPage(2);
                        localStorage.setItem('pageNo', 2);

                    }}>Prev</Button> */}
                    <Button colorScheme='blue' mx='45%' borderRadius='5px' onClick={async () => {
                        

                       

                        const updateresume = await updateResume(token, { work_experience: work });
                        console.log(updateresume);
                    }}>Submit</Button>

                </div>

            </div>
        </div>

    )

}
export default WorkExperience;