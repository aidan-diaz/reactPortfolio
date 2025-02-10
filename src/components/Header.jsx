import { DarkModeButton } from "./DarkModeButton"
import { HeadShot } from "./Headshot"

const Header = ({ darkMode, toggleMode }) => {

    return (
        <header>
            <h2>Hello! My name is Aidan Diaz - I am a Fullstack Web Developer</h2>
            <HeadShot />
            <DarkModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </header>
        
    )
}

export { Header }