import React from "react";

import { Icon } from "@chakra-ui/react";
import {

    MdHome,
    MdList,
    
} from "react-icons/md";
import CompanyDashboard from "views/company/default";

// import Students from "views/company/students";
import Profile from "views/company/profile";
import CreateJob from "views/company/Createjob";
import JobList from "views/company/JobList";
import JobDetail from "views/company/JobDetail";
import addInsight from "views/company/addInsight";
import CollegeInsights from "views/company/marketplace";
const companyRoutes = [
    {
        name: "Company Dashboard",
        layout: "/company",
        path: "/default",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: CompanyDashboard,
        hide:false,
    },
    {
        name: "Profile",
        layout: "/company",
        path: "/profile",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: Profile,
        hide:false,
    },
   
    {
        name: "Create Jobs",
        layout: "/company",
        path: "/createjobs",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: CreateJob,
        hide:false,
    },
    {
        name: "Posted Jobs",
        layout: "/company",
        path: "/postedjobs",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: JobList,
        hide:false,
    },
    {
        name: "Job Details",
        layout: "/company",
        path: "/jobDetails",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: JobDetail,
        hide:true,
    },
    {
        name: "Add Insight",
        layout: "/company",
        path: "/addInsight",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: addInsight,
        hide:false,
    },
    {
        name: "College Insights",
        layout: "/company",
        path: "/colleges",
        icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
        component: CollegeInsights,
        hide:false,
    },
    
];

export default companyRoutes;
