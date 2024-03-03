import Logo from '../Base/Logo/Logo';
import searchImg from '/search.svg';
import cartImg from '/cart.svg'
import userImg from '/user.svg'
import favoriteImg from '/favorite.svg'
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo-wrapper">
                        <Logo/>
                        <button className="header-catalog">Каталог</button>
                    </div>
                    <form className='header-search' action="#">
                        <input className='header-search-input' placeholder='Война и мир' type="text" />
                        <button className="header-search-button"><img src={searchImg} alt="" /></button>
                    </form>
                    <div className="header-buttons">
                        <a href="#" className="header-buttons-item">
                            <img src={favoriteImg} alt="" />
                            <span>Избранное</span>
                        </a>
                        <a href="#" className="header-buttons-item">
                            <img src={cartImg} alt="" />
                            <span>Корзина</span>
                        </a>
                        <a href="#" className="header-buttons-item">
                            <img src={userImg} alt="" />
                            <span>Имя</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;