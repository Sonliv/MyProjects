import './Card.scss';
import Button from "../Button/Button";
import { ways } from './data.js';

export default function Card(props) {
    return (
        <div className="card">
        <img className="card-img" src={props.imgCard} alt="" />
        <p className="card-autor">{props.autor}</p>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-subtitle">{props.subtitle}</p>
        <p className="card-cost">{props.cost} руб</p>
        <div className="card-button">
            <Button buttonText="Купить" />
        </div>
    </div>
    );
}

