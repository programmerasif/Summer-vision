
import { Fade } from 'react-awesome-reveal';
import Weve from './Weve';

const Marketing = () => {
    
    return (
        
        <>
        <div className='mt-20 mb-[0]'>
        <Weve />
        
        <div className='bg-[#FFBF23] mt-[0]'>
               <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center h-[35vh]  custom-container">
               <div >
                    <p className='text-2xl font-semibold p-2'>
                    With the Right Decision, <br /> Great Things Can Happen
                    </p>
                 </div>
                <div className="sm:duration-500 md:duration-1000 p-2"  >
                <Fade>
                    <h4 >
                    At our 'Summer-vision', we believe that learning should be a lifelong journey. Whether you're a working professional seeking to upskill, a student eager to explore new subjects, or an individual passionate about personal development, we have something for everyone.
                    </h4>
                    </Fade>
                </div>
               </div>
               </div>
        </div>
        </>
    );
};

export default Marketing;