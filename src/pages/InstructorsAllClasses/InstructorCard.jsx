const InstructorCard = ({item,i,setfeedback}) => {
    
    return (
        <tr className="">
            <th className="hidden md:table-cell">
              {i + 1}
            </th>
            <td className="hidden md:table-cell">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
            <td>
              {item?.name}
            </td>
           
            <td className="text-right ">
              <span className="badge badge-ghost badge-sm ">{item?.enrolled ? <p>{item?.enrolled}</p> : <>0</>}</span>
            </td>
            <td className="hidden md:table-cell">
              {/* TODO */}
            <label htmlFor="my_modal_7" className="btn btn-sm" onClick={()=> setfeedback(item.feedback)}>Feedback</label>
            </td>
            <td>
                <button className="btn btn-sm w-32 bg-[#ffbf23]">{item?.approve}</button>
            </td>
            <td className=" hidden md:table-cell">
                <button className="btn btn-sm text-white bg-green-500">Update</button>
            </td>
            <td className="hidden md:table-cell">
                <button className="btn btn-sm text-white bg-red-500">Delete</button>
            </td>
            
          </tr>
    );
};



export default InstructorCard;



{/* <input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Admin Feedback</h3>
    <p className="py-4">{item?.feedback != undefined && item.feedback}</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label> */}