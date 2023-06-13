
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const CoachesCard = ({ data }) => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="">
            <div data-aos="zoom-in-up" className="card card-compact md:w-96 sm:w-auto bg-base-100 shadow-xl ">
                <figure><img src={data.image} alt="Shoes" className="h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Coach Name : {data.name}</h2>
                    <p>Number of Student : {data.category} </p>
                    <p>Number of Student : {data.studentNumber} </p>
                    <p>Type : {data.type} </p>

                </div>
            </div>
        </div>
    );
};

export default CoachesCard;