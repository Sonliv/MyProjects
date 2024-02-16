import Logo from '../../Base/Logo/Logo';
import './Footer.scss'
import ArrowDown from '/arrow-down.png'

import React, {useState, useRef} from 'react';


    //accordion

    function FooterItem() {

        // ref для arrow
        const arrowImgRef = useRef(null);

        //is open = переменная сосотояния аккордиона 
        //setIsOpen для измненеия значения
        const [isOpen, setIsOpen] = useState(false);

        // Получение списка из  DOM
        const listRef = useRef(null);

        //togle (переключение, делает проитивоположное значние !isOpen)
        const toggleAccordion = () => {
            setIsOpen(!isOpen);

       // Переключаем класс при открытии/закрытии аккордеона
       arrowImgRef.current.classList.toggle('rotated');
        }


        // Если isOpen true то возвращается высота списка, иначе возвращается 0
        const getHeight = () => {
            return isOpen ? `${listRef.current.scrollHeight}px` : '0' ;
        }


    return(
        <nav className="footer-menu">
            <div className="footer-menu-title" onClick={toggleAccordion} >
                <span>Маркетплейс</span>
                <img ref={arrowImgRef} className={isOpen ? 'footer-menu-arrow rotated' : 'footer-menu-arrow rotated-back'} src={ArrowDown} alt="" />
            </div>
            <ul className="footer-list" ref={listRef} style={{maxHeight: getHeight()}}  >
                <li className="footer-item"><a href="#">О компании</a></li>
                <li className="footer-item"><a href="#">О продукте</a></li>
                <li className="footer-item"><a href="#">Контакты</a></li>
                <li className="footer-item"><a href="#">Помощь</a></li>
            </ul>
         </nav>      
    )
}


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo">
                     <Logo/>
                     <p className='footer-logo-desc'>Маркетплейс цифровых  товаров.</p>
                    </div>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;