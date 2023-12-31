import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaBookOpen, FaHome } from "react-icons/fa";
import useAdmin from '../../../Hooks/useAdmin';
import useUser from '../../../Hooks/useUser';
import useInstructor from '../../../Hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { FcBusinessman } from "react-icons/fc";
import HeadingTitle from '../../Share/HeadingTitle';


const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isUser] = useUser()
  const [isInstractor] = useInstructor()
  const {user} = useContext(AuthContext)
 
  


  // const users = {role : "admin"}
  return (
    <div>
     
      <div className="drawer lg:drawer-open mt-[0px] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col items-center justify-start mt-20 ">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="lg:hidden  top-2 px-5 btn btn-warning -mt-2 border-b-4 border-indigo-300 absolute">
            {/* open dower */}
            Open Dashboard

          </label>
          {/* dashboard first  window */}
          <section className='sm:mt-10 lg:mt-0  lg:ms-56'>
            <HeadingTitle  heading="Well come to Dash Board"/>
           
            {/* <div>
            <div className=''>Selected class 10 </div>
            <div></div>
            <div></div>
            <div></div>
            </div> */}
          </section>
          <div className='absolute top-0 lg:w-[80%] lg:ms-64 mx-auto  mt-56'>
          <Outlet />
          </div>
        </div>
        <div className="drawer-side h-[100vh] fixed z-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full fixed bg-[#ffbf15] text-base-content">
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
      
    </div>
  );
};

export default Dashboard;