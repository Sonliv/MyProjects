import './Team.scss'
import team1 from '/team1.png'
import team2 from '/team2.png'
import team3 from '/team3.png'
import team4 from '/team4.png'
export default function Team(){
    return(
        <section className="team">
            <div className="container">
                <div className="team-wrapper">
                <img src={team1} alt="" />
                <div className="team-text">
                    <h4 className="team-title">Наша команда</h4>
                    <p className="team-desc">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                    <div className="team-imgs">
                    <img src={team2} alt="" />
                    <img src={team3} alt="" />
                    <img src={team4} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}