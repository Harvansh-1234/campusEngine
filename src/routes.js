import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
  MdLock,
} from "react-icons/md";
import SignInCentered from "views/auth/signIn";
import SignUpCentered from "views/auth/signUp";
import MainDashboard from "views/admin/default";
import RtlDashboard from "views/rtl/default";
import CompanyDashboard from "views/company/default";
import Profile from "views/admin/profile";
import Resume from "views/admin/resume"

const routes = [
  {
    name: "Main Dashboard",
    layout: "/user",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "RTL Dashboard",
    layout: "/rtl",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RtlDashboard,
  },
  {
    name: "Profile",
    layout: "/user",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Resume",
    layout: "/user",
    path: "/resume",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Resume,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignUpCentered,
  },
  {
    name: "Company Dashboard",
    layout: "/company",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: CompanyDashboard,
  },
];

export default routes;
