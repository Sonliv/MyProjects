import './Hero.scss'
import banner from '/banner.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <Swiper className='banner-swiper'
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true} modules={[Navigation, Autoplay]}
                    pagination={{
                        clickable: true,
                      }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    >
                    <SwiperSlide><div className="hero-banner-wrapper"><img className='hero-banner' src={banner} alt="" /></div></SwiperSlide>
                    <SwiperSlide><img className='hero-banner' src={banner} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='hero-banner' src={banner} alt="" /></SwiperSlide>
                 </Swiper>
            </div>
        </section>
    );
}
 
export default Hero;



