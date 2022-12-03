import React, { useRef } from 'react';
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
// import { RiMessengerLine } from 'react-icons/ri'
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className='contact_container'>
                <div className="contact_options">
                    <article className='contact_option'>
                        <HiOutlineMail className='contact_icon' />
                        <h4>Email Address</h4>
                        <h5>barosiofelix@gmail.com</h5>
                        <a href="mailto:barosiofelix@gmail.com" target={'_blank'} rel="noreferrer">Send Message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder='Your Message' required />
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
