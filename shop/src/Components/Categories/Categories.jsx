import './Categories.scss'
import watch from '/watch.webp'
import play from '/play.webp'
import read from '/read.webp'
import listen from '/listen.webp'

function CategoryCard(props){
    return(
        <div className="categories-item">
            <h4 className="categories-item-title">{props.title}</h4>
            <p className="categories-item-desc">{props.desc}</p>
            <img src={props.categoryImg} alt="" />
        </div>
    )
}

const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <CategoryCard title="Что посмотреть?" desc="Лучшие подписки по выгодным ценам" categoryImg={watch} />
                    <CategoryCard title="Во что поиграть?" desc="Ключи, коды активации для ваших игр" categoryImg={play} />
                    <CategoryCard title="Что почитать?" desc="Электронные книги, которые любят наши читатели" categoryImg={read} />
                    <CategoryCard title="Что Послушать?" desc="Топ подборка от наших слушателей аудиокниг" categoryImg={listen} />
                </div>
            </div>
        </section>
    );
}
 
export default Categories;