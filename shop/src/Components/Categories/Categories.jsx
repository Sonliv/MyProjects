import './Categories.scss'
import watch from '/watch.png'
import play from '/play.png'
import read from '/read.png'
import listen from '/listen.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



function CategoryCard(props){
    return(
        <div className="categories-item">
            <h4 className="categories-item-title">{props.title}</h4>
            <p className="categories-item-desc">{props.desc}</p>
            <img className='categories-item-img' src={props.categoryImg} alt="" />
        </div>
    )
}

const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                 {/* <div className="categories-wrapper">
                    <CategoryCard title="Что посмотреть?" desc="Лучшие подписки по выгодным ценам" categoryImg={watch} />
                    <CategoryCard title="Во что поиграть?" desc="Ключи, коды активации для ваших игр" categoryImg={play} />
                    <CategoryCard title="Что почитать?" desc="Электронные книги, которые любят наши читатели" categoryImg={read} />
                    <CategoryCard title="Что Послушать?" desc="Топ подборка от наших слушателей аудиокниг" categoryImg={listen} />
                </div> */}
                <Swiper className='categories-swiper'
                    spaceBetween={20}
                    slidesPerView={1.16}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                      }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        350: {
                            slidesPerView: 1.16,
                          },
                          400: {
                            slidesPerView: 1.3,
                          },
                          450: {
                            slidesPerView: 1.5,
                          },
                          500: {
                            slidesPerView: 1.7,
                          },
                          550: {
                            slidesPerView: 1.9,
                          },
                          670: {
                            slidesPerView: 2.2,
                          },
                          750: {
                            slidesPerView: 2.5,
                          },
                          900: {
                            slidesPerView: 2.7,
                          },
                          960: {
                            slidesPerView: 3.3,
                          },
                          1060: {
                            slidesPerView: 3.5,
                          },
                          1160: {
                            slidesPerView: 3.5,
                          },
                          1230: {
                            slidesPerView: 4,
                          },
                      }}
                    >
                    <SwiperSlide  className='categories-slide'><CategoryCard title="Что посмотреть?" desc="Лучшие подписки по выгодным ценам" categoryImg={watch} /></SwiperSlide>
                    <SwiperSlide  className='categories-slide'><CategoryCard title="Во что поиграть?" desc="Ключи, коды активации для ваших игр" categoryImg={play} /></SwiperSlide>
                    <SwiperSlide  className='categories-slide'><CategoryCard title="Что почитать?" desc="Электронные книги, которые любят наши читатели" categoryImg={read} /></SwiperSlide>
                    <SwiperSlide  className='categories-slide'><CategoryCard title="Что Послушать?" desc="Топ подборка от наших слушателей аудиокниг" categoryImg={listen} /></SwiperSlide>
                 </Swiper>
            </div>
        </section>
    );
}
 
export default Categories;