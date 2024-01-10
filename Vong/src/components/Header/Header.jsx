import "./Header.scss";
import HeaderButtons from "../Base/HeaderButtons/HeaderButtons";
import BurgerButton from "../Base/BurgerButton/BurgerButton";
import Logo from "../Base/Logo/Logo";
import Social from "../Base/Social/Social";

export default function Header() {
  return (
    <header className="header xl-container">
      <div className="header-top">
        {/* <Social /> */}
        <a href="#">+7 961 832 41 12</a>
        <a href="#">
          <BurgerButton />
        </a>
      </div>
      <div className="container">
        <div className="header-bottom header-center">
          <Logo />
          <HeaderButtons
            firstItem="Категории"
            secondItem="Пошив"
            thirdItem="О Нас"
            fourthItem="Контакты"
          />
        </div>
      </div>
    </header>
  );
}
