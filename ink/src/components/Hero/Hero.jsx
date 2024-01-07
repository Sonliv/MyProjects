import './Hero.scss'
import hero from '/hero.png'
export default function Hero(){
    return(
        <div className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <img src={hero} alt="" />
                    <div className="hero-text">
                        <h2 className="hero-title">Реплики картин от <span>Ink. House</span></h2>
                        <p className="hero-description">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                        <button className="hero-button">Продукция</button>
                    </div>
                </div>
            </div>
        </div>
    )
}