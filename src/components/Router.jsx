import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Allinstructor from "../pages/Allinstructor/Allinstructor";
import AllClasses from "../AllClasses/AllClasses";
import Dashboard from "./Layout/DashBoard/Dashboard";
import SelectedClasses from "../pages/SelectedClasses/SelectedClasses";
import PrivateRout from "../pages/PrivateRout/PrivateRout";
import AllUsersInfo from "../pages/AllUsersInfo/AllUsersInfo";
import ManageClasses from "../pages/ManageClasses/ManageClasses";
import InstractorAddedClasses from "../pages/InstractorAddedClasses/InstractorAddedClasses";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path:'/',
            element: <HomePage />
        },
        {
          path:'login',
          element: <Login />
        },
        {
          path: 'register',
          element:<Register />
        }
        ,
        {
          path: 'instructor',
          element:<Allinstructor />
        }
        ,
        {
          path: 'allclasses',
          element:<AllClasses />
        }
        
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRout><Dashboard /></PrivateRout>,
      children: [
        {
          path:'selectedClasses',
          element: <PrivateRout><SelectedClasses /></PrivateRout>
        },
        {
          path:'allUsers',
          element: <PrivateRout><AllUsersInfo /></PrivateRout>
        },
       
        {
          path:'manageClasses',
          element: <PrivateRout><ManageClasses /></PrivateRout>
        },
        {
          path:'instractorAddedClasses',
          element: <PrivateRout><InstractorAddedClasses></InstractorAddedClasses></PrivateRout>
        }
      ]
    }
  ]);
  

