import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
  MdLock,
} from "react-icons/md";

import RtlDashboard from "views/rtl/default";

import Profile from "views/rtl/profile";
import StudentList from "views/rtl/studentList";
import JobApproval from "views/rtl/jobApproval";
const rtlRoutes = [

  {
    name: "Dashboard",
    layout: "/tnp",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RtlDashboard,
    hide: false,
  },
  {
    name: "Profile",
    layout: "/tnp",
    path: "/profile",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Profile,
    hide: false,
  },
  {
    name: "Students",
    layout: "/tnp",
    path: "/studentList",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: StudentList,
    hide: false,
  },
  {
    name: "Job Approval",
    layout: "/tnp",
    path: "/jobapproval",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: JobApproval,
    hide: false,
  },
];

export default rtlRoutes;
