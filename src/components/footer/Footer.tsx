import { NavLink } from "react-router-dom"
import clsx from "clsx"
import lang from '../../assets/images/lang.svg'
import { navItems } from "../../data/navItems"
import { langItems } from "../../data/langItems"
import { socialItems } from "../../data/socialItems"
import Logo from "../logo/Logo"
import s from "./style.module.scss"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Logo />
            <nav className={s.footer__nav}>
                <ul>
                    {navItems.map(item => <li key={item.itemName}><NavLink to={item.path}>{item.itemName}</NavLink></li>)}
                    <li className={s.footer__langChoiсe}>
                        <img src={lang} alt="world" />
                        {langItems.map(item => <button key={item}>{item}</button>)}
                    </li>
                </ul>
            </nav>
            <div className={s.footer__socials}>
                {socialItems.map(item => <a href={item.link} key={item.iconName} className={clsx(item.iconName, s.footer__icon)} />)}
            </div>
        </footer>
    )
}

export default Footer
