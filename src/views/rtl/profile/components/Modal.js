import React from 'react'
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
function BasicUsage() {
    const { isOpen, onOpen=true, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
      
      </>
    )
  }
  export default BasicUsage;