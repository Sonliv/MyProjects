import Logo from '../../Base/Logo/Logo';
import Cart from '/cart.png';
import Favorite from '/favorite.png';
import User from '/user.png';
import BottomArrow from '/bottom-arrow.svg';
import Search from '/search2.svg';
import Close from '/close.svg';
import ProuctImg from '/productImg.png'
import DropDownIcons from '/drop_down_icon.png'
import './header.scss';
import React, { useState, useRef } from 'react';


const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const catalogRef = useRef(null);
    const [openDropDown, setDropDown] = useState(false)

    //cart
    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    //drop down

    const toggleDropDown = () => {
        setDropDown(!openDropDown);
    }

    //drop down
    function DropDownList(){
        return(
            <div style= {{ display: openDropDown ? 'block' : 'none' }} className='header-drop-down-list'>
                <ul className="header-drop-down">
                    <li className="header-drop-down-item"><a href="#"><img src={DropDownIcons} alt="" />  <span>Иконки</span></a></li>
                    <li className="header-drop-down-item"><a href="#"><img src={DropDownIcons} alt="" />  <span>PHP Скрипты</span></a></li>
                    <li className="header-drop-down-item"><a href="#"><img src={DropDownIcons} alt="" />  <span>Видео</span></a></li>
                    <li className="header-drop-down-item"><a href="#"><img src={DropDownIcons} alt="" />  <span>Шаблоны Eccomers</span></a></li>
                    <li className="header-drop-down-item"><a href="#"><img src={DropDownIcons} alt="" />  <span>Шаблоны WordPress</span></a></li>
                </ul>
            </div>
        )
    }

    function CartItem(){
        return(
            <div className="cart-item">
            <img src={ProuctImg} alt="" className="cart-item-img" />
            <div className="cart-item-info">
                <span className="cart-item-title"><a href="#">Универсальные иконки 1000+</a></span>
                <span className="cart-item-category"><a href="#">Иконки</a></span>
                <span className="cart-item-remove">Убрать</span>
            </div>
            <span className="cart-item-cost">1700 ₽</span>
        </div>
        )
    }
    

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-nav">
                        <Logo />
                        <button onClick={toggleDropDown} className="header-catalog-btn">
                            <span>Каталог</span> <img ref={catalogRef}  className={openDropDown ? 'header-catalog-btn-img' : ''} src={BottomArrow} alt="" />
                        </button>
                        <DropDownList/>
                    </div>
                    <form action="#" className="header-search">
                        <input placeholder="Искать товары" type="text" className="search" />
                        <button type="submit" className="search-btn">
                            <img className="search-img" src={Search} alt="" />
                        </button>
                    </form>
                    <div className="header-buttons">
                        <button className="header-btn">
                            <img src={Favorite} alt="" />
                            <span>Избранное</span>
                        </button>
                        <button onClick={toggleMenu} className="header-btn">
                            <img src={Cart} alt="" />
                            <span>Корзина</span>
                        </button>
                        <button className="header-btn">
                            <img src={User} alt="" />
                            <span>Дмитрий</span>
                        </button>
                    </div>
                </div>
                {/* корзина */}
                <div className="cart-menu" ref={menuRef} style={{ right: isOpen ? '0' : '-400px' }} >
                    <div className="cart-wrapper">
                        <div className="cart-top">
                            <span className="cart-title">Корзина (3) </span>
                            <img onClick={toggleMenu} src={Close} alt="" className="cart-close" />
                        </div>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <div className="cart-total">
                            <div className="cart-total-text">
                                <span className="cart-total-desc">Итог</span>
                                <span className="cart-total-sum">5100 ₽</span>
                            </div>
                            <button className="cart-total-btn">Оплатить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;