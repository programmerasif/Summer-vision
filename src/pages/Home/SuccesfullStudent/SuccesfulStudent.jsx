import HeadingTitle from "../../../components/Share/HeadingTitle";
import pic1 from '../../../assets/sakib.jpg'
import pic2 from '../../../assets/swiming.jpg'
import pic3 from '../../../assets/golf.jpg'
import pic4 from '../../../assets/basketball.webp'
import Marquee from "react-fast-marquee";
const SuccesfulStudent = () => {
    return (
        <div className="mt-36 mb-36">
            <HeadingTitle heading='Our succesfull Student'></HeadingTitle>
            <div className=" px-0 md:px-8">
            <Marquee>
                
             
                <div className="card card-compact w-96 h-72 bg-base-100 shadow-xl me-20">
                 <figure><img src={pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                       <h2 className="card-title">Tiger Woods</h2>
                       <p> Profeshional Cricket player</p>
                    </div>
                </div> 
                <div className="card card-compact w-96 h-72 bg-base-100 shadow-xl me-24">
                 <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                       <h2 className="card-title">Jeoy Jems</h2>
                       <p> Profeshional seiming player</p>
                    </div>
                </div> 
                <div className="card card-compact w-96 h-72 bg-base-100 shadow-xl me-24">
                 <figure><img src={pic4} alt="Shoes" /></figure>
                    <div className="card-body">
                       <h2 className="card-title">Ron Wilmton</h2>
                       <p> Profeshional Basket player</p>
                    </div>
                </div> 
                <div className="card card-compact w-96 h-72 bg-base-100 shadow-xl me-20">
                 <figure><img src={pic3} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">Pawl Nixson</h2>
                    <p> Profeshional Golf player</p>
                    </div>
                </div> 
               
                
            </Marquee>
            </div>
        </div>
    );
};

export default SuccesfulStudent;