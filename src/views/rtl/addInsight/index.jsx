import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "@chakra-ui/react";
import { UploadCollegeProfile } from "service/api";
import { AiOutlineDelete } from "react-icons/ai";
import { Avatar, Box, Flex, useColorModeValue } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// import { createInsight } from "service/api";
function AddInsight() {
  const [recentlyTemplate, setRecentlyTemplate] = useState("");
  const [courseImgUrl, setCourseImgUrl] = useState(null);
  const [showEduForm, setShowEduForm] = useState(false);
  const [showRecruiter, setShowRecruiter] = useState(false);
  const [block, setBlock] = useState(false);
  const [collegeLogo, setCollegeLogo] = useState("");
  const [loader, setLoader] = useState(false);
  const [recently, setRecently] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [companylogo, setCompanylogo] = useState("");
  const [edu, setEdu] = useState([]);
  const [recruit, setRecruit] = useState([]);
  const [recent, setRecent] = useState([]);
  const [stu, setStu] = useState([]);
  const [resume, setResume] = useState({});
  const [recruiter, setRecruiter] = useState({
    companyLogo:"",
    companyName:"",
    interviewerName:"",
  })
  const [topStudent, setTopStudent] = useState({
    studentName: "",
    studentCgpa: "",
    studentRating: "",
  });
  const [recentlyCourses, setRecentlyCourses] = useState({
    recentCourse: "",
    recentImgUrl: "",
    recentName: "",
  });
  const [eduinitialValues, setEduInitialValues] = useState({
    courseName: "",
    courseImgUrl: "",
    instructorName: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log("hello...............");
    console.log(collegeLogo);
  }, [collegeLogo]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    setLoader(true);
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    let upload = await UploadCollegeProfile(base64);

    setCollegeLogo(upload.data);
    console.log(collegeLogo);
    setLoader(false);
  };
  const uploadCourse = async (event) => {
    setBlock(true);
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    let upload = await UploadCollegeProfile(base64);

    setCourseImgUrl(upload.data);
    console.log(courseImgUrl);
    setBlock(false);
  };
  const recentCourse = async (event) => {
    setBlock(true);
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    let upload = await UploadCollegeProfile(base64);

    setRecentlyTemplate(upload.data);
    console.log(recentlyTemplate);
    setBlock(false);
  };
    const uploadRecruiter = async (event) => {
    setBlock(true);
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    let upload = await UploadCollegeProfile(base64);

    setCompanylogo(upload.data);
    console.log(companylogo);
    setBlock(false);
  };

  return (
    <div className="userDetail" style={{ marginTop: "70px", width: "80%" }}>
      <Formik>
        <Form style={{ margin: "25px", padding: "25px" }}>
          <div className="headField">
            <div className="fieldFull">
              <label htmlFor="jobLocation">College Logo</label>
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                onChange={uploadImage}
              />
            </div>
          </div>
          <Button
            colorScheme="blue"
            mx="45%"
            borderRadius="5px"
            onClick={async () => {
              onOpen();
              await setShowEduForm(true);
            }}
          >
            Add Courses
          </Button>
          <div style={{ padding: "30px" }}>
            {edu.map((item, index) => {
              return (
                <div style={{ position: "relative" }}>
                  <div className="question">
                    <Text fontSize="xl" fontWeight="bold">
                      {item.courseName}
                    </Text>
                    <h2>{}</h2>
                    <Avatar
                      mx="auto"
                      src={item.courseImgUrl ? item.courseImgUrl : { Avatar }}
                      h="87px"
                      w="87px"
                      mt="-43px"
                      border="4px solid"
                    />
                    <Text fontSize="md" fontWeight="bold">
                      {item.instructorName}
                    </Text>
                  </div>
                  <AiOutlineDelete
                    className="text-red-600 cursor-pointer"
                    onClick={async () => {
                      setEdu(edu.filter((item, i) => i !== index));
                      let res = JSON.parse(
                        await localStorage.getItem("resume")
                      );
                      res.education = edu.filter((item, i) => i !== index);
                      // setResume(res);
                      localStorage.setItem("resume", JSON.stringify(res));
                    }}
                    style={{ position: "absolute", top: "3%", left: "76%" }}
                  />
                </div>
              );
            })}
            {showEduForm && (
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="100%" style={{ width: "200%" }}>
                  <ModalHeader>Education Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody mx="auto">
                    {/* <Lorem count={2} /> */}

                    <Formik
                      initialValues={eduinitialValues}
                      onSubmit={async (values) => {
                        console.log(values);
                        var temp = values;
                        console.log(courseImgUrl);
                        temp.courseImgUrl = courseImgUrl;
                        setEdu([...edu, temp]);
                        // console.log(temp);
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
                      }}
                    >
                      {({ values }) => {
                        return (
                          <Form className="">
                            <div className="headField">
                              <div className="field">
                                <label htmlFor="courseName">Course Name</label>
                                <Field
                                  id="courseName"
                                  name="courseName"
                                  placeholder=""
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="courseImgUrl">
                                  Course Template
                                </label>
                                <input
                                  type="file"
                                  name="courseImgUrl"
                                  id="file"
                                  className="inputfile"
                                  accept="image/*"
                                  onChange={uploadCourse}
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="instructorName">
                                  Course Instructor
                                </label>
                                <Field
                                  id="instructorName"
                                  name="instructorName"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <Button
                              colorScheme="blue"
                              mr={3}
                              disabled={block}
                              type="submit"
                            >
                              Add
                            </Button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </div>
          {/* Add Recently Courses */}

          <Button
            colorScheme="blue"
            mx="45%"
            borderRadius="5px"
            onClick={async () => {
              onOpen();
              await setRecently(true);
            }}
          >
            Add Recently Courses
          </Button>
          <div style={{ padding: "30px" }}>
            {recent.map((item, index) => {
              return (
                <div style={{ position: "relative" }}>
                  <div className="question">
                    <Text fontSize="xl" fontWeight="bold">
                      {item.recentCourse}
                    </Text>
                    <h2>{}</h2>
                    <Avatar
                      mx="auto"
                      src={item.recentImgUrl ? item.recentImgUrl : { Avatar }}
                      h="87px"
                      w="87px"
                      mt="-43px"
                      border="4px solid"
                    />
                    <Text fontSize="md" fontWeight="bold">
                      {item.recentName}
                    </Text>
                  </div>
                  <AiOutlineDelete
                    className="text-red-600 cursor-pointer"
                    onClick={async () => {
                      setRecent(recent.filter((item, i) => i !== index));
                      let res = JSON.parse(
                        await localStorage.getItem("resume")
                      );
                      res.education = recent.filter((item, i) => i !== index);
                      setResume(res);
                      localStorage.setItem("resume", JSON.stringify(res));
                    }}
                    style={{ position: "absolute", top: "3%", left: "76%" }}
                  />
                </div>
              );
            })}
            {recently && (
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="100%" style={{ width: "200%" }}>
                  <ModalHeader>Education Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody mx="auto">
                    {/* <Lorem count={2} /> */}

                    <Formik
                      initialValues={recentlyCourses}
                      onSubmit={async (values) => {
                        console.log(values);
                        var temp = values;
                        console.log(recentlyTemplate);
                        temp.recentImgUrl = recentlyTemplate;
                        setRecent([...recent, temp]);
                        // console.log(temp);
                      }}
                      validate={(values) => {
                        if (recent === false) return {};
                        const errors = {};
                        if (
                          !values.recentCourse ||
                          values.recentCourse === " "
                        ) {
                          errors.recentCourse = "Required";
                        }

                        if (
                          values.recentName === null ||
                          values.recentName.trim() === ""
                        ) {
                          errors.recentName = "Required !";
                        }
                      }}
                    >
                      {({ values }) => {
                        return (
                          <Form className="">
                            <div className="headField">
                              <div className="field">
                                <label htmlFor="recentCourse">
                                  Recently Course Name
                                </label>
                                <Field
                                  id="recentCourse"
                                  name="recentCourse"
                                  placeholder=""
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="recentImgUrl">
                                  Recent Course Template
                                </label>
                                <input
                                  type="file"
                                  name="recentImgUrl"
                                  id="file"
                                  className="inputfile"
                                  accept="image/*"
                                  onChange={recentCourse}
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="recentName">
                                  Recent Course Instructor
                                </label>
                                <Field
                                  id="recentName"
                                  name="recentName"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <Button
                              colorScheme="blue"
                              mr={3}
                              disabled={block}
                              type="submit"
                            >
                              Add
                            </Button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </div>

          {/* Add Top Students */}

          <Button
            colorScheme="blue"
            mx="45%"
            borderRadius="5px"
            onClick={async () => {
              onOpen();
              await setShowStudent(true);
            }}
          >
            Add Top Students
          </Button>
          <div style={{ padding: "30px" }}>
            {stu.map((item, index) => {
              return (
                <div style={{ position: "relative" }}>
                  <div className="question">
                    <Text fontSize="xl" fontWeight="bold">
                      {item.studentName}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                      {item.studentCgpa}
                    </Text>
                    <Text fontSize="md" fontWeight="bold">
                      {item.studentRating}
                    </Text>
                  </div>
                  <AiOutlineDelete
                    className="text-red-600 cursor-pointer"
                    onClick={async () => {
                      setStu(stu.filter((item, i) => i !== index));
                      let res = JSON.parse(
                        await localStorage.getItem("resume")
                      );
                      res.education = stu.filter((item, i) => i !== index);
                      setResume(res);
                      localStorage.setItem("resume", JSON.stringify(res));
                    }}
                    style={{ position: "absolute", top: "3%", left: "76%" }}
                  />
                </div>
              );
            })}
            {showStudent && (
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="100%" style={{ width: "200%" }}>
                  <ModalHeader>Education Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody mx="auto">
                    {/* <Lorem count={2} /> */}

                    <Formik
                      initialValues={topStudent}
                      onSubmit={async (values) => {
                        console.log(values);
                        var temp = values;
                        // console.log(recentlyTemplate);
                        // temp.recentImgUrl = recentlyTemplate;
                        setStu([...stu, temp]);
                      }}
                      validate={(values) => {
                        if (stu === false) return {};
                        const errors = {};
                        if (!values.studentName || values.studentName === " ") {
                          errors.studentName = "Required";
                        }

                        if (
                          values.studentCgpa === null ||
                          values.studentCgpa.trim() === ""
                        ) {
                          errors.studentCgpa = "Required !";
                        }
                        if (
                          values.studentRating === null ||
                          values.studentRating.trim() === ""
                        ) {
                          errors.studentRating = "Required !";
                        }
                      }}
                    >
                      {({ values }) => {
                        return (
                          <Form className="">
                            <div className="headField">
                              <div className="field">
                                <label htmlFor="studentName">
                                  Student Name
                                </label>
                                <Field
                                  id="studentName"
                                  name="studentName"
                                  placeholder=""
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="studentCgpa">
                                  Student CGPA
                                </label>
                                <Field
                                  id="studentCgpa"
                                  name="studentCgpa"
                                  placeholder=""
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="studentRating">
                                  Student Rating
                                </label>
                                <Field
                                  id="studentRating"
                                  name="studentRating"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <Button colorScheme="blue" mr={3} type="submit">
                              Add
                            </Button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </div>

          {/* Add Recruiters Name */}

          <Button
            colorScheme="blue"
            mx="45%"
            borderRadius="5px"
            onClick={async () => {
              onOpen();
              await setShowRecruiter(true);
            }}
          >
            Recruiters
          </Button>
          <div style={{ padding: "30px" }}>
            {recruit.map((item, index) => {
              return (
                <div style={{ position: "relative" }}>
                  <div className="question">
                    <Text fontSize="xl" fontWeight="bold">
                      {item.companyName}
                    </Text>
                    <h2>{}</h2>
                    <Avatar
                      mx="auto"
                      src={item.companyLogo ? item.companyLogo : { Avatar }}
                      h="87px"
                      w="87px"
                      mt="-43px"
                      border="4px solid"
                    />
                    <Text fontSize="md" fontWeight="bold">
                      {item.interviewerName}
                    </Text>
                  </div>
                  <AiOutlineDelete
                    className="text-red-600 cursor-pointer"
                    onClick={async () => {
                      setRecruit(recruit.filter((item, i) => i !== index));
                      let res = JSON.parse(
                        await localStorage.getItem("resume")
                      );
                      res.education = recruit.filter((item, i) => i !== index);
                      // setResume(res);
                      localStorage.setItem("resume", JSON.stringify(res));
                    }}
                    style={{ position: "absolute", top: "3%", left: "76%" }}
                  />
                </div>
              );
            })}
            {showRecruiter && (
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="100%" style={{ width: "200%" }}>
                  <ModalHeader>Recruiters Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody mx="auto">
                    {/* <Lorem count={2} /> */}

                    <Formik
                      initialValues={recruiter}
                      onSubmit={async (values) => {
                        console.log(values);
                        var temp = values;
                        temp.companyLogo = companylogo;
                        setRecruit([...recruit, temp]);
                        console.log(temp);
                      }}
                      validate={(values) => {
                        if (showRecruiter === false) return {};
                        const errors = {};
                        if (!values.companyName || values.companyName === " ") {
                          errors.companyName = "Required";
                        }

                        if (
                          values.interviewerName === null ||
                          values.interviewerName.trim() === ""
                        ) {
                          errors.interviewerName = "Required !";
                        }
                      }}
                    >
                      {({ values }) => {
                        return (
                          <Form className="">
                            <div className="headField">
                              <div className="field">
                                <label htmlFor="companyName">Company Name</label>
                                <Field
                                  id="companyName"
                                  name="companyName"
                                  placeholder=""
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="companyLogo">
                                  Company Logo
                                </label>
                                <input
                                  type="file"
                                  name="companyLogo"
                                  id="file"
                                  className="inputfile"
                                  accept="image/*"
                                  onChange={uploadRecruiter}
                                />
                              </div>
                              <div className="field">
                                <label htmlFor="interviewerName">
                                  Interviewer Name
                                </label>
                                <Field
                                  id="interviewerName"
                                  name="interviewerName"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <Button
                              colorScheme="blue"
                              mr={3}
                              disabled={block}
                              type="submit"
                            >
                              Add
                            </Button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </div>

          <Button colorScheme="blue" mx="45%" borderRadius="5px" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
export default AddInsight;