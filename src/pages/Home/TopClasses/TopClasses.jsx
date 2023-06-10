import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import HeadingTitle from "../../../components/Share/HeadingTitle";
import useAxios from "../../../Hooks/useAxios";


const TopClasses = () => {
    const [classes,setClasses] = useState([])
    const [axiosSecure] = useAxios()
    useEffect(() =>{
        axiosSecure(`/catagory`)
        .then(data => setClasses(data.data))
    },[])
    return (
        <>
        <div className="custom-container px-4 mt-28 uppercase">
            
            <HeadingTitle subHeading='Our top classes are carefully curated to provide you with the most valuable and relevant training' heading='Out top Classes'/>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center ">
            {
                classes.map(data => <ClassCard key={data._id} data={data}/>)
            }
            </div>
        </div>
        </>
    );
};

export default TopClasses;