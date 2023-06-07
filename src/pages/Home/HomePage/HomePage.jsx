import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "lottie-react";
import champion from '../../../assets/69354-olympic-games-2021-victory-player.json'
import score from '../../../assets/47638-warmup.json'
import archery from '../../../assets/70669-olympics-2021-archery-women.json'
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TopClasses from "../TopClasses/TopClasses";

const HomePage = () => {
    return (
        <div>
            {/*  */}
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="custom-container mt-20">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-24 sm:gap-12">
                                <div className="sm:w-[50%] md:w-full p-7">
                                    <h5 className="md:text-3xl sm:text-xl font-semibold text-[#000000] md:leading-[3rem] sm:leading-[1rem]">Make your summer day joyful<br />  and full of happiness with our trainer</h5>
                                    <p>In the warmth of the summer sun, join our exceptional trainer who will inspire and guide you on a transformative journey.our trainer will empower you to unlock a summer filled with happiness, paving the way for radiant memories that will last a lifetime.</p>
                                    <button className='bg-[#FFBF23] outline outline-black-2 outline-1 btn mt-4'>Get-Ready</button>
                                </div>
                                <div className="md:w-[550px] sm:w-[300px]">
                                <Lottie animationData={champion} loop={true} />
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide><div className="custom-container mt-20">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-24 sm:gap-12">
                                <div className="sm:w-[50%] md:w-full p-7">
                                    <h5 className="md:text-3xl sm:text-xl font-semibold text-[#000000] md:leading-[3rem] sm:leading-[1rem]">Make your summer day joyful<br />  and full of happiness with our trainer</h5>
                                    <p>In the warmth of the summer sun, join our exceptional trainer who will inspire and guide you on a transformative journey.our trainer will empower you to unlock a summer filled with happiness, paving the way for radiant memories that will last a lifetime.</p>
                                    <button className='bg-[#FFBF23] outline outline-black-2 outline-1 btn mt-4'>Get-Ready</button>
                                </div>
                                <div className="md:w-[650px] sm:w-[300px] ">
                                <Lottie animationData={archery} loop={true} />
                                </div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="custom-container mt-20">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-24 sm:gap-12">
                                <div className="sm:w-[50%] md:w-full p-7">
                                    <h5 className="md:text-3xl sm:text-xl font-semibold text-[#000000] md:leading-[3rem] sm:leading-[1rem]">Make your summer day joyful<br />  and full of happiness with our trainer</h5>
                                    <p>In the warmth of the summer sun, join our exceptional trainer who will inspire and guide you on a transformative journey.our trainer will empower you to unlock a summer filled with happiness, paving the way for radiant memories that will last a lifetime.</p>
                                    <button className='bg-[#FFBF23] outline outline-black-2 outline-1 btn mt-4'>Get-Ready</button>
                                </div>
                                <div className="md:w-[550px] sm:w-[300px]">
                                <Lottie animationData={score} loop={true} />
                                </div>
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </div>

            {/* Our top classes  */}
            <TopClasses />
        </div>
    );
};

export default HomePage;