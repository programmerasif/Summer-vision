
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const CoachesCard = ({ data }) => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
         <div className='px-4'>
            <div data-aos="zoom-in-up" className='md:w-72 sm:w-auto bg-gray-100 rounded-br-full rounded-tl-full rounded-tr-full mx-auto '>
            <img src={data.image} alt="Shoes" className="h-60  " />
            </div>

            <div className='flex justify-start items-center md:w-72 sm:w-auto mx-auto'>

                <div>
                <div>Name: {data.category}</div>
            <p>Number of Student : {data.studentNumber} </p>
            <p>Type : {data.type} </p>
            <div className='font-semibold'>Coach Name : {data.name}</div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default CoachesCard;