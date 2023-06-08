import  { useEffect, useState } from 'react';
import HeadingTitle from '../../components/Share/HeadingTitle';
import Card from './Card';
import Weve from '../Home/Marketing/Weve';

const Allinstructor = () =>{

    const[instructors,setInstructors] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/populer-coaches')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
console.log(instructors);
    return (
       <div>
         <div className=" custom-container mt-24 mb-8">
            
            <div  className='mt-10'>
            <HeadingTitle heading='Our All Instructors'
            subHeading='our Instructors can help you to improve your skills and the committed to get you the pinnacle of success'
            >
            </HeadingTitle>
            </div>
           
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center ">
            {
                instructors.map(data => <Card key={data._id} data={data}/>)
            }
            </div>
           
        </div>
        <Weve />
       </div>
    );
};

export default Allinstructor;