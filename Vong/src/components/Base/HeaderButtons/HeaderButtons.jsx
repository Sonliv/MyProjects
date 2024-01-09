import './HeaderButtons.scss'
export default function HeaderButtons(props){
    return(
        <ul className='ul-horizontal' >
        <li className='animated-text'><a href="#">{props.firstItem}</a></li>
        <li className='animated-text'><a href="#">{props.secondItem} </a></li>
        <li className='animated-text'><a href="#">{props.thirdItem}</a></li>
        <li className='animated-text'><a href="#">{props.fourthItem}</a></li>
    </ul>
    )
    }