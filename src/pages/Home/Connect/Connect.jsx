import HeadingTitle from '../../../components/Share/HeadingTitle';
import Lottie from "lottie-react";
import anemation from '../../../assets/about2.json'

import ContacForm from './ContacForm';
const Connect = () => {
    return (
        <div className='mb-16 md:mb-36 w-[80%] mx-auto'>
            <HeadingTitle heading='Connect with us '/>


            
            <div className='flex flex-col md:flex-row justify-center items-center text-white px-5'>
                <div className='w-full md:w-[40%] text-4xl font-bold'>
                    
               <div className=""> <Lottie animationData={anemation} loop={true} /></div>
                </div>
                <div className='w-full md:w-[60%]'>

                    <ContacForm />
                </div>
            </div>
        
        </div>
    );
};

export default Connect;