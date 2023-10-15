import { useState } from 'react';
import './video.css'
import { FaPlayCircle } from 'react-icons/fa';

const OurVideo = () => {
    const [play, isplay] = useState(false)
    const handelPlay = () => { 
        isplay(true)
     }
    return (
        <div>
            <div className="banner  mt-32 flex justify-center items-center ">
                <div className='flex flex-col gap-10 justify-center items-center'>
                {
                     !play &&  <h5 className='text-xl lg:text-3xl xl:text-4xl text-white font-bold'>WATCH OUR AWESOME VIDEO!</h5>
                }
                    
                    {
                         !play && <span onClick={handelPlay} className='text-7xl text-white'> <FaPlayCircle />  </span>
                    }
                    
                    {
                        play && <iframe className="sm:w-[500px]  sm:h-[300px]  md:w-[700px]  md:h-[300px]  lg:w-[800px]  xl:w-[1280px]  xl:h-[520px] aspect-video ... " src="https://www.youtube.com/embed/pgjqokX5Nqw" title="Summer camp.Vdeo A1-A2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    }
                    {
                         !play &&  <button className='primary-button w-2/4 mx-auto'>Enrole now</button>
                    }
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default OurVideo;