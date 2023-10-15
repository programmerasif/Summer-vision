import Swal from "sweetalert2";
import HeadingTitle from "../../components/Share/HeadingTitle";
import useMyclasses from "../../Hooks/useMyclasses";
import useAxios from "../../Hooks/useAxios";
import { NavLink } from "react-router-dom";
import notFound from '../../assets/productNotFound/animation_lkyxho8u.json'
import Lottie from "lottie-react";

const SelectedClasses = () => {
    const [Myclas, refetch] = useMyclasses()
    // console.log(Myclas);

    const [axiosSecure] = useAxios()
    const handelDelet = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/myclasses/${id}`)
                    .then(() => {
                        refetch()

                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <div className="mb-8">
            <HeadingTitle heading='My Selected classes' />

            {
                Myclas == 0?  <div className="font-semibold md:text-xl sm:text-sm text-[#FFBF23] "> Opps! You didn't select any classes</div> : <div className="flex items-center justify-start  gap-5 mt-5 mb-3 ml-2">
                <h6 className="font-semibold md:text-xl sm:text-sm text-[#FFBF23] ">
                    Make your payment
                </h6>
            </div>
            }

           
            <hr />
            {
                Myclas == 0 ? (
                    <div className='flex justify-center items-center'>
                        <Lottie animationData={notFound} loop={true} />
                    </div>
                ) : <div className="w-full">
                    {/* table section */}
                    <div className="overflow-x-auto max-w-full">
                        <div className="">
                            <table className="table">
                                {/* head */}
                                <thead>
              <tr>
                {/* Only show the "Index" column on larger screens */}
                <th className="hidden md:table-cell">Index</th>
                <th className="hidden md:table-cell">Image</th>
                <th>Name</th>
                <th>Price</th>
                {/* Only show the "Trainer Name" column on larger screens */}
                <th className="hidden md:table-cell">Trainer Name</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        Myclas?.map((d, index) => <tr key={d._id}>

                                            <td className="hidden md:table-cell">
                                                {index + 1}
                                            </td>
                                            <td className="hidden md:table-cell">
                                                <div className="flex items-center space-x-3 ">
                                                    <div className="avatar ">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={d.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {d.name}
                                            </td>
                                            <td >
                                                {d.price}$
                                            </td>
                                            <td className="hidden sm:hidden md:block">{d.trainerName}</td>
                                            <th>
                                                <button className="btn bg-red-600 text-white btn-xs" onClick={() => handelDelet(d._id)}>Delete</button>
                                            </th>
                                            <th>

                                                <NavLink to='/dashboard/payment' state={{ price: d?.price, itemId: d._id, countId: d.classId, itemName: d.name, image: d.image }}><button className="btn bg-[#ffbf23] text-white btn-xs">Payment</button></NavLink>
                                            </th>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default SelectedClasses;