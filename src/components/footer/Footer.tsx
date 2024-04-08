import clsx from "clsx"
import lang from '../../assets/images/lang.svg'
import s from "./style.module.scss"
import Logo from "../logo/Logo"
import { navItems } from "../../data/navItems"
import { langItems } from "../../data/langItems"
import { socialItems } from "../../data/socialItems"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Logo />
            <nav className={s.footer__nav}>
                <ul>
                    {navItems.map(item => <li key={item}>{item}</li>)}
                    <li className={s.footer__langChoiсe}>
                        <img src={lang} alt="world" />
                        {langItems.map(item => <div key={item}>{item}</div>)}
                    </li>
                </ul>
            </nav>
            <div className={s.footer__socials}>
                {socialItems.map(item => <div key={item.iconName} className={clsx(item.iconName, s['footer__' + item.classNamePart])} />)}
            </div>
        </footer>
    )
}

export default Footer
