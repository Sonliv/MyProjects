import "./Footer.scss";
import FooterList from "../Base/FooterList/FooterList";
import Social from "../Base/Social/Social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-first">
            <h4><a className="footer-logo" href="#">The <span>Vong</span></a></h4>
            <Social/>
          </div>
          <FooterList
            footerUrl="Навигация"
            footerUrl2="Главная"
            footerUrl3="Категории"
            footerUrl4="Контакты"
          />
          <FooterList
            footerUrl="Навигация"
            footerUrl2="Главная"
            footerUrl3="Категории"
            footerUrl4="Контакты"
          />
          <FooterList
            footerUrl="Навигация"
            footerUrl2="Главная"
            footerUrl3="Категории"
            footerUrl4="Контакты"
          />
          <FooterList
            footerUrl="Навигация"
            footerUrl2="Главная"
            footerUrl3="Категории"
            footerUrl4="Контакты"
          />
        </div>
      </div>
    </footer>
  );
}
