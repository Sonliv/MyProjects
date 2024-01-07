import './ItemCard.scss';

export default function ItemCard({ title, description, price, subtitle, image }){
    const imagePath = `/public/${image}.png`; 

    return(
        <div className="card-wrapper">
            <div className="card-item">
                <img src={imagePath} alt="" className="card-img" />
                <h3 className="card-subtitle">{subtitle}</h3>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="card-cost">{price} руб</div>
                <button className="card-button">В корзину</button>
            </div>
        </div>
    );
}
