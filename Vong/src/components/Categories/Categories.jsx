import Title from "../Base/Title/Title";
import "./Categories.scss";

import Categories_1 from "/categories_man.png";
import Categories_2 from "/categories_pants.png";
import Categories_3 from "/categories_nike.png";
import Categories_4 from "/categories_tshirt.png";

export default function Categories() {
  return (
    <section className="categories">
      <Title title="Готовые решения" />
      <div className="container">
        <div className="categories-wrapper">
          <div class="categories-card">
            <a href="#">
              <img src={Categories_1} alt="" />
              <p>Костюмы</p>
            </a>
          </div>
          <div class="categories-card">
            <a href="#">
              <img src={Categories_2} alt="" />
              <p>Брюки</p>
            </a>
          </div>
          <div class="categories-card">
            <a href="#">
              <img src={Categories_3} alt="" />
              <p>Кроссовки</p>
            </a>
          </div>
          <div class="categories-card">
            <a href="#">
              <img src={Categories_4} alt="" />
              <p>Футболки</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
