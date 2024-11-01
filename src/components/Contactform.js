import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css';

function Contactform() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gd6ti4i', 'template_2dypft4', form.current, 'Q189Sk0PSAXWzO01Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <footer class="footer formulario" id="contacto">
      <div className="skew-arriba" id='skew_project'></div>
        <div class="deg-footer"></div>
  
          <div class="ejeZ-footer"></div>
          <div class="footer-content">
            <div class="footer-title">

              <h2 className='h2-mobile' >Connect with Dev</h2>
              <hr/>

            </div>

            <div class="formulario-content">
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input name="user_name" type="text" class="form-control" placeholder="Your Name" required/>
                <br/>
                <input name="user_email" type="email" class="form-control" placeholder="Your Email" 
                required/><br/>
                <label for="menssage" class="message">Message: </label>
                <textarea name="message" class="form-control" row="4" required>  
                </textarea><br/>                    
                <button type="submit" class="form-control submit" value="SEND MESSAGE">Send Message</button>                               
                </form>
            </div>
          
          </div>
  
    </footer>
  )
}

export default Contactform