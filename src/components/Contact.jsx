import { SubmitButton } from "./SubmitButton"

const Contact = () => {
    return (
        <section className='contactFormSection'>
            <h3 className='contactFormTitle'>Please Contact me Below with any Questions!</h3>
            <form className='contactForm' action="POST" name='contactForm'>
                <div className='senderInfo'>
                    <input type="text" name='name' placeholder='Name' />
                    <input type="text" name='email' placeholder='Email' />
                </div>
                <div className='senderMessage'>
                    <textarea name='message' placeholder='Message' />
                </div>
                <SubmitButton />
            </form>
        </section>
    )
}

export { Contact }