import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="dark-mode">
      <div className="footer-container">
        <div className="footer-column contact-form">
          <h3>Contact Us</h3>
          <form>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message"></textarea><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="footer-column social-media">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer