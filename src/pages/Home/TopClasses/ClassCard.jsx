import AOS from 'aos';
import 'aos/dist/aos.css';

const ClassCard = ({ data }) => {

  return (

    <>
    
      <div data-aos="zoom-in-up" className="card card-compact lg:w-96 md:w-80 sm:w-auto mx-auto bg-gray-100">
      <figure><img src={data.image} alt="Shoes" className="h-60" /></figure>
      <div className="card-body">
        <h2 className="card-title">{data.category}</h2>
        <p>Duration : {data.duration} month</p>
        <p>Student : {data.studentNumber} </p>
        <p>Type : {data.data} </p>
      </div>
    </div>
    
    
    </>

  );
};

export default ClassCard;