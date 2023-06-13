import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";
import HeadingTitle from "../../components/Share/HeadingTitle";

const PaymentHistroy = () =>{
    const [axiosSecure] = useAxios()
    const {user} = useContext(AuthContext)
    const [enroledClass,setEnroledClass] = useState([])
    useEffect(() =>{
        axiosSecure.get(`/enroledClasses/${user?.email}`)
        .then(res => setEnroledClass(res.data))
    },[])
    return (
        <div className="w-full">
            <HeadingTitle heading='Payment History'/>
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
                                <th>Image</th>
                                <th>Name</th>
                                <th>TransationId</th>
                                <th>Price</th> 
                                <th>Quantity</th> 
                                <th className="hidden sm:hidden md:block">Wwner Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                enroledClass?.map((d, index) => <tr key={d._id}>
                                    
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
                                        {d.itemName}
                                    </td>
                                    <td>
                                        {d.TransationId}
                                    </td>
                                    <td >
                                        {d.price}$
                                    </td>
                                    <td >
                                        {d.quantity}
                                    </td>
                                    <td className="hidden sm:hidden md:block">{d.ownerName}</td>
                                   
                                    
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistroy;