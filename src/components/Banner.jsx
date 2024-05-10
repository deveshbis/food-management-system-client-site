import bannerImg1 from '../assets/banner/banner1.jpg';
import bannerImg2 from '../assets/banner/banner2.webp';
import bannerImg3 from '../assets/banner/banner3.jpg'
import bannerImg4 from '../assets/banner/banner4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../components/SliderCSS/style.css';
import { Navigation } from 'swiper/modules';
 
const Banner = () => {
    return (
        <div className='mt-20 px-2'>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded-2xl"
                style={{ height: '35rem' }} 
            >
                <SwiperSlide><img src={bannerImg1} alt="Banner 1" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg2} alt="Banner 2" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg3} alt="Banner 3" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={bannerImg4} alt="Banner 4" className="w-full h-full object-cover" /></SwiperSlide>
            </Swiper>

        </div>

    );
};

export default Banner;