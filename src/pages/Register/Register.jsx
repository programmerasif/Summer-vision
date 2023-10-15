import Lottie from "lottie-react";
import loginAnemation from "../../assets/145702-login-lottie-yellow.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

import Weve from "../Home/Marketing/Weve";
import SocialLogin from "../../components/Share/SocialLogin";
import Swal from "sweetalert2";


import { addedUser } from "../../Hooks/commonFunction/addedUser";

const Register = () => {
  const { user, signUp, profileUpdate,setloading } = useContext(AuthContext)
  const [conPass,setConpass] =useState(true)

  const navigate = useNavigate()

  const token = localStorage.getItem('access-token')

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    <input type="text" {...register("name", { required: true })} placeholder="text" className="input input-bordered" />
    const pass = data.password;
    const conPass = data.confirmPass 

    if (pass != conPass) {
      setConpass(false)
    }else{
      setConpass(true)
      signUp(data.email, data.password)
      .then((d) => {
        const user = d.user;
        profileUpdate(data.name, data.photoUrl)
          .then(() => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registered succesfull',
              showConfirmButton: false,
              timer: 1500
            })
            
            addedUser(user,setloading,navigate,token)
            
          })
          
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }

  };


  return (
    <>

       <div className="grid sm:grid-flow-col md:grid-cols-2 sm:w-full md:w-[90%] mx-auto justify-center items-center mt-32">
          {/* left for lotti */}
          <div className="text-center lg:text-left md:w-[700px] sm:[w-200px]">
            <Lottie animationData={loginAnemation} loop={true} />
          </div>

          {/* right for form */}

          <div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
             <div className="grid grid-cols-2 w-full gap-6">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="text" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" />
                {errors.password && <span className="text-red-500">Password is required</span>}
                {errors.password?.type == 'minLength' && <span className="text-red-500">Password should be 6 character</span>}
                {errors.password?.type == 'pattern' && <span className="text-red-500">Password must have one Uppercase one lower case, one number and one special character.</span>}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPass", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.confirmPass && <span className="text-red-500">Password is required</span>}
                {!conPass && <p className="text-red-500">Password and Confirm password are not same </p>}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Designation</span>
                </label>
                <input type="text" {...register("Designation", { required: true })} placeholder="Designation" className="input input-bordered" />
                
              </div>
             </div>

              <div className="form-control mt-6">
                <input type="submit" value="Register" className="btn" />
              </div>
              <p>Have an Account?<Link to='/login'><span className="text-blue-700">Login</span></Link> </p>
            </form>
            <SocialLogin ></SocialLogin>
          </div>
       </div>
          
      
    </>
  );
};

export default Register;