/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState ,useEffect} from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/company/marketplace/components/Banner";
import TableTopCreators from "views/company/marketplace/components/TableTopCreators";
import HistoryItem from "views/company/marketplace/components/HistoryItem";
import {createInsight, getInsight} from "../../../service/api"
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/images.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/download.jpg";
import Nft4 from "assets/img/nfts/cyber.jpg";
import Nft5 from "assets/img/nfts/blockchain.jpg";
import Nft6 from "assets/img/nfts/cpp.jpg";

import Bajaj from "assets/img/nfts/bajaj.png";
import tcs from "assets/img/nfts/tcs.jpg";
import wipro from "assets/img/nfts/wipro.png";
import accpng from "assets/img/nfts/accpng.png";
import hcl from "assets/img/nfts/hcl.png";

import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/company/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/company/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [data,setData] = useState("");
  useEffect(()=>{
    const ini = async()=>{
      const id = "645cb97ebcd21a56cf440241";
       const res = await getInsight(id);
       console.log(res);
      setData(res);
    }
    ini();
  },[])
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {console.log(data.data?data.data.data.recruiters[0].companyName:"")};
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Our Courses
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  AI
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  Data Science
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Machine Learning
                </Link>
                <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Blockchain
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              {data.data?data.data.data.ourCourses.map((value)=>{
                return (
                  <NFT
                name={value.courseName}
                author={value.instructorName}
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={value.courseImgUrl?value.courseImgUrl:Nft2}
                // currentbid='0.91 ETH'
                download='#'
              />
                )
              }):"No Courses to Display"}
              
              
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Recently Added
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              {data.data?data.data.data.recentlyAdded.map((value)=>{
                return(
                  <NFT
                name={value.courseName}
                author={value.instructorName}
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={value.courseImgUrl?value.courseImgUrl:Nft5}
                // currentbid='0.91 ETH'
                download='#'
              />
                )
              }):"No Recently Added Courses Yet"}
              
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                Recruiters
              </Text>
              {/* <Button variant='action'>See all</Button> */}
            </Flex>
            {data.data?data.data.data.recruiters.map((value)=> {
              return(
                <HistoryItem
              name={value.companyName}
              author={value.interviewerName}
              date='30s ago'
              image={value.companyLogo?value.companyLogo:Bajaj}
              price='0.91 ETH'
            />
              )
              
            }):"No Recruiters yet"}
            
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
