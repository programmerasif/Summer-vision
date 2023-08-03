import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [axiosSecure] = useAxios()
  const navigate = useNavigate()
    const {googleSignin,setloading} = useContext(AuthContext)
    const handelGoogleLogin = () =>{
       
        googleSignin()
        .then((result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'LogIn Succesfull',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
          const user = result.user;
          if (user.email) {
            setloading(true)
              // sending all users data into data base
              const person = { name: user?.displayName, email: user?.email, role : 'user'}
              axiosSecure.post('/all-user',person)
            .then(res => console.log(res.data))
          }
        }).catch((error) => {
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