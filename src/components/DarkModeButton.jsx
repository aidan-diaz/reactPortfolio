import { useState } from 'react'

const DarkModeButton = ({darkMode, toggleMode}) => {
    console.log(darkMode)

    return (
        <button onClick={ toggleMode }>Turn {darkMode ? 'off' : 'on'} Dark Mode</button>
    )

}

export { DarkModeButton }