import {useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HeadingTitle from "../../components/Share/HeadingTitle";
import { authorization } from "../../Hooks/commonFunction/authorize";

const ManageClasses = () => {
  
  
  const [feedback, setfeedback] = useState(null);
  
  const token = localStorage.getItem('access-token')
  const { refetch, data: panding = [] } = useQuery({
    queryKey: ['Myclass'], queryFn: async () => {
      
      // const url = `http://localhost:5000/notApproveClasses`; 
      const url = `https://project-summer-5h81.vercel.app/notApproveClasses`; 
            const headers = {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`, 
              };
            const response = await fetch(url, {
                method: 'GET', 
                headers: headers,
                
              });

              const data = await response.json();
            
            return data
    }
  })


  const approve = (id) => {
  const item = {
      feedback:feedback,
      action: 'approve'
    }
    authorization(item,id,token,refetch)
  }
  const deny = (id) => {
    const item = {
      feedback:feedback,
      action: 'admin-deny'
    }
    
    authorization(item,id,token,refetch)
  }
 
  const handelsubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
    const data = form.feedback.value
    setfeedback(data);
  
  }


  return (
    <div className="w-full h-full mb-8">
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
            <tr className="">
              <th className="hidden md:table-cell">
                #
              </th>
              <th className="hidden sm:hidden md:block">Image</th>
              <th className="hidden md:table-cell">Name</th>
              <th>Instructor Name</th>
              <th className="hidden md:table-cell">Instructor Email</th>
              <th className="hidden md:table-cell">Total Enrolled</th>
              <th className="hidden md:table-cell">Statas</th>
              <th className="hidden md:table-cell">Feedback</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              panding.map((item, i) => <tr key={item._id}>
                <th className="hidden md:table-cell">
                  {1 + i}
                </th>
                <td className="hidden md:table-cell">
                 <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-start hidden md:table-cell">
                  {item.name}

                </td>
                <td className="text-start">{item.trainerName}</td>
                <td className="text-start hidden md:table-cell">{item.email}</td>
                <td className="text-start hidden md:table-cell">0</td>
                <td className="text-start hidden md:table-cell">{item.approve}</td>
                <td className="text-start hidden md:table-cell">
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