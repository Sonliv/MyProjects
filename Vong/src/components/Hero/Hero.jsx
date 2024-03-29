import SlideFirst from '../Base/SlideFirst/SlideFirst'
import './Hero.scss'
import Slide_1 from '/slide_1.png'
import Slide_2 from '/slide_2.png'
import Slide_3 from '/slide_3.png'

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
        <SwiperSlide><SlideFirst slideImg={Slide_1} slideTitle="Новая коллекция Весна-Лето" slideCost="2900" slideDesc="Осень - это время перемен, и наша новая осенняя коллекция готова вдохнуть свежий ветер в ваш гардероб. Осень - это время перемен, и наша новая осенняя коллекция готова вдохнуть свежий ветер в ваш гардероб."/></SwiperSlide>
        <SwiperSlide><SlideFirst slideImg={Slide_2} slideTitle="Скидки на Бижутерию" slideCost="5200" slideDesc="Не упустите  возможность обновить свой гардероб украшениями, которые подчеркнут вашу индивидуальность Не упустите  возможность обновить свой гардероб украшениями, которые подчеркнут"/></SwiperSlide>
        <SwiperSlide><SlideFirst slideImg={Slide_3} slideTitle="Костюм на заказ" slideCost="13620" slideDesc="Ателье предлагает вам создать идеальный костюм, который будет соответствовать вашим предпочтениям и сидеть как влитой. телье предлагает вам создать идеальный костюм, который будет соответствовать вашим"/></SwiperSlide>
      </Swiper>
        </section>
    )
}


