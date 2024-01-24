import './Uslugi.scss'
import Uslugi_1 from '/uslugi_1.webp'
import Uslugi_2 from '/uslugi_2.webp'
import Uslugi_3 from '/uslugi_3.webp'
import Uslugi_4 from '/uslugi_4.webp'
import Button from '../../Base/Button/Button';

function UslugiItem(props){
    return(
        <section id={props.ahref} className="uslugi">
        <div className="container">
            <div className="uslugi-item">
                <img src={props.imgUslugi} alt="" className="uslugi-img" />
                <div className="uslugi-text">
                    <h3 className="uslugi-title" dangerouslySetInnerHTML={{ __html: props.uslugiTitle }}/>
                    <p className='uslugi-desc'>{props.uslugiDesc}</p>
                    <a href="#Forma" className="uslugu-button">
                    <Button buttonText="Подробнее" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}

function UslugiItemSecond(props){
    return(
        <section id={props.ahref} className="uslugi">
        <div className="container">
            <div className="uslugi-item">
                <div className="uslugi-text">
                    <h3 className="uslugi-title" dangerouslySetInnerHTML={{ __html: props.uslugiTitleSecond }}/>
                    <p className='uslugi-desc'>{props.uslugiDescSecond}</p>
                    <a href="#Forma" className="uslugu-button">
                    <Button buttonText="Подробнее" />
                    </a>
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
        uslugiTitle="ОБ АТЕЛЬЕ И <br /> <span>ПОШИВ ОДЕЖДЫ</span>"
        uslugiDesc ="Наше Ателье – это творческое пространство, где опытные мастера превращают идеи в уникальные наряды. В этом уютном месте сочетаются традиционные навыки и современные тенденции моды, чтобы создать стильную и комфортную одежду."
        imgUslugi={Uslugi_1}
        ahref="poshiv-id"
        />
        <UslugiItemSecond
        uslugiTitleSecond="УСЛУГА ПО <br /> <span>ПОЧИНКИ МОЛНИЙ</span>"
        uslugiDescSecond ="Починка молний – это умение восстановить функциональность и внешний вид наших любимых вещей. В мастерской специалисты внимательно изучают проблему, заменяют изношенные детали и тщательно настраивают замки для гарантированной надежности. Такая забота продлевает срок службы одежды, сохраняя ее стиль и комфорт для владельца."
        imgUslugiSecond={Uslugi_2}
        ahref="zip-id"
        />
        <UslugiItem 
        uslugiTitle="ИНДИВИДУАЛЬНЫЙ <br /> <span>ПОДБОР РАЗМЕРА</span>"
        uslugiDesc ="Мы персонлаьно подбираем  размеры для создания одежды, максимально соответствующей уникальным параметрам каждого клиента. В ателье специалисты уделяют особое внимание измерениям."
        imgUslugi={Uslugi_3}
        ahref="size-id"
        />
        <UslugiItemSecond
        uslugiTitleSecond="ИНДИВИДУАЛЬНЫЙ <br /> <span>ПОДБОР МАТЕРИАЛОВ</span>"
        uslugiDescSecond ="В ателье мы предоставляем нашим клиентам высочайшее качество, начиная с выбора материалов. Все изделия создаются с использованием тщательно подобранных и высококачественных материалов, чтобы обеспечить не только эстетическую привлекательность, но и долговечность каждой вещи. Наше стремление к использованию премиум-тканей гарантирует, что каждая деталь отражает наше стремление к безупречному стилю и удовлетворению потребностей самых требовательных клиентов."
        imgUslugiSecond={Uslugi_4}
        ahref="materials-id"
        />
        </>
    );
}
 
export default Uslugi;