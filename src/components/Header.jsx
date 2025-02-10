import { DarkModeButton } from "./DarkModeButton"

const Header = ({ toggleMode }) => {
    return (
        <header>
            <h2>Hello!</h2>
            <DarkModeButton toggleMode={ toggleMode } />
        </header>
        
    )
}

export { Header }