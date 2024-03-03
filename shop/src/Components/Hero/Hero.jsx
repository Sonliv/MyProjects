import './Hero.scss'
import test from '/test.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-text">
                        <h2 className="hero-text-title">Маркетплейс цифровых товаров</h2>
                        <p className="hero-text-desc">Виртуальные товары с моментальной доставкой Виртуальные товары с моментальной доставкой Виртуальные товары с моментальной доставкой</p>
                    </div>
                    <div className="hero-img">
                        <img src={test} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;