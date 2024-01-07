import '../Footer/Footer.scss'
export default function FooterList(props){
    return(
        <ul className="footer-list">
        <li><a href="#">{props.footerTitle}</a></li>
        <li><a href="#">{props.footerItem1}</a></li>
        <li><a href="#">{props.footerItem2}</a></li>
        <li><a href="#">{props.footerItem3}</a></li>
    </ul>
    )
}