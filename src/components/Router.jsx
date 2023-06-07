import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


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
      ]
    },
  ]);
  

