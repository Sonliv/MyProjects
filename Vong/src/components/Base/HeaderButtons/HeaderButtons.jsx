import './HeaderButtons.scss'
export default function HeaderButtons(props){
    return(
        <ul className='ul-horizontal' >
        <li className='animated-text'><a href="#categoriesID">{props.firstItem}</a></li>
        <li className='animated-text'><a href="#poshivID">{props.secondItem} </a></li>
        <li className='animated-text'><a href="#aboutID">{props.thirdItem}</a></li>
        <li className='animated-text'><a href="#contactID">{props.fourthItem}</a></li>
    </ul>
    )
    }