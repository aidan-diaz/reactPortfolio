import { DarkModeButton } from "./DarkModeButton"
import { LinkIcon } from "./LinkIcon"

const Header = ({ darkMode, toggleMode }) => {

    const iconClasses = [
        {className: 'bi bi-github'},
        {className: 'bi bi-linkedin'},
        {className: 'bi bi-twitter-x'},
        {className: 'bi bi-envelope'}
    ]

    return (
        <header>
            <nav>
                <ul>
                    <LinkIcon icon={iconClasses[0]} />
                    <LinkIcon icon={iconClasses[1]} />
                    <LinkIcon icon={iconClasses[2]} />
                    <LinkIcon icon={iconClasses[3]} />
                </ul>
            </nav>
            <DarkModeButton darkMode={darkMode} toggleMode={toggleMode} />
        </header>
        
    )
}

export { Header }