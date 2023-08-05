import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';
import { addedUser } from '../../Hooks/commonFunction/addedUser';

const SocialLogin = () => {
  
  const navigate = useNavigate()
  const { googleSignin, setloading } = useContext(AuthContext)
  const token = localStorage.getItem('access-token')
  
  const handelGoogleLogin = () => {
    googleSignin()
      .then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'LogIn Succesfull',
          showConfirmButton: false,
          timer: 1500
        });
        
        const user = result.user;
        if (user.email) {
          addedUser(user,setloading,navigate,token)
        }
      })
      .catch((error) => {
        const err = error.message;
        console.log(err);
      });
  }

  return (
    <div className='w-full p-3 pb-5'>
      <div className="divider">OR</div>
      <button className="btn w-full " onClick={handelGoogleLogin}> <span className="text-3xl"><FcGoogle /></span> Google</button>
    </div>
  );
};

export default SocialLogin;