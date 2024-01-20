import './Button.scss'
const button = (props) => {
    return (
        <button className="base-btn">{props.buttonText}</button>
    );
}
 
export default button;