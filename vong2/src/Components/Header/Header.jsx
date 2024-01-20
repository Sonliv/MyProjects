import './Header.scss'
import BurgerBtn from '../../Base/BurgerBtn/BurgerBtn';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="#" className="logo animated-text">The <span>Vong</span></a>
                    <nav>
                        <ul className="header-list">
                            <li className="header-list-item animated-text"><a href="#">Категории</a></li>
                            <li className="header-list-item animated-text"><a href="#">Пошив</a></li>
                            <li className="header-list-item animated-text"><a href="#">О Нас</a></li>
                            <li className="header-list-item animated-text"><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                    <div className='header-info' >
                        <span>+7 (961) 831 20 11</span>
                        <a className="adres animated-text" href="#">Краснодар, ул. Красная, 31</a>
                    </div>
                    <BurgerBtn/>
                </div>
            </div>
        </header>
    );
}
 
export default Header;