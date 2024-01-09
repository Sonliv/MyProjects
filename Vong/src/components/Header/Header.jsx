import './Header.scss'
import HeaderButtons from '../Base/HeaderButtons/HeaderButtons'
import BurgerButton from '../Base/BurgerButton/BurgerButton'
import Logo from '../Base/Logo/Logo'



export default function Header(){

    return(
        <header className="header xl-container">
            <div className="header-top">
                <HeaderButtons firstItem={<ion-icon name="logo-vk"></ion-icon>} secondItem={<ion-icon name="logo-facebook"></ion-icon>} thirdItem={<ion-icon name="logo-instagram"></ion-icon>} fourthItem={<ion-icon name="logo-whatsapp"></ion-icon>} />
            <a href="#">
                <BurgerButton/>
            </a>
            </div>
            <div className="container">
            <div className="header-bottom header-center">
                <Logo/>
                <HeaderButtons firstItem="Категории" secondItem="Пошив" thirdItem="О Нас" fourthItem="Контакты" />
            </div>
            </div>
        </header>
    )
}