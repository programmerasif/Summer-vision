import HeadingTitle from "../../components/Share/HeadingTitle";
import useAllusers from "../../Hooks/useAllusers";
import useAxios from "../../Hooks/useAxios";


const AllUsersInfo = () => {
  const [users, refetch] = useAllusers()
  const [axiosSecure] = useAxios()
  const makeadmin = (id) => {
    axiosSecure.patch(`/user/admin/${id}`, { role: 'admin' })
      .then(data => {

        if (data.data.modifiedCount) {
          refetch()
        }
        console.log(data)
      })
  }
  const makeInstractor = (id) => {
    axiosSecure.patch(`/user/admin/${id}`, { role: 'instractor' })
      .then(data => {

        if (data.data.modifiedCount) {
          refetch()
        }
        console.log(data.data)
      })
  }



  return (
    <div className="w-full ms-2">
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
              users?.map((user, i) => <tr key={user._id}>
                <th className="hidden sm:hidden md:block">
                  {i + 1}
                </th>
                <td>
                  {user.name}
                </td>
                <td className="hidden sm:hidden md:block">
                  <span className="badge badge-ghost badge-sm ">{user.email}</span>
                </td>
                <td>
                  <div className="flex items-start text-start ">
                    {
                      user?.role == 'instractor' ? <button className="rounded btn-xs bg-gray-400 text-white" >Instractor</button> : <button disabled={user?.role == 'instractor' } className="btn btn-xs bg-red-600 text-white" onClick={() => makeInstractor(user._id)}>Make Instractor </button>
                    }

                    <div>
                      {
                        user?.role == 'admin' ? <button  className="rounded btn-xs bg-gray-400 text-white" >Admin</button> : <button disabled={user?.role == 'admin' }  className="btn btn-xs bg-red-600 text-white" onClick={() => makeadmin(user._id)}>Make admin </button>
                      }
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