// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React, { useState, useEffect } from "react";
import { BiPencil } from "react-icons/bi"
import { getUserInfo, Upload } from "service/api";
// import Modal from "../components/Modal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,



} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
export default function Banner(props) {
  const { banner, avatar, name, job, posts, followers, following } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  const [user, setUser] = useState("");
  const [modal, setModal] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const initial = async () => {
      let token = localStorage.getItem('token');
      // console.log(token);
      const userData = await getUserInfo(token);
      // console.log(userData);
      if (userData.status === 200);
      setUser(userData.data.data);
      setProfilePic(userData.data.data.profileImg);
      console.log(user);

    }
    initial();
  }, []);
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
    })
  }

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    let upload = await Upload(base64, user.email);
    console.log(upload)
    setProfilePic(upload.profileImg);
    // axios.post("http://localhost:8000/uploadImage",{image:base64}).then((res)=>{
    //   setUrl(res.data);
    //   alert("Image Uploaded Successfully");
    // }).then(()=>{
    //   console.log("url",url);
    // }).catch(console.log("error"));
  }

  return (
    <Card mb={{ base: "0px", lg: "20px" }} align='center'>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={profilePic ? profilePic : { Avatar }}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />

      <Button mx='auto' h='35px'
        w='35px' onClick={onOpen}>
        <p fontSize='1rem'> <BiPencil /></p>

      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx='auto' >
            {/* <Lorem count={2} /> */}
            <Avatar
              
              src={profilePic ? profilePic : { Avatar }}
              h='150px'
              w='150px'
              mx='25%'
              mb='25px'
              border='4px solid'
              borderColor={borderColor}
            />
            <input type="file" name="file" id="file" className="inputfile" onChange={uploadImage} />


          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {/* {name} */}
        {user.firstName}{" "}{user.lastName}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {/* {job} */}
        {user.userType === "user" ? "Student" : "Company"}
      </Text>
      <Flex w='max-content' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {/* {posts} */}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            {/* Posts */}
          </Text>
        </Flex>
        {/* <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Followers
          </Text>
        </Flex> */}
        {/* <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Following
          </Text>
        </Flex> */}
      </Flex>
    </Card>
  );
}
