import classes from './Header.module.scss'
import Logo from '../../BaseComponents/Logo/Logo'
import Cart from '/cart.svg'

export default function Header(){
    return(
        <div className={classes.header}>
            <div className="container">
                <div className={classes.headerWrapper}>
                    <Logo/>
                    <nav>
                        <ul className={classes.navList}>
                            <li className={classes.navItem}><a href="#">Репродукции</a></li>
                            <li className={classes.navItem}><a href="#">Новинки</a></li>
                            <li className={classes.navItem}><a href="#">О нас</a></li>
                            <li className={classes.navItem}><a href="#"><img src={Cart} alt="" /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}