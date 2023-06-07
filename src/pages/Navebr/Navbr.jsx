import { NavLink } from 'react-router-dom';
import logo from '../../assets/summervision.png'
import pic from '../../assets/formal.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Navbr = () => {
    const {user,logOut} = useContext(AuthContext)

    const handelLogout = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((err) => {
            // An error happened.
            console.log(err);
          });
    }
    return (
        <div>
            <div className="navbar bg-gray-200 md:px-16 sm:px-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* Mobile */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 gap-4 ">
                            <NavLink><li> Home</li></NavLink>
                            <NavLink><li>Instructors</li> </NavLink>
                            <NavLink><li>Classes</li> </NavLink>
                            {
                                user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
                            }
                            {
                                user ? <><NavLink><li>Dashboard</li> </NavLink>
                                    <NavLink><img src={pic} alt="" className='w-8 rounded-full' /> </NavLink></> :
                                    <></>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" className='w-[150px] rounded-md' /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {/* desktop */}
                    <ul className="menu menu-horizontal px-1 gap-8 justify-center items-center">

                        <NavLink><li> Home</li></NavLink>
                        <NavLink><li>Instructors</li> </NavLink>
                        <NavLink><li>Classes</li> </NavLink>
                        {
                            user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
                        }
                        {
                            user ? <><NavLink><li>Dashboard</li> </NavLink>
                                <NavLink><img src={pic} alt="" className='w-8 rounded-full' /> </NavLink></> :
                                <></>
                        }

                        <NavLink><li><button className='bg-[#FFBF23] outline outline-black-2 outline-1'>Get-Start</button></li> </NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbr;