import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/summervision.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { FaXmark,FaBars} from "react-icons/fa6";
const Navbr = () => {
    const {user,logOut,setloading} = useContext(AuthContext)
  
    const handelLogout = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
            setloading(false)
          }).catch((err) => {
            // An error happened.
            console.log(err);
          });
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    // return (
    //     <div className='mt-0'>
    //         <div className="navbar bg-gray-200 md:px-16 sm:px-1 z-10  top-0 fixed">
    //             <div className="navbar-start">
    //                 <div className="dropdown">
    //                     <label tabIndex={0} className="btn btn-ghost  lg:hidden">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //                     </label>
    //                     {/* Mobile */}
    //                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-gray-200 rounded-box w-52 gap-4 ">
    //                         <NavLink to='/'><li> Home</li></NavLink>
    //                         <NavLink to='/instructor'><li>Instructors</li> </NavLink>
    //                         <NavLink to='/allclasses'><li>Classes</li> </NavLink>
    //                         {
    //                             user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
    //                         }
    //                         {
    //                             user ? <><NavLink to='/dashboard'><li>Dashboard</li> </NavLink>
    //                                 <NavLink><img src={user.photoURL} alt="" className='w-8 rounded-full' /> </NavLink></> :
    //                                 <></>
    //                         }
           
    //                     </ul>
    //                 </div>
    //                 <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" className='w-[150px] rounded-md' /></a>
    //             </div>
    //             <div className="navbar-end hidden  xl:flex">
    //                 {/* desktop */}
    //                 <ul className="menu menu-horizontal px-1 gap-4 justify-center items-center">

    //                     <NavLink to='/'><li> Home</li></NavLink>
    //                     <NavLink to='/instructor'><li>Instructors</li> </NavLink>
    //                     <NavLink to='/allclasses'><li>Classes</li> </NavLink>
    //                     {
    //                         user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
    //                     }
    //                     {
    //                         user ? <><NavLink to='/dashboard'><li>Dashboard</li> </NavLink>
    //                             <NavLink><img src={user.photoURL} alt="" className='w-8 rounded-full' /> </NavLink></> :
    //                             <></>
    //                     }
          
    //                     <NavLink><li><button className='bg-[#FFBF23] outline outline-black-2 outline-1'>Get-Start</button></li> </NavLink>
                        
    //                 </ul>
    //             </div>

    //         </div>
    //     </div>
    // );

        return(
            <>
       
        <nav className="bg-gray-200 top-0  text-black p-4 flex lg:flex-row flex-row-reverse md:justify-around items-center w-[100%] fixed z-20">
      <div className=" text-xl h-full  font-semibold md:mb-0">

     <Link href='/'>
        <img src={logo} width={240} height={240} alt="logo" />
     </Link>
      </div>
      <button
        onClick={toggleMenu}
        className="lg:hidden me-auto text-2xl focus:outline-none"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>
      <ul
        className={`absolute top-4 md:top-0 right-1 bg-white font-semibold gap-5 justify-center items-center text-[#000000]  shadow-lg md:shadow-none rounded-md z-10  px-10  lg:bg-transparent transition-transform duration-300 lg:flex ml-auto lg:relative ${
          isOpen ? 'transform translate-x-0 lg:translate-x-0 flex flex-col h-[80vh] justify-start' : '  transform translate-x-56 lg:translate-x-0'
        }`}
      >
          <NavLink to='/'><li> Home</li></NavLink>
                        <NavLink to='/instructor'><li>Instructors</li> </NavLink>
                        <NavLink to='/allclasses'><li>Classes</li> </NavLink>
                        {
                            user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
                        }
                        {
                            user ? <>
                                <NavLink><img src={user.photoURL} alt="" className='w-8 rounded-full' /> </NavLink>
                                <NavLink to='/dashboard'><li className='primary-button py-0'>Dash Board</li> </NavLink>
                                </> :
                                <></>
                        }
      </ul>
    </nav>
    
        </>
        )

};

export default Navbr;