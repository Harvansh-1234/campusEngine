import React,{useState,useEffect} from "react";
import { Formik, Field, Form } from 'formik';
import { Button } from '@chakra-ui/react'
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

import { createInsight } from "service/api";
import {

    AiOutlineDelete,

} from "react-icons/ai";
function AddInsight() {
    const [edu, setEdu] = useState([]);
    const [user, setUser] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [eduinitialValues, setEduInitialValues] = useState({
        courseName: "",
        courseImgUrl: "",
        instructorName: ""
    });
    const [showEduForm, setShowEduForm] = useState(false);

  return (
    <>
    <div style={{ padding: "30px" }}><p>Education</p>
                    <div className="" style={{ padding: "30px" }}>
                        {edu!==null && edu!=undefined
                            && edu.map((item)=>{
                                return(
                                    <div style={{ position: "relative" }}>
                                        <div className="question">
                                            <Text fontSize="xl" fontWeight="bold" >Hello</Text>
                                            <Text fontSize="md" fontWeight="bold" >Dirty</Text>
                                            <Text fontSize="md" fontWeight="bold" >Fellow</Text>
                                            
                                        </div>
                                        {/* <AiOutlineDelete
                                            className="text-red-600 cursor-pointer"
                                            onClick={async () => {
                                                setEdu(
                                                    edu.filter((item, i) => i !== index)
                                                );
                                                let res = JSON.parse(await localStorage.getItem("resume"));
                                                res.education = edu.filter(
                                                    (item, i) => i !== index
                                                );
                                                setResume(res);
                                                localStorage.setItem("resume", JSON.stringify(res));
                                            }}
                                            style={{ position: "absolute", top: "3%", left: "76%" }} /> */}
                                    </div>

                                )
                            })
                            
                            }
                                    
                                
                            
                        <div style={{ display: "flex", margin: "auto" }}>
                            <Button style={{ position: 'relative', left: '40%', marginTop: '10px' }}
                                colorScheme='blue'
                                borderRadius='5px'
                                mx="15px"
                                onClick={async () => {
                                    onOpen();

                                    await setEduInitialValues({
                                        school: null,
                                        degree: null,
                                        field_of_study: null,
                                        
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
                                <ModalContent w='100%' style={{ width: "200%" }}>
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
                                                if (!values.courseName || values.courseName === " ") {
                                                    errors.courseName = "Required";
                                                }
                                                if (
                                                    values.instructorName === null ||
                                                    values.instructorName.trim() === ""
                                                ) {
                                                    errors.instructorName = "Required !";
                                                }
                                                if (
                                                    values.courseImgUrl === null ||
                                                    values.courseImgUrl.trim() === ""
                                                ) {
                                                    errors.courseImgUrl = "Required !";
                                                }
                                                
                                            }}
                                        >
                                            {({ values }) => {
                                                return (
                                                    <Form className="">
                                                        <div className='headField'>
                                                            <div className='field' >
                                                                <label htmlFor="school">CourseName</label>
                                                                <Field id="school" name="school" placeholder="" className="loginInput1" />
                                                            </div>
                                                            
                                                        </div>
                                                        <div className='headField'>
                                                            <div className='field' >
                                                                <label htmlFor="startDate">CourseImgUrl</label>
                                                                <Field id="startDate" name="startDate" placeholder="" value={user.firstName} className="loginInput1" />
                                                            </div>
                                                            
                                                        </div>
                                                        <div className='headField'>
                                                            <div className='field' >
                                                                <label htmlFor="grade">Instructor Name</label>
                                                                <Field id="grade" name="grade" placeholder="" value={user.firstName} className="loginInput1" />
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
                        <Button colorScheme='blue' mx='43%' borderRadius='5px' onClick={async () => {


                            // setPage(3);

                            // const updateresume = await updateResume(token, { education: edu });
                            // console.log(updateresume);
                        }} >Save and Next</Button>

                    </div>

                </div>
    
    
    
    </>
  );
}
export default AddInsight