import React from 'react';
import { FaHeadset,FaGrinBeam} from 'react-icons/fa';
import { BsPersonSquare,BsTrophyFill } from "react-icons/bs";

const StudentCare = () => {
    return (
        <div >
           <div className='grid grid-cols-2 md:grid-cols-4 px-4 md:px-10 justify-center items-center text-center mx-auto bg-gray-100 py-14 gap-5'>
            <div className='flex gap-1 md:gap-4 justify-center items-center border-l-4 border-r-4 border-[#FFBF23]'> <span className='text-3xl md:text-7xl'><BsPersonSquare /></span> <span className='text-sm md:text-xl'>Top Instructors</span></div>
            <div className='flex gap-1 md:gap-4 justify-center items-center border-r-4 border-[#FFBF23]'> <span className='text-3xl md:text-7xl'><FaHeadset /></span> <span className='text-sm md:text-xl'>24/7 Support</span></div>
            <div className='flex gap-1 md:gap-4 justify-center items-center border-l-4 md:border-none border-r-4 border-[#FFBF23]'> <span className='text-3xl md:text-7xl'><FaGrinBeam/></span> <span className='text-sm md:text-xl'>Top Student Care</span></div>
            <div className='flex gap-1 md:gap-4 justify-center items-center border-r-4 border-[#FFBF23]'> <span className='text-3xl md:text-7xl'><BsTrophyFill/></span> <span className='text-sm md:text-xl'>Top Succes-Rate</span></div>
           </div>
        </div>
    );
};

export default StudentCare;