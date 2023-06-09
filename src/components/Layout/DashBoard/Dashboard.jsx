import { Link, Outlet } from 'react-router-dom';
import Navbr from '../../../pages/Navebr/Navbr';
import Footer from '../../../pages/Footer/Footer';
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
    const admin = true
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
      <li><Link to='/dashboard/selectedClasses'>My Selected classes </Link></li>
      {
        admin && <li><Link to='/dashboard/allUsers'>All users </Link></li>
      }
      {/* <li><a>Sidebar Item 2</a></li> */}
    </ul>
  
  </div>
</div>
<Footer />
        </div>
    );
};

export default Dashboard;