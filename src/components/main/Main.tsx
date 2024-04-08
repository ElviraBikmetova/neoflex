import { FC } from "react"

interface MainProps {
    children: JSX.Element
    className: string
}

const Main: FC<MainProps> = ({ children, className }) => {
    return (
        <main className={className}>
            { children }
        </main>
    )
}

export default Main
