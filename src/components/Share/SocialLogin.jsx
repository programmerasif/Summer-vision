import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext)
    const handelGoogleLogin = () =>{
       
        googleSignin()
        .then((result) => {
        
          const user = result.user;
          

          if (user.email) {
              // sending all users data into data base
              const person = { name: user?.displayName, email: user?.email }
              fetch(`http://localhost:5000/all-user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(person)
            })
            .then(res => res.json())
            .then(() =>{})
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