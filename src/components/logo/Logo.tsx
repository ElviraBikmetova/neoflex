import { useNavigate } from "react-router-dom"
import { ERoutes } from "../../enums/routes"

const Logo = () => {
    const navigate = useNavigate()

    return (
        <button className={'logo'} onClick={() => navigate(ERoutes.Root)}>QPICK</button>
    )
}

export default Logo
