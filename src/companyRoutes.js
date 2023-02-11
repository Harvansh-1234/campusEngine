import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
  MdLock,
} from "react-icons/md";
import CompanyDashboard from "views/company/default";


const companyRoutes = [
  {
    name: "Company Dashboard",
    layout: "/company",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CompanyDashboard,
  },
];

export default companyRoutes;
