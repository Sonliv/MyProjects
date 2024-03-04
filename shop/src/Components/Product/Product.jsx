import './Produsct.scss'
import yaPlus from '/yaPlus.jpg'
import book from '/book.webp'
import game from '/spider.jpg'
import favorite from '/favorite.svg'


function ProductItem(props){
    return(
        <div className="product-item">
            <div className="product-item-img-wrapper">
              <img className='product-item-img' src={props.cardImg} alt="" />
            </div>
            <h3 className="product-item-title">{props.cardTitle}</h3>
            <p className="product-item-desc">{props.cardDesc} </p>
            <div className="product-item-buttons">
                <button className="product-item-btn">Купить</button>
                <button className="product-item-favorite"><img src={favorite} alt="" /> </button>
            </div>
        </div>
    );
}


const Product = () => {
    return (
        <section className="product">
            <div className="container">
                {/* <ProductRow category="Кинотеатры" />
                <ProductRow category="Электронный книги"/>
                <ProductRow category="Ключи для активации игр"/> */}
                 <div className="product-nav">
                     <h2 className="product-nav-title">Фильмы</h2>
                </div>
                <div className="product-wrapper">
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс+ на 12 месяцев" cardDesc="Персональная подписка Яндекс+"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс+ на 12 месяцев" cardDesc="Персональная подписка Яндекс+"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс+ на 12 месяцев" cardDesc="Персональная подписка Яндекс+"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс+ на 12 месяцев" cardDesc="Персональная подписка Яндекс+"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс+ на 12 месяцев" cardDesc="Персональная подписка Яндекс+"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс+ на 12 месяцев" cardDesc="Персональная подписка Яндекс+"/>
                </div>
                <div className="product-nav">
                     <h2 className="product-nav-title">Электронные книги</h2>
                </div>
                <div className="product-wrapper">
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк"/>
                </div>
                <div className="product-nav">
                     <h2 className="product-nav-title">Игры</h2>
                </div>
                <div className="product-wrapper">
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры"/>
                </div>
            </div>
        </section>
    );
}
 
export default Product;