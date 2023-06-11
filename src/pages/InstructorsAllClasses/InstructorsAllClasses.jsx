import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";


const InstructorsAllClasses = () => {
    const {user} = useContext(AuthContext);
    const[data,setdata] = useState([])
    console.log(user);
    const [axiosSecure] =useAxios()
    useEffect(() =>{
        axiosSecure.get(`instructorClasses/${user.email}`)
        .then(res => {
            setdata(res.data)
        })
    },[])
    
    return (
        
        <div>
           

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th className="">Index</th>
      <th className="">Image</th>
      <th className="text-start">Name</th>
      <th className="">Enrolled Students</th>
      <th className="">Feedback</th>
      <th >Action</th>
     
        
      </tr>
    </thead>
    <tbody>
      {
        data?.map((item,i) => <tr key={item._id}>
            <th className="">
              {i + 1}
            </th>
            <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
            <td>
              {item.name}
            </td>
           
            <td className="text-right">
              <span className="badge badge-ghost badge-sm ">{item.enrolled ? <p>{item.enrolled}</p> : <>0</>}</span>
            </td>
            <td className="">
            <label htmlFor="my_modal_7" className="btn btn-sm">Feedback</label>
            </td>
            <td>
                <button className="btn btn-sm text-white bg-green-500">Update</button>
            </td>
            <td>
                <button className="btn btn-sm text-white bg-red-500">Delete</button>
            </td>
            <td>
                <button className="btn btn-sm w-32 bg-[#ffbf23]">{item.approve}</button>
            </td>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Admin Feedback</h3>
    <p className="py-4">{item.feedback ? <>{item.feedback}</> : <>Admin did not give any Feedback</>}</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
          </tr>)
      }
      
    
    </tbody>
 
    
    
  </table>
</div>
        </div>
        
    );
};

export default InstructorsAllClasses;