import { DarkModeButton } from "./DarkModeButton"

const Header = ({ darkMode, toggleMode }) => {

    return (
        <header>
            <DarkModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </header>
        
    )
}

export { Header }