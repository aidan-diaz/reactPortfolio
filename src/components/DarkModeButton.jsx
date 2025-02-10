import { useState } from 'react'

const DarkModeButton = () => {
    const [darkMode, setMode] = useState(false)

    return (
        <button>Click Me</button>
    )

}

export { DarkModeButton }