import clsx from "clsx"
import s from "./style.module.scss"
import { useNavigate } from "react-router-dom"
import { ERoutes } from "../../enums/routes"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={s.header}>
            <button className={'logo'} onClick={() => navigate(ERoutes.Root)}>QPICK</button>
            <div className={s.header__right}>
                <div className={clsx('icon-like', s.header__iconLike)} />
                <button
                    className={clsx('icon-cart', s.header__iconCart)}
                    onClick={() => navigate(ERoutes.Cart)}
                />
            </div>
        </header>
    )
}

export default Header
