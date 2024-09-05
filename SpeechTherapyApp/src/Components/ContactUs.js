// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Ensure you create this CSS file

function ContactUs() {
  return (
    <div id= "contactus" className="contactus">
      <div className="contact-details">
        <h1>CONTACT US</h1>
        <p>Getting in touch is easy!</p>
        <p>t +123 456 789</p>
        <p>1234 Main Street Anywhere</p>
        <p>General: sayhi@baamboostudio.com</p>
        <p>Support: support@baamboostudio.com</p>
        <div className="social-icons">
          {/* Add your social media icons here as <a> links */}
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-rss"></i></a>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Telephone" required />
          <textarea placeholder="Comment" required></textarea>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

