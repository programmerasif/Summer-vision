import { Link, Outlet } from 'react-router-dom';
import Navbr from '../../../pages/Navebr/Navbr';
import Footer from '../../../pages/Footer/Footer';
import { FaBars, FaBookOpen, FaHome } from "react-icons/fa";
import useAdmin from '../../../Hooks/useAdmin';
import useUser from '../../../Hooks/useUser';
import useInstructor from '../../../Hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { FcBusinessman } from "react-icons/fc";


const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isUser] = useUser()
  const [isInstractor] = useInstructor()
  const {user} = useContext(AuthContext)
 
  
console.log(isUser);

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
        <div className="drawer-side mt-16 min-h-[60vh] z-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#ffbf15] text-base-content">
            {/* Sidebar content here */}
            
            

           <div className='text-[#000000] mx-auto'>
           <div className='grid grid-cols-1 justify-center items-center mx-auto'>
            <h5 className='mx-auto'> <img src={user?.photoURL} alt="" /></h5>
            {
              isAdmin && <p className='mt-5 text-2xl font-bold  flex justify-start items-center gap-5'> <FaHome/><span> Admin Home</span></p>
            }
            {
              isInstractor && <p className='mt-5 text-2xl font-bold text-[#000000] flex justify-start items-center gap-5'> <FaHome/><span>Instractor Home</span></p>
            }
            {
              isUser && <p className='mt-5 text-2xl font-bold flex justify-start items-center gap-5'> <FaHome/><span> Student Home</span></p>
            }
            </div>
            {
              isUser && <li><Link to='/dashboard/selectedClasses'>My Selected classes </Link></li>
            }
            {
              isUser && <li><Link to='/dashboard/enrolledClasses'>My Enrolled Classes </Link></li>
            }
            {
              isUser && <li><Link to='/dashboard/paymentHistroy'>Payment History </Link></li>
            }
            {
              isAdmin && <li><Link to='/dashboard/allUsers'>Manage Users </Link></li>
            }
            {
              isAdmin && <li><Link to='/dashboard/manageClasses'>Manage classes </Link></li>
            }
            {
              isInstractor && <li><Link to='/dashboard/newAddedClasses'><div className='mt-5 flex items-center gap-2'><FaBookOpen />  <span>Add Classes</span> </div> </Link></li>
            }
            {
              isInstractor && <li><Link to='/dashboard/instractorAddclass'><FaBookOpen />  My Added class </Link></li>
            }
           </div>
            <div className="flex flex-col w-full border-opacity-50">
            {/* divider Or */}
            <div className="divider"></div>
            <div className='text-[#000000] grid grid-cols-1 text-sm'>
            <li><Link to='/'> <FaHome/>  Home </Link></li>
            <li><Link to='/instructor'><FcBusinessman /> Instructor </Link></li>
            <li><Link to='/allclasses'><FaBookOpen />  Classes </Link></li>
            </div>
           
          </div>
          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;