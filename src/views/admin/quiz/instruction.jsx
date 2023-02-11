import React, {useEffect,useState} from "react";

import { Flex, Box, Icon, Text, Spacer, Button } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { MdList, MdLockClock, MdTimer } from "react-icons/md";
import bgMastercard from "assets/img/dashboards/Debit.png";
import "assets/css/quiz.css";
import { getQuiz } from "service/api";
import { Link } from "react-router-dom";
function Instruction() {
  const [data, setData] = useState()
  useEffect(() => {
    const initial = async () => {
      // var currenturl=window.location.search;
      // var currenturlsearch = new URLSearchParams(currenturl);
      // var title=currenturlsearch.get('title');
      let token = localStorage.getItem('token');
      let title = localStorage.getItem('quizName');
      let quizData= await getQuiz(token,title);
      console.log(quizData.data.data[0]);
      setData(quizData.data.data[0]);
      localStorage.setItem('sd',quizData.data.data[0].quizDuration*60);
    }
    initial();


}, [])
  return (
    <div>
      <div style={{ height: "100px" }}></div>

      <div className="cardMain">
        <Card
          backgroundImage={bgMastercard}
          backgroundRepeat="no-repeat"
          bgSize="cover"
          alignSelf="center"
          w={{ base: "100%", md: "80%", xl: "60%" }}
          bgPosition="10%"
          mx="auto"
          p="20px"
          style={{ margin: "20px" }}
        >
          <Flex direction="column" color="white" h="100%" w="100%">
            <Flex justify="space-between" align="center" mb="2px">
              <Text fontSize="3xl" fontWeight="bold">
                {data ?data.quizName:null}
              </Text>
              <Text fontSize="md" style={{ display: "flex" }}>
                <Icon as={MdTimer} width="20px" height="20px" color="inherit" />
                {data ?data.quizDuration: '--'}min
              </Text>
            </Flex>
            <Text fontSize="xl" mb="10px">
              (Beginner)
            </Text>
            <Text fontSize="md" mb="10px">
              {data ?data.quizDescription:null}
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
              <Flex mt="14px" justify="space-between">
                <Flex direction="column" me="34px" justify="center">
                  <Text fontSize="xl" mb="10px">
                    No. of Questions : {data? data.minScoreRequired : '--'}
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text fontSize="xl" mb="10px">
                    Minimum Score : 70%
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        <Card
          backgroundImage={bgMastercard}
          backgroundRepeat="no-repeat"
          bgSize="cover"
          alignSelf="center"
          w={{ base: "100%", md: "80%", xl: "30%" }}
          bgPosition="10%"
          mx="auto"
          p="20px"
        >
          <Flex direction="column" color="white" h="100%" w="100%">
            <Flex justify="space-between" align="center" mb="0px">
              <Text fontSize="2xl" fontWeight="bold">
                Instructions
              </Text>
            </Flex>
            <Text fontSize="md"  style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit"mt='4px' mr='5px'  />{" "}
              No negative marking for wrong answers.
            </Text>
            <Text fontSize="md"  style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit"mt='4px' mr='5px'  />{" "}
              Read each question carefully and choose the best answer to each one.
            </Text>
            <Text fontSize="md" style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit" mt='4px' mr='5px' />{" "}
              You can attempt the quiz only once.           </Text>
            <Text fontSize="md" style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit" mt='4px' mr='5px' />{" "}
              Once finished, you can check your response.
            </Text>
            <Spacer />
          </Flex>
        </Card>
      </div>
      <div className="startButton">
      <Link
      to="/user/question">
        <Button
            style={{ backgroundColor: "#695aff" }}
            variant="solid"
            size="lg"
            w="100px"
            h="50px"
            borderRadius="5px"
            fontSize="xl"
            fontWeight="bold"
            mt="20px"
            >Attempt</Button></Link>
      </div>
    </div>
  );
}

export default Instruction;
