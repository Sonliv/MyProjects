import './Slide.scss'
import Button from '../Button/Button'

export default function Slide(props){
    return(
        <div className='slide' >
            <div className='slide-info'>
                <h3 className="slide-title">{props.slideTitle}</h3>
                <p className="slide-cost">От <span>{props.slideCost}</span> рублей</p>
                <p className="slide-desc">{props.slideDesc}</p>
                {/* <button className="slide-btn">Купить</button> */}
                <Button buttonText="Подробнее" />
            </div>
            <img src={props.slideImg} alt="" />
        </div>
    )
}
