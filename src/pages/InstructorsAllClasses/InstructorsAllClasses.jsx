import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";
import HeadingTitle from "../../components/Share/HeadingTitle";
import InstructorCard from "./InstructorCard";


const InstructorsAllClasses = () => {
    const {user} = useContext(AuthContext);
    const[data,setdata] = useState([])
    const [feedback,setfeedback] = useState('')
    
    // console.log(user);
    const [axiosSecure] =useAxios()
    useEffect(() =>{
        axiosSecure.get(`instructorClasses/${user.email}`)
        .then(res => {
            setdata(res.data)
        })
    },[])
    
  
    return (
        
        <div>
           <HeadingTitle heading='my added class'/>

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
        data?.map((item,i) => <InstructorCard  key={item._id} i={i} item={item} setfeedback={setfeedback}/> )
      }
      
    
    </tbody>
 
    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Admin Feedback</h3>
    <p className="py-4">{feedback == null  || feedback == undefined? <> Admin does not write any feedback </> :<>{feedback}</>}</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
    </div>
  </table>
</div>
        </div>
        
    );
};

export default InstructorsAllClasses;