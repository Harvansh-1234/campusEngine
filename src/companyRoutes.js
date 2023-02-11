import React from "react";

import { Icon } from "@chakra-ui/react";
import {

    MdPerson,
    MdHome,
    MdList,
    MdLock,
} from "react-icons/md";
import CompanyDashboard from "views/company/default";

import Students from "views/company/students";
const companyRoutes = [
    {
        name: "Company Dashboard",
        layout: "/company",
        path: "/default",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: CompanyDashboard,
    },
    {
        name: "Students",
        layout: "/company",
        path: "/students",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: Students,
    },

];

export default companyRoutes;
