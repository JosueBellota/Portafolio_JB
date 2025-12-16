import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './css/contactform.css';

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      message: message,
      timestamp: new Date()
    })
    .then(() => {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((error) => {
      console.error("Error sending message: ", error);
      alert("Failed to send message, please try again.");
    });
  };

  return (
    <footer className="footer formulario" id="contacto">
      {/* <div className="skew-arriba" id='skew_project'></div> */}
        <div className="deg-footer"></div>
  
          <div className="ejeZ-footer"></div>
          <div className="footer-content">
            <div className="footer-title">

              <h2 className='h2-mobile' >Connect with Dev</h2>
              <hr/>

            </div>

            <div className="formulario-content">
                <form id="contact-form" onSubmit={handleSubmit}>
                <input 
                  name="user_name" 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input 
                  name="user_email" 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <label htmlFor="message" className="message">Message: </label>
                <textarea 
                  name="message" 
                  className="form-control" 
                  rows="4" 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                >  
                </textarea><br/>                    
                <button type="submit" className="form-control submit" value="SEND MESSAGE">Send Message</button>                               
                </form>
            </div>
          
          </div>
  
    </footer>
  )
}

export default Contactform