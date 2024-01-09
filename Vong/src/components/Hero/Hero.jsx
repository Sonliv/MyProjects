import SlideFirst from '../Base/SlideFirst/SlideFirst'
import './Hero.scss'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';




export default function Hero(){
    return(
     <section className="hero xl-container">
     <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation = {{
            nextEL: '.hero-swiper-button-next',
            prevEL: '.hero-swiper-button-prev',
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><SlideFirst/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide><SlideFirst/></SwiperSlide>
      </Swiper>
        </section>
    )
}


