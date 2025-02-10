const DarkModeButton = (props) => {
    console.log('Button Props:', props)
    return (
        <button onClick={ props.toggleMode }>Click Me</button>
    )

}

export { DarkModeButton }