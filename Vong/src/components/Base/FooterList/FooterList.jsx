import './FooterList.scss'

export default function FooterList(props){
    return(
        <ul className="footer-list">
        <li><a href="#">{props.footerUrl}</a></li>
        <li><a href="#">{props.footerUrl2}</a></li>
        <li><a href="#">{props.footerUrl3}</a></li>
        <li><a href="#">{props.footerUrl4}</a></li>
        </ul>
    )
}