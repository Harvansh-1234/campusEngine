import React from "react";

import { Icon } from "@chakra-ui/react";
import {

  MdPerson,
  MdHome,
} from "react-icons/md";
import MainDashboard from "views/admin/default";
import Quiz from "views/admin/quiz"
import Instructions from "views/admin/quiz/instruction"
import Profile from "views/admin/profile";
import Resume from "views/admin/resume"
import QuizMain from "views/admin/quiz/quizMain"

const routes = [
  {
    name: "Main Dashboard",
    layout: "/user",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
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
    name: "Quiz",
    layout: "/user",
    path: "/quiz",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Quiz,
  },
  {
    name: "Instructions",
    layout: "/user",
    path: "/instructions",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Instructions,
  },  
  {
    name: "Quizmain",
    layout: "/user",
    path: "/quizmain",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: QuizMain,
  },
];

export default routes;
