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
import InstructorsAllClasses from "../pages/InstructorsAllClasses/InstructorsAllClasses";
import Payment from "../pages/Payment/Payment";
import EnrolledClasses from "../pages/EnrolledClasses/EnrolledClasses";
import PaymentHistroy from "../pages/PaymentHistroy/PaymentHistroy";
import AdminRouts from "../Routs/AdminRouts";
import InstructorRout from "../Routs/InstructorRout";
import ErrorPage from "./ErrorPage";
import SuccesfulStudent from "../pages/Home/SuccesfullStudent/SuccesfulStudent";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
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
        },
        {
          path:'succesfullStudent',
          element: <SuccesfulStudent />
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
          path: 'enrolledClasses',
          element:<EnrolledClasses />
        }
        ,
        {
          path: 'paymentHistroy',
          element:<PrivateRout><PaymentHistroy /></PrivateRout>
        }
        ,
        {
          path:'allUsers',
          element: <PrivateRout> <AdminRouts > <AllUsersInfo /></AdminRouts> </PrivateRout>
        },
       
        {
          path:'manageClasses',
          element: <PrivateRout><AdminRouts><ManageClasses /></AdminRouts> </PrivateRout>
        },
        {
          path:'newAddedClasses',
          element: <PrivateRout> <InstructorRout> <InstractorAddedClasses /> </InstructorRout> </PrivateRout>
        },
        {
          path:'instractorAddclass',
          element: <PrivateRout><InstructorRout> <InstructorsAllClasses /> </InstructorRout> </PrivateRout>
        }
        ,
        {
          path:'payment',
          element: <PrivateRout><Payment /> </PrivateRout>
        }
      ]
    }
  ]);
  

