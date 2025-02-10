import { DarkModeButton } from "./DarkModeButton"

const Header = ({ darkMode, toggleMode }) => {

    return (
        <header>
            <h2>Hello! My name is Aidan Diaz - I am a Fullstack Web Developer</h2>
            <DarkModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </header>
        
    )
}

export { Header }