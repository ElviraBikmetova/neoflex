import { FC } from "react"

interface MainProps {
    children: JSX.Element
}

const Main: FC<MainProps> = ({ children }) => {
    return (
        <main>
            { children }
        </main>
    )
}

export default Main
