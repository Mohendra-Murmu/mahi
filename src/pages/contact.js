import React, { useEffect } from 'react';
import emailjs, { init } from 'emailjs-com';
import GoogleMap from './googlemap';

init("user_NpLxOH7fqWGELqCvhFgS0");

export default function Contact() {

    function sendEmail(e) {
         e.preventDefault();
            emailjs.sendForm('Email', 'template_62sb5z3', e.target, 'user_NpLxOH7fqWGELqCvhFgS0')
                .then((result) => {},
                 (error) => {
                console.log(error.text);
            });
            e.target.reset()                        
    }    
    useEffect(() => {
            document.title = 'Contact - Mohendra Murmu';
        }, []);

        
    return (
        <>         
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>
                <div className="contact__container bd-grid">
                    <div >
                        <GoogleMap />

                    </div>
                    <div>
                    <form onSubmit={sendEmail} className="contact__form">
                        <input 
                        type="text"
                        name="name" 
                        placeholder="Name" 
                        className="contact__input"                        
                         />
                        <input 
                        type="mail" 
                        name="email" 
                        placeholder="Email" 
                        className="contact__input"                        
                         />
                        <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        className="contact__input"                        
                         />
                        <textarea 
                        name="message" 
                        placeholder="Feel free to write here.."                         
                        cols="0" 
                        rows="6" 
                        className="contact__input"
                        >

                        </textarea>
                        <input type="submit" value="Send Message" className="contact__button button" />
                    </form>
                    </div>
                </div>
            </section>
            </>
    )
}

