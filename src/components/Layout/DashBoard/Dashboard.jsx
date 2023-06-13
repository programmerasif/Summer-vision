import { Link, Outlet } from 'react-router-dom';
import Navbr from '../../../pages/Navebr/Navbr';
import Footer from '../../../pages/Footer/Footer';
import { FaBars } from "react-icons/fa";
import useAdmin from '../../../Hooks/useAdmin';
import useUser from '../../../Hooks/useUser';
import useInstructor from '../../../Hooks/useInstructor';


const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isUser] = useUser()
  const[isInstractor] = useInstructor()
  
  
  
    // const users = {role : "admin"}
    return (
        <div>
            <Navbr />
            <div className="drawer lg:drawer-open mt-[0px] ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content flex flex-col items-center justify-start mt-20 ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="lg:hidden ml-auto px-5 btn btn-warning -mt-2 border-b-4 border-indigo-300">
        {/* open dower */}
        <FaBars />
        
    </label>
 
  <Outlet />
  </div> 
  <div className="drawer-side mt-16 min-h-[60vh]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-gray-200 text-base-content">
      {/* Sidebar content here */}
      {
       isUser  && <li><Link to='/dashboard/selectedClasses'>My Selected classes </Link></li>
      }
      {
       isUser  && <li><Link to='/dashboard/enrolledClasses'>My Enrolled Classes </Link></li>
      }
      {
       isUser  && <li><Link to='/dashboard/paymentHistroy'>My Enrolled Classes </Link></li>
      }
      {
       isAdmin && <li><Link to='/dashboard/allUsers'>Manage Users </Link></li>
      }
      {
       isAdmin && <li><Link to='/dashboard/manageClasses'>Manage classes </Link></li>
      }
      {
       isInstractor && <li><Link to='/dashboard/newAddedClasses'>Add Class </Link></li>
      }
      {
        isInstractor && <li><Link to='/dashboard/instractorAddclass'> My Add class </Link></li>
      }
    </ul>
  
  </div>
</div>
<Footer />
        </div>
    );
};

export default Dashboard;