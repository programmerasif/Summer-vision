import { useContext } from 'react';
import './instractor.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';
import useAxios from '../../Hooks/useAxios';

const InstractorAddedClasses = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxios()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data);

        const newClass = {
            image: data.photoUrl,
            email:data.email,
            approve: 'pending',
            role : 'aproveReq',
            availableSeats: data.seate,
            name: data.clsName,
            price:data.price ,
            trainerName:data.insName,
        }
        axiosSecure.post(`/allClasses`,newClass)
        .then(res => console.log(res.data))

    }
    return (
        <div className='bg-img w-full'>
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
                        <input type="text" placeholder="Price" className="input input-bordered w-full" {...register("price")} />
                    </div>
                </div>

                <input type="submit" value="Added Class" className="btn w-full bg-white" />
            </form>
        </div>
    );
};

export default InstractorAddedClasses;