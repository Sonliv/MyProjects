import "./Categories.scss";

import Categories_1 from "/categories_man.webp";
import Categories_2 from "/categories_pants.webp";
import Categories_3 from "/categories_nike.webp";
import Categories_4 from "/categories_tshirt.webp";


function СategoriesCard(props){
  return(
    <div class="categories-card">
    <a href="#Forma">
      <img src={props.imgCard} alt="" />
      <p>{props.titleCard}</p>
    </a>
  </div>
  )
}

export default function Categories() {
  return (
    <section id="categories-id" className="categories">
      <h3 className="categories-title">Отреставрированная Одежда</h3>
      <div className="container">
        <div className="categories-wrapper">
        <СategoriesCard titleCard="Костюмы" imgCard={Categories_1} />
        <СategoriesCard titleCard="Брюки" imgCard={Categories_2} />
        <СategoriesCard titleCard="Кроссовки" imgCard={Categories_3} />
        <СategoriesCard titleCard="Футболки" imgCard={Categories_4} />
        </div>
      </div>
    </section>
  );
}
