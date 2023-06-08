import { useEffect, useState } from "react";
import HeadingTitle from "../../../components/Share/HeadingTitle";
import CoachesCard from "./CoachesCard";



const PopularInstructors = () => {

    const[instructors,setInstructors] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/populer-coaches')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
console.log(instructors);
    return (
        <div>hello world</div>
        // <div className="mt-20 custom-container">
        //     <HeadingTitle heading='Our Popular Instructors'
        //     subHeading='our Instructors can help you to improve your skills and the committed to get you the pinnacle of success'
        //     >
        //     </HeadingTitle>
        //     <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center ">
        //     {
        //         instructors.map(data => <CoachesCard key={data._id} data={data}/>)
        //     }
        //     </div>
        // </div>
    );
};

export default PopularInstructors;