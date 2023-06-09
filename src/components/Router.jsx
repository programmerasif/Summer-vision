import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Allinstructor from "../pages/Allinstructor/Allinstructor";
import AllClasses from "../AllClasses/AllClasses";
import Dashboard from "./Layout/DashBoard/Dashboard";



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
      element: <Dashboard />
    }
  ]);
  

