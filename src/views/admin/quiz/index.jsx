import React from "react";
import {useState, useEffect} from 'react';
import { Flex, Box, Icon, Text, Spacer, Button } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import bgMastercard from "assets/img/dashboards/Debit.png";
import { getAllQuiz } from "service/api";
import "assets/css/quiz.css";
import { Link } from "react-router-dom";
function Quiz() {
  const [data, setData] = useState()
  useEffect(() => {
    const initial = async () => {
        let token = localStorage.getItem('token');
        // settoken(token);
        // console.log(token);
        const userData = await getAllQuiz(token);
        setData(userData.data.data)
        console.log(userData.data.data);

    }
    initial();


}, [])
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div className="cardMain">
        {data? data.map((item)=>{
          return(
            <Card
          backgroundImage={bgMastercard}
          backgroundRepeat="no-repeat"
          bgSize="cover"
          alignSelf="center"
          w={{ base: "100%", md: "30%", xl: "20%" }}
          bgPosition="10%"
          mx="auto"
          p="20px"
          style={{ margin: "20px" }}
        >
          <Flex direction="column" color="white" h="100%" w="100%">
            <Flex justify="space-between" align="center" mb="2px">
              <Text fontSize="2xl" fontWeight="bold">
                {item.quizName}
              </Text>
              <Text fontSize="sm">
              {item.quizDuration}min
              </Text>
            </Flex>

            <Text fontSize="sm" mb="10px">
                (Beginner)
              </Text>
            <Spacer />
            <Flex direction="column">
              <Box>
                <Text
                  fontSize={{ sm: "xl", lg: "lg", xl: "xl" }}
                  fontWeight="bold"
                >
                  {/* {number} */}
                </Text>
              </Box>
              <Flex mt="14px" justify='space-between'>
                <Flex direction="column" me="34px" justify='center'>
                  <Text fontSize="xs">Get certified</Text>
                </Flex>
                <Flex direction="column">
                <Link to={`/user/instructions?title=${item.quizName}`} onClick={()=>{
                  localStorage.setItem("quizName", item.quizName);
                }}>
                  <Button  color="gray.500">Start</Button></Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
          );
        }):null}
      </div>
    </div>
  );
}

export default Quiz;
