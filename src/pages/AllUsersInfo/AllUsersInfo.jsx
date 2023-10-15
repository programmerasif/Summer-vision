import { useContext } from "react";
import HeadingTitle from "../../components/Share/HeadingTitle";
import useAllusers from "../../Hooks/useAllusers";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";


const AllUsersInfo = () => {
  const [users, refetch] = useAllusers()
  const [axiosSecure] = useAxios()
  const {user} = useContext(AuthContext)
  
  const makeadmin = (id) => {
    axiosSecure.patch(`/user/admin/${id}`, { role: 'admin' })
      .then(data => {

        if (data.data.modifiedCount) {
          refetch()
        }
      })
  }
  const makeInstractor = (id) => {
    axiosSecure.patch(`/user/admin/${id}`, { role: 'instractor' })
      .then(data => {

        if (data.data.modifiedCount) {
          refetch()
        }
      })
  }



  return (
    <div className="w-full ms-2 mb-8">
      <HeadingTitle heading={'All Users'} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden sm:hidden md:block">Index</th>
              <th className="text-start">Name</th>
              <th className="hidden sm:hidden md:block">Email</th>
              <th >Action</th>


            </tr>
          </thead>
          <tbody>
            {
              users?.map((person, i) => <tr key={person._id}>
                <th className="hidden sm:hidden md:block">
                  {i + 1}
                </th>
                
                <td>
                  {person.email == user.email ? <span className=" text-xl font-bold text-[#ffbf23]">Me</span> : <span>{person.name}</span>}
                  
                </td>
                <td className="hidden sm:hidden md:block">
                  <span className="badge badge-ghost badge-sm ">{person.email}</span>
                </td>
                <td>
                  <div className="flex items-start text-start ">
                    
                    <button disabled={person?.role == 'instractor' || person.email == user.email} className="btn btn-xs bg-red-600 text-white" onClick={() => makeInstractor(person._id)}>Instractor </button>
                    <div>
                      
                      <button disabled={person?.role == 'admin'}  className="btn btn-xs bg-red-600 text-white w-24 text-xs" onClick={() => makeadmin(person._id)}>Admin </button>
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