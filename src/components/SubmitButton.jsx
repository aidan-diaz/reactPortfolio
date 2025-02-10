const SubmitButton = ({ darkMode }) => {
    console.log('button', darkMode)
    const submitButtonClasses = `submitButton ${darkMode ? 'lightMode' : 'darkMode'}`
    return (
        <button className={submitButtonClasses}>Send Message</button>
    )
}


export { SubmitButton }