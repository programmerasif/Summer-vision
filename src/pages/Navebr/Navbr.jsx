import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/summervision.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Navbr = () => {
    const {user,logOut} = useContext(AuthContext)
    const [theme , setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light')

   
    const handelmood = (e) =>{
        if (e.target.checked) {
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

    const handelLogout = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((err) => {
            // An error happened.
            console.log(err);
          });
    }

    useEffect(() =>{
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    return (
        <div className='mt-0'>
            <div className="navbar bg-gray-200 md:px-16 sm:px-1 z-10  top-0 fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* Mobile */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 gap-4 ">
                            <NavLink to='/'><li> Home</li></NavLink>
                            <NavLink to='/instructor'><li>Instructors</li> </NavLink>
                            <NavLink to='/allclasses'><li>Classes</li> </NavLink>
                            {
                                user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
                            }
                            {
                                user ? <><NavLink to='/dashboard'><li>Dashboard</li> </NavLink>
                                    <NavLink><img src={user.photoURL} alt="" className='w-8 rounded-full' /> </NavLink></> :
                                    <></>
                            }
                            <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" className='w-[150px] rounded-md' /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {/* desktop */}
                    <ul className="menu menu-horizontal px-1 gap-8 justify-center items-center">

                        <NavLink to='/'><li> Home</li></NavLink>
                        <NavLink to='/instructor'><li>Instructors</li> </NavLink>
                        <NavLink to='/allclasses'><li>Classes</li> </NavLink>
                        {
                            user ? <><NavLink><li onClick={handelLogout}>Log-Out</li> </NavLink></> : <><NavLink to='login'><li>Log-In</li> </NavLink> <NavLink to='register'><li>Register</li> </NavLink></>
                        }
                        {
                            user ? <><NavLink to='/dashboard'><li>Dashboard</li> </NavLink>
                                <NavLink><img src={user.photoURL} alt="" className='w-8 rounded-full' /> </NavLink></> :
                                <></>
                        }
                        <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={handelmood}/>
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
                        <NavLink><li><button className='bg-[#FFBF23] outline outline-black-2 outline-1'>Get-Start</button></li> </NavLink>
                        
                       <NavLink to='/text'>text</NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbr;