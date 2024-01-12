import classes from './Logo.module.scss'
import logoImg from '/logo.svg'

export default function Logo(){
    return(
        <a className={classes.logo} href="#"><img src={logoImg} alt=""/><span className={classes.logoText} >Ink. House</span></a>
    )
}