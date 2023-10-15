import { FaCheck } from "react-icons/fa";
import galary1 from '../../assets/galary1.jpg'
import galary2 from '../../assets/galary2.jpg'
import galary3 from '../../assets/galary3.jpeg'
import galary4 from '../../assets/galary4.jpg'
import galary5 from '../../assets/galary5.jpg'
import galary6 from '../../assets/galary6.jpg'
import galary7 from '../../assets/galary7.jpeg'
import galary9 from '../../assets/galary9.jpg'
import galary10 from '../../assets/galary10.jpg'
import galary11 from '../../assets/galary11.jpeg'
import galary12 from '../../assets/galary12.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';

// import './styles.css';
import { EffectCards } from "swiper";
import HeadingTitle from "../Share/HeadingTitle";



const AboutUs = () => {
    return (
        <div className="mt-32">
        <HeadingTitle heading='About Us'/>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-4/5 mx-auto mt-20 justify-center items-start gap-14">
            <div className="flex flex-col gap-5">
                 
                <h5 className="text-3xl font-bold ">WE ARE THE BEST SUMMER CAMP!</h5>
                <p> <span className="font-semibold text-[#FFBF23] text-xl italic">we have more than 20+ trainer</span> and they alwasy ready to give you any kind of support. thre is a possiblity to connect new friend and stay together.student range in age from seven to fifteen.</p>
                <button className="primary-button mt-5 w-48">Find out more</button>
            </div>
            <div>
                <h5 className="text-3xl font-bold">FACILITIES</h5>
                
               <div className="flex flex-col gap-3 mt-5">
               <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>BOYS & GIRLS</span></div>
               <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>AGES 7-15</span></div>
                <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>TEAM & IN spanIDUAL SPORTS</span></div>
                <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>PERFORMING & CREATIVE ARTS</span></div>
                <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>WATERFRONT ACTIVITIES</span></div>
                <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>SPECIAL EVENTS & TRIPS</span></div>
                <div className="flex justify-start items-start gap-3"> <span className="text-[#FFBF23]"> <FaCheck /> </span>  <span>PROFESSIONAL STAFF</span></div>
               </div>
            </div>
            <div>
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={galary1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={galary12} alt="" />
        </SwiperSlide>
      </Swiper>
   
            </div>
        </div>
        </div>
    );
};

export default AboutUs;