import { Link } from 'react-router-dom';
import './Logo.scss'
import Logotype from '/logo.svg'

const Logo = () => {
    return (
        <Link to="/" >
             <div className="logo">
                 <img src={Logotype} alt="" />
                <span>ИТ Маркет</span>
              </div>
        </Link>
    );
}
 
export default Logo;