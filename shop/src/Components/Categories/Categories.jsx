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
                    spaceBetween={10}
                    slidesPerView={3.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                      }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    >
                        <div className="categories-wrapper">
                    <SwiperSlide><CategoryCard title="Что посмотреть?" desc="Лучшие подписки по выгодным ценам" categoryImg={watch} /></SwiperSlide>
                    <SwiperSlide><CategoryCard title="Во что поиграть?" desc="Ключи, коды активации для ваших игр" categoryImg={play} /></SwiperSlide>
                    <SwiperSlide><CategoryCard title="Что почитать?" desc="Электронные книги, которые любят наши читатели" categoryImg={read} /></SwiperSlide>
                    <SwiperSlide><CategoryCard title="Что Послушать?" desc="Топ подборка от наших слушателей аудиокниг" categoryImg={listen} /></SwiperSlide>
                        </div>
                 </Swiper>
            </div>
        </section>
    );
}
 
export default Categories;