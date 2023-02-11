import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
  MdLock,
} from "react-icons/md";

import RtlDashboard from "views/rtl/default";


const rtlRoutes = [

  {
    name: "RTL Dashboard",
    layout: "/rtl",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RtlDashboard,
  },
];

export default rtlRoutes;
