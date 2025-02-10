import { useState } from 'react'

const DarkModeButton = ({darkMode, toggleMode}) => {
    console.log(darkMode)

    let iconClass = darkMode ? "bi bi-sun" : "bi bi-moon-stars-fill"

    return (
        <button className={darkMode ? 'lightMode' : 'darkMode'} onClick={ toggleMode }>Turn {darkMode ? 'off' : 'on'} Dark Mode <i className={iconClass}></i></button>
    )

}

export { DarkModeButton }