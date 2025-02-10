import { DarkModeButton } from "./DarkModeButton"
import { LinkIcon } from "./LinkIcon"

const Header = ({ darkMode, toggleMode }) => {

    const iconClasses = [
        {
            className: 'bi bi-github',
            link: 'https://github.com/aidan-diaz'
        },
        {
            className: 'bi bi-linkedin',
            link: 'https://www.linkedin.com/in/aidan--diaz/'
        },
        {
            className: 'bi bi-twitter-x',
            link: 'https://x.com/Aidan__Diaz'
        },
        {
            className: 'bi bi-envelope',
            link: 'diaz.aidan.d@gmail.com'
        }
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