import { SubmitButton } from "./SubmitButton"

const Contact = ({ darkMode }) => {
    console.log('Contact', darkMode)
    return (
        <section className='contactFormSection'>
            <h3 className='contactFormTitle'>Please Contact me Below with any Questions!</h3>
            <form className='contactForm' action="POST" name='contactForm' netlify>
                <div className='senderInfo'>
                    <input type="text" name='name' placeholder='Name' />
                    <input type="text" name='email' placeholder='Email' />
                </div>
                <div className='senderMessage'>
                    <textarea name='message' placeholder='Message' />
                </div>
                <SubmitButton darkMode={ darkMode } />
            </form>
        </section>
    )
}

export { Contact }