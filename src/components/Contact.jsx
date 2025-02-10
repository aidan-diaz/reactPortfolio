const Contact = () => {
    return (
        <section className='contactFormSection'>
            <h3 className='contactFormTitle'>Please Contact me Below with any Questions!</h3>
            <form className='contactForm' action="POST">
                <div className='senderInfo'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                </div>
                <div className='senderMessage'>
                    <textarea placeholder='Message' />
                </div>
                {/* submit button goes here */}
            </form>
        </section>
    )
}

export { Contact }