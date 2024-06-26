import clsx from "clsx"
import { useNavigate } from "react-router-dom"
import { ERoutes } from "../../enums/routes"
import { useAppSelector } from "../../hooks/redux"
import { products } from "../../store/cartSlice"
import Logo from "../logo/Logo"
import s from "./style.module.scss"

const Header = () => {
    const productsInCart = useAppSelector(products)
    const productsInCartCount = productsInCart.reduce((acc, curr) => acc + (curr.count || 0), 0)
    const navigate = useNavigate()

    return (
        <header className={s.header}>
            <Logo />
            <div className={s.header__right}>
                <button className={clsx('icon-like', s.header__iconLike)} />
                <button
                className={clsx('icon-cart', s.header__iconCart)}
                onClick={() => navigate(ERoutes.Cart)}>
                    {productsInCart.length > 0 &&
                    <div className={s.header__counter}>{productsInCartCount}</div>}
                </button>
            </div>
        </header>
    )
}

export default Header
