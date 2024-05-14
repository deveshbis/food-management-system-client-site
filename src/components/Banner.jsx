// import bannerImg1 from '../assets/banner/banner1.jpg';
// import bannerImg2 from '../assets/banner/banner2.webp';
// import bannerImg3 from '../assets/banner/banner3.jpg'
// import bannerImg4 from '../assets/banner/banner4.jpg'

import { Link } from "react-router-dom";



// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import '../components/SliderCSS/style.css';
// import { Navigation } from 'swiper/modules';

// const Banner = () => {
//     return (
//         <div className='mt-20 px-2'>
//             <Swiper
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="mySwiper rounded-2xl"
//                 style={{ height: '35rem' }} 
//             >
//                 <SwiperSlide><img src={bannerImg1} alt="Banner 1" className="w-full lg:h-full md:h-[600px] h-[400px] object-cover" /></SwiperSlide>
//                 <SwiperSlide><img src={bannerImg2} alt="Banner 2" className="w-full lg:h-full md:h-[600px] h-[400px] object-cover" /></SwiperSlide>
//                 <SwiperSlide><img src={bannerImg3} alt="Banner 3" className="w-full lg:h-full md:h-[600px] h-[400px] object-cover" /></SwiperSlide>
//                 <SwiperSlide><img src={bannerImg4} alt="Banner 4" className="w-full lg:h-full md:h-[600px] h-[400px] object-cover" /></SwiperSlide>
//             </Swiper>

//         </div>

//     );
// };

// export default Banner;




const Banner = () => {
    return (
        <div className='mt-20 px-2'>

            <section
                className="relative bg-[url(https://i.ibb.co/ggVD7sp/banner.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700"> Delicious Food. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed lg:text-white lg:bg-black lg:rounded-xl lg:p-5">
                        Browse our diverse selection of fresh produce, pantry staples, and gourmet treats to elevate your culinary experience at home.

                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to= '/availableFoods'
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </Link>

                            <Link to='/learnMore'
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Banner;