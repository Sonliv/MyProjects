import './Logo.scss'
import Logotype from '/logo.svg'

const Logo = () => {
    return (
        <div className="logo">
            <img src={Logotype} alt="" />
            <span>ИТ Маркет</span>
        </div>
    );
}
 
export default Logo;