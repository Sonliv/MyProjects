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
            <p className="product-item-desc">{props.cardDesc}</p>
            <p className="product-item-cost">{props.cardCost}</p>
            {/* <div className="product-item-buttons">
                <button className="product-item-btn">Купить</button>
                <button className="product-item-favorite"><img src={favorite} alt="" /> </button>
            </div> */}
            <button className="product-item-btn">В корзину</button>
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
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс плюс на год" cardDesc="Персональная подписка Яндекс плюс" cardCost="2820 ₽" />
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс плюс на год" cardDesc="Персональная подписка Яндекс плюс" cardCost="2820 ₽"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс плюс на год" cardDesc="Персональная подписка Яндекс плюс" cardCost="2820 ₽"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс плюс на год" cardDesc="Персональная подписка Яндекс плюс" cardCost="2820 ₽"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс плюс на год" cardDesc="Персональная подписка Яндекс плюс" cardCost="2820 ₽"/>
                    <ProductItem cardImg={yaPlus} cardTitle="Яндекс плюс на год" cardDesc="Персональная подписка Яндекс плюс" cardCost="2820 ₽"/>
                </div>
                <div className="product-nav">
                     <h2 className="product-nav-title">Электронные книги</h2>
                </div>
                <div className="product-wrapper">
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк" cardCost="220 ₽"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк" cardCost="220 ₽"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк" cardCost="220 ₽"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк" cardCost="220 ₽"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк" cardCost="220 ₽"/>
                    <ProductItem cardImg={book} cardTitle="Триумфальная арка" cardDesc="Эрих Мария Ремарк" cardCost="220 ₽"/>
                </div>
                <div className="product-nav">
                     <h2 className="product-nav-title">Игры</h2>
                </div>
                <div className="product-wrapper">
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры" cardCost="5200 ₽"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры" cardCost="5200 ₽"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры" cardCost="5200 ₽"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры" cardCost="5200 ₽"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры" cardCost="5200 ₽"/>
                    <ProductItem cardImg={game} cardTitle="Spier-man 2" cardDesc="Код активации от игры" cardCost="5200 ₽"/>
                </div>
            </div>
        </section>
    );
}
 
export default Product;