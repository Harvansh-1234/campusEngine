import React from "react";
import { Flex } from "@chakra-ui/react";
import logo from "assets/img/logo.png";
export function SidebarBrand() {

  return (
    <Flex align='center' direction='column'>
      <img src={logo} alt="" style={{height:"150px"}}/>
      <div style={{marginBottom:"10px"}}></div>
    </Flex>
  );
}

export default SidebarBrand;
