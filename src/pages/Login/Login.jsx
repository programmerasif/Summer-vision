import Lottie from "lottie-react";
import loginAnemation from "../../assets/145702-login-lottie-yellow.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {login} = useContext(AuthContext)
  const [err,setError] =useState()
  
  const { register,handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    console.log(data)
    login(data.email,data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      if (user) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Log-In successfull',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch((err) => {
     
      const error = err.message;
      console.log(error);
      setError('Email or Password is worng ')
    });
  };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row gap-20 mt-20">
    <div className="text-center lg:text-left md:w-[700px] sm:[w-200px]">
    <Lottie animationData={loginAnemation} loop={true} />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register("email",{required: true})} placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-500">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{required: true})} placeholder="password" className="input input-bordered" />
          {errors.password && <span className="text-red-500">Password is required</span>}
         
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Password?</a>
          </label>
          <p className="text-red-400">{err}</p>
        </div>
        
       
        <div className="form-control mt-6">
         <input type="submit" value="Register" className="btn"/>
        </div>
        <p>Dont have an Account?<Link to='/register'><span className="text-blue-700">Register</span></Link> </p>
        <div className="divider">OR</div>
        <button className="btn "> <span className="text-3xl"><FcGoogle /></span> Google</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;