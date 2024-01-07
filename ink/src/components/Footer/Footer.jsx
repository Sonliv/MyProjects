import Logotype from "../Logotype/Logotype"
import Youtube from '/youtube.svg'
import Inst from '/inst.svg'
import Facebook from '/facebook.svg'
import './Footer.scss'
import FooterList from "../FooterList/FooterList"


export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                <div className="footer-nav">
                <div className="footer-contacts">
                    <Logotype/>
                    <div className="footer-contacts-wrapper">
                    <p className="footer-number">+7 (999) 543-54-54</p>
                    <p className="footer-help">Мастерская</p>
                    </div>
                </div>
                <div className="footer-info">
                <FooterList footerTitle='Репродукции' footerItem1='Франция' footerItem2='Германия' footerItem3='Англия' />
                <FooterList footerTitle='Новинки'footerItem1='2021' footerItem2='2020' />
                <FooterList footerTitle='О нас' footerItem1='Художники' footerItem2='Менеджеры' />
                </div>
                </div>
                <div className="footer-social">
                    <div className="footer-icons">
                        <a href="#"><img src={Facebook} alt="" /></a>
                        <a href="#"><img src={Inst} alt="" /></a>
                        <a href="#"><img src={Youtube} alt="" /></a>
                    </div>
                    <p className="footer-social-text">Ink. House ®</p>
                    <p className="footer-social-text">All rights reserved</p>
                </div>
                </div>
            </div>
        </footer>
    )
}