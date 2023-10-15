
import "swiper/css";
import "swiper/css/pagination";
import TopClasses from "../TopClasses/TopClasses";
import Marketing from "../Marketing/Marketing";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


import SuccesfulStudent from "../SuccesfullStudent/SuccesfulStudent";
import Supporter from "../Supporter/Supporter";
import Banner from "../Banner/Banner";
import AboutUs from "../../../components/AboutUs/AboutUs";
import OurVideo from "../../../components/OurVideo/OurVideo";



const HomePage = () => {
    return (
        <div>
            {/*  */}
            <Banner />

            <AboutUs />
            <OurVideo />
            {/* Our top classes  */}
            <TopClasses />
            
            {/* Marketing */}
            <Marketing></Marketing>
            {/* PopularInstructors */}
            <PopularInstructors />
            
            <Supporter />
            {/* Successfull student */}
            <SuccesfulStudent />
        </div>
    );
};

export default HomePage;