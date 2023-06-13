import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import HeadingTitle from "../../components/Share/HeadingTitle";

const ManageClasses = () => {
  const [axiosSecure] = useAxios()
  // const [value, setvalue] = useState('');
  const [feedback, setfeedback] = useState(null);
  // const [denyDisable ,setDenyDiable] = useState(false)
  const { refetch, data: panding = [] } = useQuery({
    queryKey: ['Myclass'], queryFn: async () => {
      const res = await axiosSecure.get('/notApproveClasses')
      return res.data
    }
  })

console.log(panding);

  const approve = (id) => {
  const item = {
      feedback:feedback,
      action: 'aprove'
    }
    axiosSecure.patch(`/addedClass/${id}`,item)
    .then(res => {
      // setDenyDiable(true)
      refetch()
      console.log(res.data)
    })
  }
  const deny = (id) => {
    const item = {
      feedback:feedback,
      action: 'admin-deny'
    }
    axiosSecure.patch(`/addedClass/${id}`,item)
    .then(res => {
      refetch()
      console.log(res.data)
    })
    
  }
 
  const handelsubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
    const data = form.feedback.value
    setfeedback(data);
  
  }


  return (
    <div className="w-full h-full">
      <HeadingTitle heading='manage classes' />
    {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <form onSubmit={handelsubmit}> 
   
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Type your feedback</span>
  </label>
  <input type="text" name="feedback" placeholder="Type your feedback?" className="input input-bordered w-full max-w-xs" />
</div>
    <div className="modal-action" >
      <input type="submit" value="Send Feedback" className="btn"/>
      <label htmlFor="my_modal_6" className="btn" >Close!</label>
    </div>
    </form>
  </div>
</div>
      <form onSubmit={handelsubmit}></form>
      <div className="overflow-x-auto w-full h-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="">
                #
              </th>
              <th className="hidden sm:hidden md:block">Image</th>
              <th>Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Total Enrolled</th>
              <th>Statas</th>
              <th>Feedback</th>
              <th>Action</th>
              <th>Action</th>
            
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              panding.map((item, i) => <tr key={item._id}>
                <th className="">
                  {1 + i}
                </th>
                <td className="hidden sm:hidden md:block">

                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>



                </td>
                <td className="text-start">
                  {item.name}

                </td>
                <td className="text-start">{item.trainerName}</td>
                <td className="text-start">{item.email}</td>
                <td className="text-start">0</td>
                <td className="text-start">{item.approve}</td>
                <td className="text-start">
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_6" className="btn btn-sm">Give Feedback</label>
                </td>
                <td>
                  <div disabled={item.approve != 'pending'} className="btn btn-sm text-green-500" onClick={() =>approve(item._id)}>Give-approve</div>
                </td>
                <td >
                  <button disabled={item.approve != 'pending'}  className="btn btn-sm text-red-500" onClick={() => deny(item._id) }>Denied</button>

                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;