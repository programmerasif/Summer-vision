import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import HomePage from "../pages/Home/HomePage/HomePage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path:'/',
            element: <HomePage />
        }
      ]
    },
  ]);
  

