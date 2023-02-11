import React from "react";

import { Flex, Box, Icon, Text, Spacer, Button } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import bgMastercard from "assets/img/dashboards/Debit.png";

import "assets/css/quiz.css";
function index() {
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div className="cardMain">
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
                C++
              </Text>
              <Text fontSize="sm">
                30min
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
                  <Button color="gray.500">Start</Button>
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
          w={{ base: "100%", md: "30%", xl: "20%" }}
          bgPosition="10%"
          mx="auto"
          p="20px"
          style={{ margin: "20px" }}
        >
          <Flex direction="column" color="white" h="100%" w="100%">
            <Flex justify="space-between" align="center" mb="2px">
              <Text fontSize="2xl" fontWeight="bold">
                C++
              </Text>
              <Text fontSize="sm">
                30min
              </Text>
            </Flex>

            <Text fontSize="sm"mb="10px">
                (Advance)
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
                  <Button color="gray.500">Start</Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </div>
      <div className="cardMain">
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
                MERN
              </Text>
              <Text fontSize="sm">
                30min
              </Text>
            </Flex>

            <Text fontSize="sm"mb="10px">
                (Advance)
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
                  <Button color="gray.500">Start</Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </div>
      <div className="cardMain">
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
                Javascript
              </Text>
              <Text fontSize="sm">
                30min
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
                  <Button color="gray.500">Start</Button>
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
          w={{ base: "100%", md: "30%", xl: "20%" }}
          bgPosition="10%"
          mx="auto"
          p="20px"
          style={{ margin: "20px" }}
        >
          <Flex direction="column" color="white" h="100%" w="100%">
            <Flex justify="space-between" align="center" mb="2px">
              <Text fontSize="2xl" fontWeight="bold">
              Javascript
              </Text>
              <Text fontSize="sm">
                30min
              </Text>
            </Flex>

            <Text fontSize="sm"mb="10px">
                (Intermediate)
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
                  <Button color="gray.500">Start</Button>
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
          w={{ base: "100%", md: "30%", xl: "20%" }}
          bgPosition="10%"
          mx="auto"
          p="20px"
          style={{ margin: "20px" }}
        >
          <Flex direction="column" color="white" h="100%" w="100%">
            <Flex justify="space-between" align="center" mb="2px">
              <Text fontSize="2xl" fontWeight="bold">
              Javascript
              </Text>
              <Text fontSize="sm">
                30min
              </Text>
            </Flex>

            <Text fontSize="sm"mb="10px">
                (Advance)
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
                  <Button color="gray.500">Start</Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
  );
}

export default index;
