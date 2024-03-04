import Logo from '../Base/Logo/Logo';
import searchImg from '/search.svg';
import cartImg from '/cart.svg'
import userImg from '/user.svg'
import favoriteImg from '/favorite.svg'
import './Header.scss';
import React, {useState, useRef} from 'react';
import close from '/close.png'
//cart
import game from '/spider.jpg'
import book from '/book.webp'
import yaPlus from '/yaPlus.jpg'

function CartItem(props){
    return(
        <div className="cart-item">
        <img src={props.cartItemImg} alt="" className="cart-item-img" />
        <div className="cart-item-text">
            <p className="cart-item-title">{props.title}</p>
            <button className="cart-item-category">{props.category}</button>
            <button className="cart-item-btn">Убрать</button>
        </div>
        <span className="cart-item-cost">5000 &#8381;</span>
    </div>
    )
}


const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

     //cart
    const toggleMenu = () => {
    setOpen(!isOpen);
    };


    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo-wrapper">
                        <Logo/>
                        <button className="header-catalog">Каталог</button>
                    </div>
                    <form className='header-search' action="#">
                        <input className='header-search-input' placeholder='Яндекс +' type="text" />
                        <button className="header-search-button"><img src={searchImg} alt="" /></button>
                    </form>
                    <div className="header-buttons">
                        <a href="#" className="header-buttons-item">
                            <img src={favoriteImg} alt="" />
                            <span>Избранное</span>
                        </a>
                        <a onClick={toggleMenu} href="#" className="header-buttons-item">
                            <img src={cartImg} alt="" />
                            <span>Корзина</span>
                        </a>
                        <a href="#" className="header-buttons-item">
                            <img src={userImg} alt="" />
                            <span>Имя</span>
                        </a>
                    </div>
                </div>
                <div className="cart" ref={menuRef} style={{ right: isOpen ? '0' : '-475px' }}>
                    <div className="cart-wrapper">
                        <div className="cart-wrapper-row">
                            <span>Корзина (3)</span>
                            <img onClick={toggleMenu} className='cart-wrapper-close' src={close} alt="" />
                        </div>
                        <CartItem cartItemImg={game} title="Spider-man" category="Игры"/>
                        <CartItem cartItemImg={book} title="Триумфальная арка" category="Книги"/>
                        <CartItem cartItemImg={yaPlus} title="Яндекс+ на 12 месяцев" category="Фильмы"/>
                        <button className="cart-total">Оплатить 8240 &#8381;</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;