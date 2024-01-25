import React, { useState } from 'react';
import './Header.scss';
import BurgerBtn from '../../Base/BurgerBtn/BurgerBtn';
import Logo from '../../Base/Logo/Logo';
import Number from '../../Base/Number/Number';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header id='header-id' className="header">
            <div className="container">
                <div className="header-wrapper">
                    <Logo />
                    <nav>
                        <ul className={`header-list ${isOpen ? "header-list-active" : ""}`}>
                            <li className="header-list-item animated-text"><a href="#categories-id">Категории</a></li>
                            <li className="header-list-item animated-text"><a href="#poshiv-id">Пошив</a></li>
                            <li className="header-list-item animated-text"><a href="#poshiv-id">О нас</a></li>
                            <li className="header-list-item animated-text"><a href="#Forma">Контакты</a></li>
                        </ul>
                    </nav>
                    <Number />
                    <BurgerBtn isOpen={isOpen} setOpen={setOpen} />
                </div>
            </div>
        </header>
    );
}

export default Header;
