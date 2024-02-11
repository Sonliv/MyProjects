import './Hero.scss'
import HeroBg from '/hero_bg.webp'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-text">
                        <h2 className="hero-title">Профессиональные темы WordPress и шаблоны сайтов для любого проекта</h2>
                        <p className="hero-desc">Откройте для себя тысячи простых в настройке тем, шаблонов и продуктов CMS, созданных разработчиками мирового класса. Откройте для себя тысячи простых в настройке тем, шаблонов и продуктов CMS, созданных разработчиками мирового класса.</p>
                    </div>
                    <img className='hero-img' src={HeroBg} alt="" />
                </div>
            </div>
        </section>
    );
}
 
export default Hero;