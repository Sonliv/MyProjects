import './Uslugi.scss'
import Uslugi_1 from '/uslugi_1.webp'
import Uslugi_2 from '/uslugi_2.webp'
import Uslugi_3 from '/uslugi_3.webp'
import Uslugi_4 from '/uslugi_4.webp'
import Button from '../../Base/Button/Button';

function UslugiItem(props){
    return(
        <section className="uslugi">
        <div className="container">
            <div className="uslugi-item">
                <img src={props.imgUslugi} alt="" className="uslugi-img" />
                <div className="uslugi-text">
                    <h3 className="uslugi-title" dangerouslySetInnerHTML={{ __html: props.uslugiTitle }}/>
                    <p className='uslugi-desc'>{props.uslugiDesc}</p>
                    <div className="uslugu-button">
                    <Button buttonText="Подробнее" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

function UslugiItemSecond(props){
    return(
        <section className="uslugi">
        <div className="container">
            <div className="uslugi-item">
                <div className="uslugi-text">
                    <h3 className="uslugi-title" dangerouslySetInnerHTML={{ __html: props.uslugiTitleSecond }}/>
                    <p className='uslugi-desc'>{props.uslugiDescSecond}</p>
                    <div className="uslugu-button">
                        <Button buttonText="Подробнее" />
                    </div>
                </div>
                <img src={props.imgUslugiSecond} alt="" className="uslugi-img" />
            </div>
        </div>
    </section>
    )
}

const Uslugi = () => {
    return (
        <>
        <UslugiItem 
        uslugiTitle="ИНДИВИДУАЛЬНЫЙ <br /> <span>ПОШИВ ОДЕЖДЫ</span>"
        uslugiDesc ="Создание эксклюзивной одежды по индивидуальному дизайну, с учетом всех пожеланий."
        imgUslugi={Uslugi_1}
        />
        <UslugiItemSecond
        uslugiTitleSecond="ИНДИВИДУАЛЬНЫЙ <br /> <span>ПОШИВ ОДЕЖДЫ</span>"
        uslugiDescSecond ="Создание эксклюзивной одежды по индивидуальному дизайну, с учетом всех пожеланий."
        imgUslugiSecond={Uslugi_2}
        />
        <UslugiItem 
        uslugiTitle="ИНДИВИДУАЛЬНЫЙ <br /> <span>ПОШИВ ОДЕЖДЫ</span>"
        uslugiDesc ="Создание эксклюзивной одежды по индивидуальному дизайну, с учетом всех пожеланий."
        imgUslugi={Uslugi_3}
        />
        <UslugiItemSecond
        uslugiTitleSecond="ИНДИВИДУАЛЬНЫЙ <br /> <span>ПОШИВ ОДЕЖДЫ</span>"
        uslugiDescSecond ="Создание эксклюзивной одежды по индивидуальному дизайну, с учетом всех пожеланий."
        imgUslugiSecond={Uslugi_4}
        />
        </>
    );
}
 
export default Uslugi;