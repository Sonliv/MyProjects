import Logo from '../../Base/Logo/Logo';
import Number from '../../Base/Number/Number';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container df">
                <div className="footer-info">
                    <Logo/>
                    <Number/>
                </div>
                <ul className="footer-list">
                    <li className="footer-item"><a href="#header-id">Главная</a></li>
                    <li className="footer-item"><a href="#materials-id">Материалы</a></li>
                    <li className="footer-item"><a href="#Forma">Заказать пошив</a></li>
                    <li className="footer-item"><a href="#categories-id">Готовые решения</a></li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-item"><a href="#poshiv-id">О Нас</a></li>
                    <li className="footer-item"><a href="#header-id">Акции</a></li>
                    <li className="footer-item"><a href="#zip-id">Починка молнии</a></li>
                    <li className="footer-item"><a href="#size-id">Подбор размера</a></li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;