import './Team.scss'
import teamMain from '/team1.png'
import teamMember1 from '/team2.png'
import teamMember2 from '/team3.png'
import teamMember3 from '/team4.png'

export default function Team(){
    return(
        <section className="team">
            <div className="container">
                <div className="team-wrapper">
                    <img src={teamMain} alt="" />
                    <div className="team-text">
                        <h4 className="team-title">Наша команда</h4>
                        <p className="team-desc">Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                        <div className="team-members">
                            <img src={teamMember1} alt="" />
                            <img src={teamMember2} alt="" />
                            <img src={teamMember3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}