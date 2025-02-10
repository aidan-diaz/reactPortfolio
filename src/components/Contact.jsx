import { SubmitButton } from "./SubmitButton"

const Contact = ({ darkMode }) => {
    console.log('Contact', darkMode)
    return (
        <section className='contactFormSection'>
            <h3 className='contactFormTitle'>Please Contact me Below with any Questions!</h3>
            <form className='contactForm' method="POST" name='contact' netlify>
                <input type="hidden" name="form-name" value="contact" />
                <div className='senderInfo'>
                    <input type="text" name='name' placeholder='Name' />
                    <input type="text" name='email' placeholder='Email' />
                </div>
                <div className='senderMessage'>
                    <textarea name='message' placeholder='Message' />
                </div>
                <SubmitButton darkMode={ darkMode } value='Send Message' />
            </form>
        </section>
    )
}

export { Contact }