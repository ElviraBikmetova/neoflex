import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Main from "../components/main/Main"


const Layout = () => {
    return (
        <div className={'container'}>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}

export default Layout
