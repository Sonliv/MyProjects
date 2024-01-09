import './SlideFirst.scss'
import Slide_1 from '/slide_1.png'
export default function SlideFirst(){
    return(
        <div className='slide' >
            <div className='slide-info'>
                <h3 className="slide-title">Новая коллекция Весна-Лето</h3>
                <p className="slide-cost">От <span>2999</span> рублей</p>
                <p className="slide-desc">Осень - это время перемен, и наша новая осенняя коллекция готова вдохнуть свежий ветер в ваш гардероб.Осень - это время перемен, и наша новая осенняя коллекция готова вдохнуть свежий ветер в ваш гардероб.</p>
                <button className="slide-btn">Купить</button>
            </div>
            <img src={Slide_1} alt="" />
        </div>
    )
}
