import Swal from "sweetalert2";
import HeadingTitle from "../../components/Share/HeadingTitle";
import useMyclasses from "../../Hooks/useMyclasses";
import useAxios from "../../Hooks/useAxios";

const SelectedClasses = () => {
    const [Myclas,refetch] = useMyclasses()
    console.log(Myclas);
    const [axiosSecure] = useAxios()
    const handelDelet = (id) =>{

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
        <div className="w-full">
            <HeadingTitle heading='My Selected classes' />

          <div className="flex items-center justify-start  gap-5 mt-5 mb-3 ml-2">
            <h6 className="font-semibold md:text-3xl sm:text-sm text-[#FFBF23] ">Make your payment </h6>
            
            <button className="btn btn-sm">Pay</button>
          </div>
          <hr />
           
            
            {/* table section */}
            <div className="overflow-x-auto max-w-full">
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="hidden sm:hidden md:block">
                                    Index
                                </th>
                                <th >Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="hidden sm:hidden md:block">Trainer Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                Myclas?.map((d, index) => <tr key={d._id}>
                                    <td className="hidden sm:hidden md:block">
                                        {index + 1}
                                    </td>
                                    <td>
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
                                        <button className="btn bg-red-600 text-white btn-xs" onClick={() =>handelDelet(d._id)}>Delete</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClasses;