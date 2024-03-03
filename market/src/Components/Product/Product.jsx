import './Product.scss'
import ProductImg from '/product_1.jpg'
import ProductImg2 from '/product_2.jpg'
import ProductImg3 from '/product_3.jpg'
import favorire from '/favorite.png'
import Cart from '/cart.png'


function  ProductItem(props){
    return(
    <div className="product-item">
        <img className='product-item-img' src={props.productImage} alt="" />
        <div className="product-item-text">
            <p className="product-item-title">Универсальные иконки 1000+</p>
            <p className="product-item-cost">1700 ₽</p>
            <div className="product-item-bottom">
                 <button className='product-item-cart'><img src={Cart} alt=""/></button>
                 <button className="product-item-like"><img src={favorire} alt="" /></button>
            </div>
        </div>
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
                        <ProductItem productImage={ProductImg} />
                        <ProductItem productImage={ProductImg2} />
                        <ProductItem productImage={ProductImg3} />
                    </div>
                </div>
            </div>
        </section>
        <section className="product">
            <div className="container">
                <div className="product-container">
                    <h3 className="product-title">Графика</h3>
                    <p className="product-desc">Графические изображения и шаблоны </p>
                    <div className="product-wrapper">
                        <ProductItem productImage={ProductImg} />
                        <ProductItem productImage={ProductImg} />
                        <ProductItem productImage={ProductImg} />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Product;