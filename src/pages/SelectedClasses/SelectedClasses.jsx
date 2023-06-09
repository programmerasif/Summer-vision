import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import HeadingTitle from "../../components/Share/HeadingTitle";

const SelectedClasses = () => {
    const {user} = useContext(AuthContext)
    const [data , setData] = useState([])
   useEffect(() =>{
    fetch(`http://localhost:5000/myclasses?email=${user?.email}`)
    .then(res =>res.json())
    .then(data => setData(data))
   },[])
   
   console.log(data);
    return (
        <div>
            <HeadingTitle heading='My Selected classes'/>
            {/* table section */}
        </div>
    );
};

export default SelectedClasses;