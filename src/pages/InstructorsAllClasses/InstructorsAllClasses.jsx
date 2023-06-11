import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";


const InstructorsAllClasses = () => {
    const {user} = useContext(AuthContext);
    const {setInstractorClass} = useState([])
    console.log(user);
    const [axiosSecure] =useAxios()
    useEffect(() =>{
        axiosSecure.get(`instructorClasses/${user.email}`)
        .then(res => setInstractorClass(res.data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default InstructorsAllClasses;