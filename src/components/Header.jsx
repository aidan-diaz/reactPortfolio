import { DarkModeButton } from "./DarkModeButton"

const Header = ({ darkMode, toggleMode }) => {

    return (
        <header>
            <h2>Hello!</h2>
            <DarkModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </header>
        
    )
}

export { Header }