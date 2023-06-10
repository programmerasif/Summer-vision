import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import useAxios from "../Hooks/useAxios";

const ClassCard = ({ data }) => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxios()
    const admin = false
    const instructor = false
   
    const handelseclected = (id) => {
       
        const seclectedClass = {
            image: data.image,
            price: data.price,
            name: data.name,
            trainerName: data.trainerName,
            classId : id,
            instructorEmail: data.instructorEmail,
            userEmail :user.email
        }
        axiosSecure.post('/selectedClass',seclectedClass)
        // .then(res => res.json())
        .then(data => {
            console.log(data.data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })
        
    }

    return (
        <div className="">

            <div className={`card card-compact md:w-96 sm:w-auto  shadow-xl ${!data.availableSeats == 0 ? 'bg-base-100' : 'bg-red-300 text-white'}`}>
                <figure><img src={data.image} alt="sports" className="h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Name : {data.name}</h2>
                    <p>Instructor name : {data.trainerName} </p>
                    <p>Instructor Email : {data.email} </p>
                    <p>Available seats : {data.availableSeats} </p>
                    <p>Price : {data.price} </p>
                    {
                        data.availableSeats == 0 || admin || instructor ? <><p> <button className='btn ' disabled> Select</button></p></> : <><p> <button className='btn btn-warning' onClick={() => handelseclected(data._id)}> Select</button></p></>
                    }
                    {
                        !data.availableSeats && <> <p className="text-red-600">Site are not available </p></>
                    }

                </div>
            </div>
        </div>
    );
};

export default ClassCard;