import Logo from '../../Base/Logo/Logo';
import './Footer.scss'


function FooterItem() {
    return(
        <nav className="footer-menu">
            <div className="footer-menu-title">Маркетплейс</div>
            <ul className="footer-list">
                <li className="footer-item"><a href="#">О компании</a></li>
                <li className="footer-item"><a href="#">О компании</a></li>
                <li className="footer-item"><a href="#">О компании</a></li>
                <li className="footer-item"><a href="#">О компании</a></li>
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
                     <p className='footer-logo-desc'>Маркетплейс цифровых <br /> товаров.</p>
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