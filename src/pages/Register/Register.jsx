import Lottie from "lottie-react";
import loginAnemation from "../../assets/145702-login-lottie-yellow.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

import Weve from "../Home/Marketing/Weve";
import SocialLogin from "../../components/Share/SocialLogin";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const { user, signUp, profileUpdate } = useContext(AuthContext)
  const [conPass,setConpass] =useState(true)
  const [axiosSecure] = useAxios()


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
            // Profile updated!
            // sending all users data into data base
            const person = { name: user?.displayName, email: user?.email, role : 'user' }
            axiosSecure.post(`/all-user`,person)
              .then(() => { })
          }).catch((error) => {
            // An error occurred
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }

  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200 relative">
        <div className="hero-content flex-col lg:flex-row gap-20 mt-20 mb-32">
          <div className="text-center lg:text-left md:w-[700px] sm:[w-200px]">
            <Lottie animationData={loginAnemation} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPass", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.confirmPass && <span className="text-red-500">Password is required</span>}
                {!conPass && <p className="text-red-500">Password and Confirm password are not same </p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Confirm password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true })} placeholder="password" className="input input-bordered" />
                {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Photo?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Register" className="btn" />
              </div>
              <p>Have an Account?<Link to='/login'><span className="text-blue-700">Login</span></Link> </p>
            </form>
            <SocialLogin ></SocialLogin>
          </div>

        </div>
        <div className="absolute bottom-0">
          <Weve></Weve>
        </div>
      </div>
    </div>
  );
};

export default Register;