import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  
  MdHome,
  
} from "react-icons/md";

import RtlDashboard from "views/rtl/default";

import Profile from "views/rtl/profile";
import StudentList from "views/rtl/studentList";
import Company from "views/rtl/company";
import JobApproval from "views/rtl/jobApproval";
import Approvedjobs from "views/rtl/approvedJobs";
import Addinsights from "views/rtl/addInsight"
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
    name: "Companies",
    layout: "/tnp",
    path: "/companies",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Company,
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
  {
    name: "Approved Jobs",
    layout: "/tnp",
    path: "/approvedjobs",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Approvedjobs,
    hide: false,
  },
  {
    name: "Add College Insights",
    layout: "/tnp",
    path: "/addInsight",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Addinsights,
    hide: false,
  },
];

export default rtlRoutes;
