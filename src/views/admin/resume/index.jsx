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
import WorkExperience from './workExp';
// import Select from 'react-select'
function UserProfile() {
    const [user, setUser] = useState({});
    const [token, settoken] = useState("");
    const [resume, setResume] = useState({});
    const [college, setCollege] = useState("");
    const [branch, setBranch] = useState("");
    const options = [
        { value: 'cpp', label: 'C++' },
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' }
    ]
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
            setEdu(userData.data.data[0].education);
            console.log(userData);

        }
        initial();


    }, [])
    return (
        <div className='userDetail' style={{ marginTop: "70px", width: "80%" }}>

            {page === 1 && <Formik
                initialValues={{
                    firstName: resume.name ? resume.name.first : '',
                    lastName: resume.name ? resume.name.last : '',
                    email: resume.contact ? resume.contact.email : '',
                    contactNo: resume.contact ? resume.contact.phone : '',
                    skills: [],
                    branch: "",
                    year: "",
                    college: "",
                    degree: "",
                    cgpa: "",
                    admission_year: "",

                }}
                onSubmit={async (values) => {
                    setPage(2);
                    values.branch = branch;
                    values.college = college;
                    console.log(values);
                    const updateresume = await updateResume(token, { degree: values.degree, year: values.year, admissionYear: values.admission_year, education: edu, branch: branch, college: college });
                    console.log(updateresume);
                    // await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form style={{ margin: "25px", padding: "25px" }}>
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

                            <Select
                                type="select"
                                onChange={(e) => { setCollege(e.target.value) }}
                                placeholder='Select option'
                                name="college"
                                value={college}
                            >

                                <option value='user'>MANIT</option>
                                <option value='company'>UIT</option>

                            </Select>
                        </div>
                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="degree">Degree</label>
                            <Field id="degree" name="degree" placeholder="" value={user.firstName} />
                        </div>
                        <div className='field'>
                            <label htmlFor="branch">Branch</label>
                            {/* <Field id="branch" name="branch" placeholder="" value={user.lastName} /> */}
                            <Select
                                type="select"
                                onChange={(e) => { setBranch(e.target.value) }}
                                placeholder='Select option'
                                name="branch"
                                value={branch}
                            >

                                <option value='user'>CSE</option>
                                <option value='company'>IT</option>

                            </Select>
                        </div>
                    </div>
                    <div className='headField'>
                        <div className='field' >
                            <label htmlFor="admission_year">Admission Year</label>
                            <Field id="admission_year" name="admission_year" placeholder="" value={user.admission_year} />
                        </div>
                        <div className='field'>
                            <label htmlFor="year">Current Year</label>
                            <Field id="year" name="year" placeholder="" value={user.year} />
                        </div>
                    </div>
                    {/* <div className='headField'>
            <div className='field'>
              <label htmlFor="email">Skills</label>
              <Select options={options} />

            </div>
          </div> */}

                    <Button colorScheme='blue' mx='45%' borderRadius='5px' type="submit">Save and Next</Button>
                </Form>
            </Formik>
            }

            {page === 2 &&
                <div style={{ padding: "30px" }}><p>Education</p>
                    <div className="" style={{ padding: "30px" }}>
                        {resume !== null &&
                            resume !== undefined &&
                            edu.map((item, index) => {
                                return (
                                    <div>
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
                        <div style={{ display: "flex", margin: "auto" }}>
                            <Button
                                colorScheme='blue'
                                borderRadius='5px'
                                mx="15px"
                                onClick={async () => {
                                    onOpen();

                                    await setEduInitialValues({
                                        school: null,
                                        degree: null,
                                        field_of_study: null,
                                        start_date: null,
                                        end_date: null,
                                        grade: null,
                                        description: null,
                                    });
                                    await setShowEduForm(true);
                                }}
                            >
                                Add Education
                            </Button>

                            {/* <Button colorScheme='blue' borderRadius='5px' mx="15px"
                            >Submit</Button> */}




                        </div>

                    </div>
                    <div>

                        {showEduForm && (
                            <Modal isOpen={isOpen} onClose={onClose} >
                                <ModalOverlay />
                                <ModalContent w='100%' style={{ width: "100%" }}>
                                    <ModalHeader>Education Details</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody mx='auto' >
                                        {/* <Lorem count={2} /> */}

                                        <Formik
                                            initialValues={eduinitialValues}
                                            onSubmit={async (values) => {

                                                setEdu([...edu, values])

                                            }}
                                            validate={(values) => {
                                                if (showEduForm === false) return {};
                                                const errors = {};
                                                if (!values.school || values.school === " ") {
                                                    errors.school = "Required";
                                                }
                                                if (
                                                    values.degree === null ||
                                                    values.degree.trim() === ""
                                                ) {
                                                    errors.degree = "Required !";
                                                }
                                                if (
                                                    values.fieldOfStudy === null ||
                                                    values.fieldOfStudy.trim() === ""
                                                ) {
                                                    errors.fieldOfStudy = "Required !";
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

                                                if (values.grade === null) {
                                                    errors.grade = "Required !";
                                                }
                                            }}
                                        >
                                            {({ values }) => {
                                                return (
                                                    <Form className="">
                                                        <div className='headField'>
                                                            <div className='field' >
                                                                <label htmlFor="school">School</label>
                                                                <Field id="school" name="school" placeholder="" />
                                                            </div>
                                                            <div className='field'>
                                                                <label htmlFor="degree">Degree</label>
                                                                <Field id="degree" name="degree" placeholder="" value={user.lastName} />
                                                            </div>
                                                        </div>
                                                        <div className='headField'>
                                                            <div className='field' >
                                                                <label htmlFor="startDate">Start Date</label>
                                                                <Field id="startDate" name="startDate" placeholder="" value={user.firstName} />
                                                            </div>
                                                            <div className='field'>
                                                                <label htmlFor="endDate">End Date</label>
                                                                <Field id="endDate" name="endDate" placeholder="" value={user.lastName} />
                                                            </div>
                                                        </div>
                                                        <div className='headField'>
                                                            <div className='field' >
                                                                <label htmlFor="grade">Grade</label>
                                                                <Field id="grade" name="grade" placeholder="" value={user.firstName} />
                                                            </div>
                                                            <div className='field'>
                                                                <label htmlFor="fieldOfStudy">Field of Study</label>
                                                                <Field id="fieldOfStudy" name="fieldOfStudy" placeholder="" value={user.lastName} />
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
                        <Button colorScheme='blue' mx='45%' borderRadius='5px' onClick={async () => {
                            setPage(3);
                            const updateresume = await updateResume(token, { education: edu });
                            console.log(updateresume);
                        }}>Save and Next</Button>

                    </div>

                </div>
            }
            {
                page === 3 &&
               <WorkExperience/>
            }
        </div >
    )
}

export default UserProfile