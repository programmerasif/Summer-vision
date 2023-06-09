import Swal from "sweetalert2";
import HeadingTitle from "../../components/Share/HeadingTitle";
import useMyclasses from "../../Hooks/useMyclasses";

const SelectedClasses = () => {
    const [Myclas,refetch] = useMyclasses()
    
    const handelDelet = (id) =>{
        fetch(`http://localhost:5000/myclasses/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            console.log(data)
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
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        })
        
    }
   
    return (
        <div className="w-full">
            <HeadingTitle heading='My Selected classes' />

          <div className="flex items-center justify-start  gap-5 mt-5 mb-3 ml-2">
            <h6 className="font-semibold text-3xl text-[#FFBF23] ">Make your payment </h6>
            
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
                                <th>
                                    Index
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Trainer Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                Myclas?.map((d, index) => <tr key={d._id}>
                                    <td className="">
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
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
                                    <td className="">{d.trainerName}</td>
                                    <th>
                                        <button className="btn bg-red-500 text-[#000000] btn-xs" onClick={() =>handelDelet(d._id)}>Delete</button>
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