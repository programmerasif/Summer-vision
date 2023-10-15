


import useClasses from "../Hooks/useClasses";
import HeadingTitle from "../components/Share/HeadingTitle";
import ClassCard from "./ClassCard";

import itemLoading from '../assets/animation_lky6b0mi.json'
import Lottie from "lottie-react";

const AllClasses = () => {
    
   const [clas, refatch,isLoading] = useClasses()
   
   if (isLoading) {
    return (
        <div className='flex justify-center items-center mt-72'>
            <div>

        <Lottie animationData={itemLoading} loop={true} />
            </div>
   </div>
    );
}
    return (
        <div>
            <div className="custom-container mt-24 mb-12">
            <HeadingTitle subHeading='Are you ready to join with us' heading='All classes'/>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center mt-20 ">
            {
               
               clas.map(data => <ClassCard key={data._id} data={data}/>)
            }
            </div>
        </div>
      
        </div>
    );
};

export default AllClasses;