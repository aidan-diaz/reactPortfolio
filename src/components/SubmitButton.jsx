const SubmitButton = ({ darkMode }) => {
    console.log('button', darkMode)
    const submitButtonClasses = `submitButton ${darkMode ? 'lightMode' : 'darkMode'}`
    return (
        <input className={submitButtonClasses} type='submit' value='Send Message'>Send Message</input>
    )
}


export { SubmitButton }