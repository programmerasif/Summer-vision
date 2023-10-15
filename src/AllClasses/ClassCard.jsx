import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { studentAddedClass } from "../Hooks/commonFunction/studentAddedClass";

const ClassCard = ({ data }) => {
    const {user} = useContext(AuthContext)
    
    const [isAdmin] = useAdmin()
    const[isInstractor] = useInstructor()
    const token = localStorage.getItem('access-token')
   
    const handelseclected = (id) => {
        if (!user) {
           return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to login first!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        
        const seclectedClass = {
            image: data.image,
            price: data.price,
            name: data.name,
            trainerName: data.trainerName,
            classId : id,
            instructorEmail: data.instructorEmail,
            userEmail :user.email,
            cardId: id
        }
        studentAddedClass(seclectedClass,token,id)
        
    }

    return (
        <div className="">

            <div className={`card card-compact md:w-80 lg:w-[320px] 2xl:w-96 sm:w-auto mx-auto shadow-sm ${!data.availableSeats == 0 ? 'bg-gray-100' : 'bg-red-300 text-white'}`}>
                <figure><img src={data.image} alt="sports" className="h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Name : {data.name}</h2>
                    <p>Instructor name : {data.trainerName} </p>
                    <p>Instructor Email : {data.email} </p>
                    <p className={!data.availableSeats && 'text-red-700'}>Available seats : {data.availableSeats} </p>
                    <p>Price : {data.price} </p>
                    {
                     <button disabled={isAdmin || isInstractor || data.availableSeats == 0}  className='btn btn-warning' onClick={() => handelseclected(data._id)}> Select</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default ClassCard;