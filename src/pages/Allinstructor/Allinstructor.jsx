import { } from 'react';
import HeadingTitle from '../../components/Share/HeadingTitle';
import Card from './Card';
import useAxios from '../../Hooks/useAxios';
import itemLoading from '../../assets/animation_lky6b0mi.json'
import Lottie from "lottie-react";
import { useQuery } from '@tanstack/react-query';

const Allinstructor = () => {
    const [axiosSecure] = useAxios()
   
    const { data: instructorList = [], isLoading } = useQuery({
        queryKey: ['instructorList'], queryFn: async () => {
          
          
          const res = await axiosSecure.get(`/populer-coaches`) //8/4/2023 Todo
          
          return res.data
        }
      })


    return (
        <div>
            <div className=" custom-container mt-24 mb-8">

                <div className='mt-10'>
                    <HeadingTitle heading='Our All Instructors'
                        subHeading='our Instructors can help you to improve your skills and the committed to get you the pinnacle of success'
                    >
                    </HeadingTitle>
                </div>

                {
                    isLoading ?  (
                        <div className='flex justify-center items-center'>
                            <div>

                                <Lottie animationData={itemLoading} loop={true} />
                            </div>
                        </div>
                    ) : <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center ">
                    
                </div>
                }

                <div className="grid xl:grid-cols-3  md:grid-cols-2 mx-auto  sm:grid-cols-1 gap-5 justify-center items-center ">
                    {

                         instructorList.map(data => <Card key={data._id} data={data} />)
                    }
                </div>

            </div>
           
        </div>
    );
};

export default Allinstructor;