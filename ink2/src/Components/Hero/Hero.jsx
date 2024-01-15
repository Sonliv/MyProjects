import './Hero.scss'
import HeroImg from '/hero.png'
import Button from '../../BaseComponents/Button/Button'

export default function Hero(){
    return(
        <section className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <img className='hero-img' src={HeroImg} alt="" />
                    <div className="hero-text">
                        <h2 className="hero-title">Реплики картин от <span>Ink. House</span> </h2>
                        <p className="hero-desc">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                        <Button buttonText="Продукция" />
                    </div>
                </div>
            </div>
        </section>
    )
}