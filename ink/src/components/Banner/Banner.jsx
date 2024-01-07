import french from '/french.svg'
import './Banner.scss'
export default function Banner(){
    return(
        <section className="banner">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="banner-title">
                      <img src={french} alt="" /> <h3 >Новая коллекция французских авторов</h3>
                    </div>
                    <p className="banner-text">Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
                    <p className="banner-text">Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
                <button className="banner-button">Ознакомиться</button>
                </div>
            </div>
        </section>
    )
}