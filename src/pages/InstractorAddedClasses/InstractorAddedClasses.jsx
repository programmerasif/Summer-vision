import { useContext } from 'react';
import './instractor.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import HeadingTitle from '../../components/Share/HeadingTitle';

const InstractorAddedClasses = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxios()
    const navigate = useNavigate()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const site = parseInt(data.seate)
        const newClass = {
            image: data.photoUrl,
            email:data.email,
            approve: 'pending',
            role : 'aproveReq',
            availableSeats: site,
            name: data.clsName,
            price:data.price ,
            trainerName:data.insName,
            enrolled : 0
        }
        axiosSecure.post(`/allClasses`,newClass)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your added class succesfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/instractorAddclass')
            }
            
        })

    }
    return (
        <div className=' w-full'>
            <HeadingTitle heading='Added your new classes' />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto md:w-[80%] sm:w-full mb-8 bg-gray-200 p-8">

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 px-2 mt-8 mb-8">
                    <div>
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="Instructor Email" value={user.email} className="input input-bordered w-full" {...register("email")} />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input type="text" placeholder="Instructor name" value={user?.displayName} className="input input-bordered w-full" {...register("insName")} />
                    </div>


                    <div >
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input type="text" placeholder="Class name" className="input input-bordered w-full" {...register("clsName")} />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="number" placeholder="Available seats" className="input input-bordered  w-full" {...register("seate")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Phhoto URL</span>
                        </label>
                        <input type="text" placeholder="Phhoto URL" className="input input-bordered w-full" {...register("photoUrl")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full" {...register("price")} />
                    </div>
                </div>

                <input type="submit" value="Added Class" className="btn w-full bg-white" />
            </form>
        </div>
    );
};

export default InstractorAddedClasses;