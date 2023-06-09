import { useEffect, useState } from "react";
import HeadingTitle from "../../components/Share/HeadingTitle";


const AllUsersInfo = () => {
    const [users ,setUser] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/all-user`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    console.log(users);
    return (
        <div className="w-full ms-2">
            <HeadingTitle heading={'All Users'}/>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th className="hidden sm:hidden md:block">Index</th>
      <th className="text-start">Name</th>
      <th className="hidden sm:hidden md:block">Email</th>
      <th className="text-start">Action</th>
     
        
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user,i) => <tr key={user._id}>
            <th className="hidden sm:hidden md:block">
              {i + 1}
            </th>
            <td>
              {user.name}
            </td>
            <td>
              <span className="badge badge-ghost badge-sm hidden sm:hidden md:block">{user.email}</span>
            </td>
            <td>
            <div className="flex items-start text-start ">
                <div className="btn btn-xs ">
                  Make Instructor
                </div>
                <div className="btn btn-xs">
                    Make Admin
                </div>
              </div>
            </td>
          </tr>)
      }
      
    
    </tbody>
 
    
    
  </table>
</div>
        </div>
    );
};

export default AllUsersInfo;




// <div className="overflow-x-auto w-full">
// <table className="md:table sm:table-xs w-full">

//   <thead className="w-full">
//     <tr>
//       <th className="hidden sm:hidden md:block">Index</th>
//       <th className="text-start">Name</th>
//       <th className="hidden sm:hidden md:block">Email</th>
//       <th>Action</th>
//       <th>Action</th>
//     </tr>
//   </thead>
//   <tbody>
 
//     {
//       users.map((user,i) =>  <tr key={user._id}>
//           <th className="hidden sm:hidden md:block">{i + 1}</th>
//           <td className="text-start">{user.name}</td>
//           <td className="hidden sm:hidden md:block">{user.email}</td>
//           <td><button className="btn btn-xs">Make admin</button></td>
//           <td > <button className="btn btn-xs">Make Instructor</button></td>
//         </tr>)
//     }
   
//   </tbody>
// </table>
// </div>