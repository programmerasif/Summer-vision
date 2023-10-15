import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "lottie-react";
import champion from '../../../assets/69354-olympic-games-2021-victory-player.json'
import score from '../../../assets/47638-warmup.json'
import archery from '../../../assets/70669-olympics-2021-archery-women.json'
import { Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";
import './Banner.css'

const Banner = () => {
    return (
        <div className="BG-img">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="custom-container sm:mt-5 md:mt-24 xl:mt-32">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-24 sm:gap-12 mx-auto">
                                <div className="sm:w-[50%] md:w-full p-7 mt-20">
                                <Fade>    <h5 className="md:text-xl xl:text-3xl  font-semibold text-[#000000] xl:leading-[3rem] sm:leading-[1rem]">Make your summer day joyful<br />  and full of happiness with our trainer</h5> </Fade>
                                <Fade> <p className="text-xs md:text-xl">In the warmth of the summer sun, join our exceptional trainer who will inspire and guide you on a transformative journey.our trainer will empower you to unlock a summer filled with happiness, paving the way for radiant memories that will last a lifetime.</p> </Fade>
                                    <button className='primary-button mt-5'>Get-Ready</button>
                                </div>
                                <div className="xl:w-[550px] md:w-[500px] lg:w-[400px] sm:w-[200px]">
                                <Lottie animationData={champion} loop={true} />
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide><div className="custom-container mt-20">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center md:gap-24 sm:gap-12 mx-auto">
                                <div className="sm:w-[50%] md:w-full p-7">
                                <Fade><h5 className="md:text-xl xl:text-3xl  font-semibold text-[#000000] xl:leading-[3rem] sm:leading-[1rem]">Make your summer day joyful<br />  and full of happiness with our trainer</h5> </Fade>
                                <Fade> <p className="text-xs md:text-xl">In the warmth of the summer sun, join our exceptional trainer who will inspire and guide you on a transformative journey.our trainer will empower you to unlock a summer filled with happiness, paving the way for radiant memories that will last a lifetime.</p> </Fade>
                                    <button className='primary-button mt-5'>Get-Ready</button>
                                </div>
                                <div className="xl:w-[550px] md:w-[500px] lg:w-[400px] sm:w-[200px]">
                                <Lottie animationData={archery} loop={true} />
                                </div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="custom-container mt-20">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center md:gap-24 sm:gap-12 mx-auto">
                                <div className="sm:w-[50%] md:w-full p-7">
                                <Fade>    <h5 className="md:text-xl xl:text-3xl  font-semibold text-[#000000] xl:leading-[3rem] sm:leading-[1rem]">Make your summer day joyful<br />  and full of happiness with our trainer</h5> </Fade>
                                <Fade> <p className="text-xs md:text-xl">In the warmth of the summer sun, join our exceptional trainer who will inspire and guide you on a transformative journey.our trainer will empower you to unlock a summer filled with happiness, paving the way for radiant memories that will last a lifetime.</p> </Fade>
                                    <button className='primary-button mt-5'>Get-Ready</button>
                                </div>
                                <div className="xl:w-[550px] md:w-[500px] lg:w-[400px] sm:w-[200px]">
                                <Lottie animationData={score} loop={true} />
                                </div>
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </div>
    );
};

export default Banner;