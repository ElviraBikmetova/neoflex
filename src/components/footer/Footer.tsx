import clsx from "clsx"
import lang from '../../assets/images/lang.svg'
import s from "./style.module.scss"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={'logo'}>QPICK</div>
            <nav className={s.footer__nav}>
                <ul>
                    <li>Избранное</li>
                    <li>Корзина</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className={s.footer__lang}>
                <div>Условия сервиса</div>
                <div className={s.footer__langChoiсe}>
                    <img src={lang} alt="world" />
                    <div>Каз</div>
                    <div>Рус</div>
                    <div>Eng</div>
                </div>
            </div>
            <div className={s.footer__socials}>
                <div className={clsx('icon-vkontakte', s.footer__icon)} />
                <div className={clsx('icon-telegram', s.footer__icon)} />
                <div className={clsx('icon-whatsapp', s.footer__icon)} />
            </div>
        </footer>
    )
}

export default Footer
