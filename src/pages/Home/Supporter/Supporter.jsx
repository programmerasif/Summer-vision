import './supporter.css'
import pepole from '../../../assets/section-user-trust-1.png'
import StudentCare from '../StudentCare/StudentCare';

const Supporter = () => {
    return (

        <div className='flex md:flex-col flex-col-reverse mt-36'>
        {/* Student Care */}
        <StudentCare /> 
        
        <div className="bg-Img bg-gray-100 w-full grid grid-cols-1 md:grid-cols-2 px-4">
            <div className='flex justify-start md:justify-center items-center'>
                <div className='border-b-4 border-[#FFBF23]'>
                <div className='text-4xl md:text-6xl font-semibold'>7850+</div>
                <div className='text-xl font-semibold'>Student Trust</div>
                <div className=''>Connect with Us</div>
                </div>
            </div>
            <div className=''>
             <img src={pepole} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Supporter;