import './Button.scss'

export default function Button(props){
    return(
        <button className="button">{props.buttonText}</button>
    )
}