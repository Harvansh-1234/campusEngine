import React from "react";

import { Flex, Box, Icon, Text, Spacer, Button } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { MdList, MdLockClock, MdTimer } from "react-icons/md";
import bgMastercard from "assets/img/dashboards/Debit.png";
import "assets/css/quiz.css";
function instruction() {
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
                Javascript
              </Text>
              <Text fontSize="md" style={{ display: "flex" }}>
                <Icon as={MdTimer} width="20px" height="20px" color="inherit" />
                30min
              </Text>
            </Flex>
            <Text fontSize="xl" mb="10px">
              (Advance)
            </Text>
            <Text fontSize="md" mb="10px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              dolores, itaque aliquid voluptatum ad voluptatibus praesentium
              explicabo inventore dolorem magni asperiores accusamus. Optio
              minima culpa nobis. Dignissimos nemo exercitationem deserunt.
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
                    No. of Questions : 5
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
            <Text fontSize="md"  style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit"mt='4px' mr='5px'  />{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
            <Text fontSize="md" style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit" mt='4px' mr='5px' />{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
            <Text fontSize="md" style={{ display: "flex" }}>
              <Icon as={MdList} width="20px" height="20px" color="inherit" mt='4px' mr='5px' />{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
            <Spacer />
          </Flex>
        </Card>
      </div>
      <div className="startButton">
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
            >Attempt</Button>
      </div>
    </div>
  );
}

export default instruction;
