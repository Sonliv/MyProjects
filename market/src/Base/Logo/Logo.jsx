import LogoImg from '/logo.svg'
import './Logo.scss'
const Logo = () => {
    return (
        <a href="#" className='logo' > 
        <span className='logotype-text' >&lt;/&gt;</span>
        {/* <img className='logo-img' src={LogoImg} alt="" /> */}
        <span>ИТ<br/>Маркет</span>
        </a>
    );
}
 
export default Logo;