import './Product.scss'
import ProuctImg from '/productImg.png'

function  ProductItem(){
    return(
    <div className="product-item">
        <img className='product-img' src={ProuctImg} alt="" />
        <p className="product-item-title">Универсальные иконки 1000+</p>
        <p className="product-item-cost">1700 ₽</p>
    </div>
    )
}
const Product = () => {
    return (
        <>
         <section className="product">
            <div className="container">
                <div className="product-container">
                    <h3 className="product-title">Иконки</h3>
                    <p className="product-desc">Улучшите свой дизайн с помощью готовых наборов с иконками</p>
                    <div className="product-wrapper">
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                    </div>
                </div>
            </div>
        </section>
        <section className="product">
            <div className="container">
                <div className="product-container">
                    <h3 className="product-title">Иконки</h3>
                    <p className="product-desc">Улучшите свой дизайн с помощью готовых наборов с иконками</p>
                    <div className="product-wrapper">
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                    </div>
                </div>
            </div>
        </section>
        <section className="product">
            <div className="container">
                <div className="product-container">
                    <h3 className="product-title">Иконки</h3>
                    <p className="product-desc">Улучшите свой дизайн с помощью готовых наборов иконок</p>
                    <div className="product-wrapper">
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Product;