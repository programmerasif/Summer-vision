import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";
import HeadingTitle from "../../components/Share/HeadingTitle";
import notFound from '../../assets/productNotFound/animation_lkyxho8u.json'
import Lottie from "lottie-react";
const PaymentHistroy = () =>{
    const [axiosSecure] = useAxios()
    const {user} = useContext(AuthContext)
    const [enroledClass,setEnroledClass] = useState([])
 
    useEffect(() =>{
        axiosSecure.get(`/enroledClasses/${user?.email}`)
        .then(res => setEnroledClass(res.data))
    },[])
    return (
        <div className="mb-8">
         <HeadingTitle heading="Payment History" subHeading=""/>
         {
            enroledClass == 0? <div className="font-semibold md:text-xl sm:text-sm text-[#FFBF23] ">You didn't purches any class</div> : ""
         }
        {
            enroledClass == 0? (
                <div className='flex justify-center items-center'>
                    <Lottie animationData={notFound} loop={true} />
                </div>
            ) : <div className="w-full">
        
            {/* table section */}
            <div className="overflow-x-auto max-w-full">
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="hidden md:table-cell">
                                    Index
                                </th>
                                <th className="hidden md:table-cell">Image</th>
                                <th className="hidden md:table-cell">Name</th>
                                <th>TransationId</th>
                                <th>Price</th> 
                                <th className="hidden md:table-cell">Quantity</th> 
                                <th className="hidden md:table-cell">Woner name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                enroledClass?.map((d, index) => <tr key={d._id}>
                                    
                                    <td className="hidden md:table-cell">
                                        {index + 1}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        <div className="flex items-center space-x-3 ">
                                            <div className="avatar ">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={d.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {d.itemName}
                                        
                                    </td>
                                    <td>
                                        {d.TransationId}
                                        
                                    </td>
                                    <td >
                                        {d.price}$
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {d.quantity}
                                    </td>
                                    <td className="hidden md:table-cell">{d.ownerName}</td>
                                   
                                    
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        }
        </div>
    );
};

export default PaymentHistroy;