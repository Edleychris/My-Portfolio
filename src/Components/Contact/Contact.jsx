import React from 'react';
import {FaRegEnvelope} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import con from './contact.module.css'
import Socials from './Socials';


function Contact() {
  return (
    <div id='contact' className={con.Contact}>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>

    <div className={con.contactContainer}>
    <div className={con.contactOptions}>
    <article className={con.contactOption}>
    <FaRegEnvelope className={con.contactIcon}/>
    <h4>Email</h4>
    <h5>edleychris.ec@gmail.com</h5>
    <a href='mailto:edleychris.ec@gmail.com' target='_blank'>Send a message</a>
    </article>


    <article className={con.contactOption}>
    <BsWhatsapp className={con.contactIcon}/>
    <h4>Whatsapp</h4>
    <h5>+2348135646949</h5>
    <a href='https://api.whatsapp.com/send?phone=+2348135646949' target='_blank'>Send a message</a>
    </article>

    </div>

    <form action='' className={con.contactForm}>
    <input type='text' name='name' placeholder='Full Name' required/>
    <input type='email' name='email' placeholder='Email' required/>
    <textarea name='message' rows='7' placeholder='Message' required></textarea>
    <button type='submit'>Send Message</button>
    </form>
    </div>
<div className={con.SocialsBlock}> 
<Socials/>

</div>
    </div>
    
  )
}

export default Contact