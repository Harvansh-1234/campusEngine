import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdLock,
  MdPerson,
  MdHome,
} from "react-icons/md";
import MainDashboard from "views/admin/default";
import Quiz from "views/admin/quiz"
import Instructions from "views/admin/quiz/instruction"
import Profile from "views/admin/profile";
import Question from "views/admin/quiz/QuizMain"
import Resume from "views/admin/resume"
import OnCampus from "views/admin/onCampus";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/user",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
    hide:false,
  },
  {
    name: "Profile",
    layout: "/user",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
    hide:false,
  },
  {
    name: "Resume",
    layout: "/user",
    path: "/resume",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Resume,
    hide:false,
  },
  {
   
    name: "Quiz",
    layout: "/user",
    path: "/quiz",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Quiz,
    hide:false,
  },
  {
    name: "Instructions",
    layout: "/user",
    path: "/instructions",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Instructions,
    hide:true,
  },  
  {
    name: "Quizmain",
    layout: "/user",
    path: "/question",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Question,
    hide:true,
  },
  {
    name: "On Campus Jobs",
    layout: "/user",
    path: "/oncampusjobs",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: OnCampus,
    hide:false,
  },
];

export default routes;
