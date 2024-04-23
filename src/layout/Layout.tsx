import { Outlet } from "react-router-dom"
import clsx from "clsx"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import s from './style.module.scss'

const Layout = () => {
    return (
        <div className={clsx(s.layout, 'container')}>
            <Header />
            <Main className={s.main}>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}

export default Layout
