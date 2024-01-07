import logo from '/logo.png'
import './Logotype.scss'
export default function Logotype(){
    return(
        <a href="#" className="logotype">
            <img src={logo} alt="" />
            <span>Ink House</span>
        </a>
    )
}