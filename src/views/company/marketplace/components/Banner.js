import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/banner_slide9.jpg";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction='column'
      height={{ base: "auto", md: "auto", xl: "auto" }}
      bgImage={banner}
      bgSize='cover'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'>
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color='black'
        mb='50px'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight='700'
        lineHeight={{ base: "80px", md: "42px" }}>
      </Text>
      <Text
        fontSize='md'
        color='#E3DAFF'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='60px'
        lineHeight='28px'>
       
      </Text>
      <Flex align='center'>
      <Link to="https://www.uitrgpv.ac.in/index.aspx" href="https://www.uitrgpv.ac.in/index.aspx">
        <Button
          bg='navy.700'
          
          color='white'
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight='500'
          fontSize='14px'
          py='10px'
          px='27'
          me='38px'>
          
            Visit
        </Button>
        </Link>
       
      </Flex>
    </Flex>
  );
}
