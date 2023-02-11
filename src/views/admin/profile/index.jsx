
import { Box, Grid } from "@chakra-ui/react";


import Banner from "views/admin/profile/components/Banner";

import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/4.png";
import React from "react";
import UserProfile from "./components/UserProfile";
import 'assets/css/userProfile.css';



export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 2.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Team Sphere'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <UserProfile/>
      </Grid>
    </Box>
  );
}
