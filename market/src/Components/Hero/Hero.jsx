import './Hero.scss'
import HeroBg from '/hero_bg.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-text">
                        <h2 className="hero-title">Профессиональные шаблоны сайтов и решения для любого проекта</h2>
                        <p className="hero-desc">Откройте для себя тысячи простых в настройке тем, шаблонов и продуктов CMS. Ищете вдохновение для вашего проекта? UI наборы, представленные на нашем сайте, помогут вам создать неповторимый дизайн и выделиться из толпы.</p>
                    </div>
                    <img className='hero-img' src={HeroBg} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default Hero;