import Slide from '../../Base/Slide/Slide'
import './Hero.scss'
import Slide_1 from '/slide_1.webp'
import Slide_2 from '/slide_2.webp'
import Slide_3 from '/slide_3.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';




export default function Hero(){
    return(
     <section id='promotion-id' className="hero xl-container">
     <Swiper
        modules={[Navigation, Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation = {{
            nextEL: '.hero-swiper-button-next',
            prevEL: '.hero-swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><Slide slideImg={Slide_1} slideTitle="Новая коллекция Весна-Лето" slideCost="2900" slideDesc="Осень - это время перемен, и наша новая осенняя коллекция готова вдохнуть свежий ветер в ваш гардероб. Осень - это время перемен, и наша новая осенняя коллекция готова вдохнуть свежий ветер в ваш гардероб."/></SwiperSlide>
        <SwiperSlide><Slide slideImg={Slide_2} slideTitle="Скидки на Бижутерию" slideCost="5200" slideDesc="Не упустите  возможность обновить свой гардероб украшениями, которые подчеркнут вашу индивидуальность Не упустите  возможность обновить свой гардероб украшениями, которые подчеркнут"/></SwiperSlide>
        <SwiperSlide><Slide slideImg={Slide_3} slideTitle="Костюм на заказ" slideCost="13620" slideDesc="Ателье предлагает вам создать идеальный костюм, который будет соответствовать вашим предпочтениям и сидеть как влитой. телье предлагает вам создать идеальный костюм, который будет соответствовать вашим"/></SwiperSlide>
      </Swiper>
        </section>
    )
}


